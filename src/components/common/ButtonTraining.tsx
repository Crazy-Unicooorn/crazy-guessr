import { useState, useEffect } from "react";
import { animated } from "react-spring";
import { styled } from "styled-components";
import useBoop from "../../hooks/use-boop";
import { StyledButton } from "./Button";
import DeckIcon from "../../assets/icons/general/deck";

interface ButtonProps {
  onClick: () => void;
}

const CollapsingText = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 640px) {
    display: none;
  }
`;

function ButtonTraining({ onClick }: ButtonProps) {
  const [styleHovering, triggerHovering] = useBoop({
    x: 4,
    y: -4,
    rotation: -27,
    timing: 200,
    springConfig: { tension: 100, friction: 5 },
  }) as [never, () => void];

  const [currentStyle, setCurrentStyle] = useState<React.CSSProperties>(() => styleHovering);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
      setCurrentStyle(() => styleHovering);
    }, 220);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimating, styleHovering]);

  return (
    // OnClick todo: close modal
    <StyledButton
      type="button"
      backgroundColor="var(--pastel-pink)"
      shadow="dark"
      onMouseEnter={() => {
        setCurrentStyle(() => styleHovering);
        triggerHovering();
      }}
      onClick={onClick}
    >
      <span className="front">
        <CollapsingText>Recall Training</CollapsingText>
        <animated.span style={currentStyle}>
          <DeckIcon size={24} fill="#000" />
        </animated.span>
      </span>
    </StyledButton>
  );
}

export default ButtonTraining;

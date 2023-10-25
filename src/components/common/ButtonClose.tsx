import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animated } from "react-spring";
import useBoop from "../../hooks/use-boop";
import { StyledButton } from "./Button";
import CloseIcon from "../../assets/icons/actions/close";

interface ButtonProps {
  onClick: () => void;
}

function ButtonClose({ onClick }: ButtonProps) {
  const [styleHovering, triggerHovering] = useBoop({
    rotation: 180,
    scale: 0.72,
    timing: 500,
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
    }, 520);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isAnimating, styleHovering]);

  return (
    <Link to="/">
      <StyledButton
        type="button"
        backgroundColor="var(--pastel-black)"
        shadow="dark"
        onMouseEnter={() => {
          setCurrentStyle(() => styleHovering);
          triggerHovering();
        }}
        onClick={onClick}
      >
        <span className="front">
          <animated.span style={currentStyle}>
            <CloseIcon size={24} fill="var(--pastel-pink)" />
          </animated.span>
        </span>
      </StyledButton>
    </Link>
  );
}

export default ButtonClose;

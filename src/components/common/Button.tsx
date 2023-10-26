import { useState, useEffect } from "react";
import { animated } from "react-spring";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import useBoop from "../../hooks/use-boop";
import ArrowRight from "../../assets/icons/directional/arrow_right";
import ArrowLeft from "../../assets/icons/directional/arrow_left";

interface StyledButtonProps {
  backgroundColor?: string;
  shadow?: "light" | "dark";
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  border: none;
  background-color: ${(props) => (props.shadow === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)")};
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  width: fit-content;
  min-width: 48px;

  -webkit-tap-highlight-color: transparent;

  -webkit-user-select: none;
  user-select: none;

  .front {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    height: 48px;
    box-sizing: border-box;
    gap: 8px;

    position: relative;
    border-radius: 8px;
    color: black;
    background-color: ${(props) => props.backgroundColor || "red"};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const CollapsingText = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 640px) {
    display: none;
  }
`;

interface ButtonProps {
  hasInternalLink?: boolean;
  internalLink?: string;
  hasLink?: boolean;
  externalLink?: string;
  hasIconLeft?: boolean;
  iconLeft?: React.ReactNode;
  hasIconRight?: boolean;
  iconRight?: React.ReactNode;
  text?: string;
  backgroundColor?: string;
  shadow?: "light" | "dark";
  style?: React.CSSProperties;
  collapseText?: boolean;
  onClick?: () => void;
  boop?: {
    x?: number;
    y?: number;
    rotation?: number;
    scale?: number;
    timing?: number;
    springConfig?: {
      tension: number;
      friction: number;
    };
    size?: number;
  };
}

function Button({
  hasInternalLink,
  internalLink,
  hasLink,
  externalLink,
  text,
  hasIconLeft,
  iconLeft,
  hasIconRight,
  iconRight,
  backgroundColor,
  shadow,
  style,
  collapseText,
  onClick,
  boop = {},
}: ButtonProps) {
  const [styleHovering, triggerHovering] = useBoop(boop) as [never, () => void];

  const [currentStyle, setCurrentStyle] = useState<React.CSSProperties>(() => styleHovering);
  const [isAnimating, setIsAnimating] = useState(false);

  const TextComponent = collapseText ? CollapsingText : "div";

  const hasText = text !== undefined && text !== null && text !== "";

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

  if (hasLink) {
    return (
      <a href={externalLink} target="_blank" rel="noreferrer">
        <StyledButton
          type="button"
          backgroundColor={backgroundColor}
          shadow={shadow}
          onMouseEnter={() => {
            setCurrentStyle(() => styleHovering);
            triggerHovering();
          }}
          style={style}
        >
          <span className="front">
            {hasIconLeft && <animated.span style={currentStyle}>{iconLeft}</animated.span>}
            {hasText && <TextComponent style={{ flexGrow: 1, textAlign: "left" }}>{text}</TextComponent>}
            {hasIconRight && <animated.span style={currentStyle}>{iconRight}</animated.span>}
          </span>
        </StyledButton>
      </a>
    );
  }
  if (hasInternalLink) {
    return (
      <Link to={`/${internalLink}`}>
        <StyledButton
          type="button"
          backgroundColor={backgroundColor}
          shadow={shadow}
          onMouseEnter={() => {
            setCurrentStyle(() => styleHovering);
            triggerHovering();
          }}
          style={style}
        >
          <span className="front">
            {hasIconLeft && <animated.span style={currentStyle}>{iconLeft}</animated.span>}
            {hasText && <TextComponent style={{ flexGrow: 1, textAlign: "left" }}>{text}</TextComponent>}
            {hasIconRight && <animated.span style={currentStyle}>{iconRight}</animated.span>}
          </span>
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton
      type="button"
      backgroundColor={backgroundColor}
      shadow={shadow}
      onMouseEnter={() => {
        setCurrentStyle(() => styleHovering);
        triggerHovering();
      }}
      onClick={onClick}
      style={style}
    >
      <span className="front">
        {hasIconLeft && <animated.span style={currentStyle}>{iconLeft}</animated.span>}
        {hasText && <TextComponent style={{ flexGrow: 1, textAlign: "left" }}>{text}</TextComponent>}
        {hasIconRight && <animated.span style={currentStyle}>{iconRight}</animated.span>}
      </span>
    </StyledButton>
  );
}

Button.defaultProps = {
  hasInternalLink: false,
  internalLink: "",
  hasLink: false,
  externalLink: "",
  text: "Default Text",
  backgroundColor: "var(--pastel-purple)",
  shadow: "dark",
  style: {},
  hasIconLeft: false,
  iconLeft: <ArrowLeft size={24} fill="#000" />,
  hasIconRight: false,
  iconRight: <ArrowRight size={24} fill="#000" />,
  collapseText: false,
  onClick: () => {},
  boop: {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    timing: 200,
    springConfig: {
      tension: 100,
      friction: 5,
    },
    size: 24,
  },
};

export default Button;

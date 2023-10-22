import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animated } from "react-spring";
import { StyledButton } from "../components/common/Button";
import useBoop from "../hooks/use-boop";
import ArrowLeft from "../assets/icons/directional/arrow_left";

function ButtonHome() {
  const [styleHovering, triggerHovering] = useBoop({
    x: -8,
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
    <Link to="/">
      <StyledButton
        type="button"
        backgroundColor="var(--pastel-pink)"
        shadow="dark"
        onMouseEnter={() => {
          setCurrentStyle(() => styleHovering);
          triggerHovering();
        }}
      >
        <span className="front">
          <animated.span style={currentStyle}>
            <ArrowLeft size={24} fill="black" />
          </animated.span>
          Go Home
        </span>
      </StyledButton>
    </Link>
  );
}

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <ButtonHome />
    </>
  );
}

export default NotFound;

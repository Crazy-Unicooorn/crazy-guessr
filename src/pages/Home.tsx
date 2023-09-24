import { animated } from "react-spring";
import { useEffect, useState } from "react";
import GithubIcon from "../assets/icons/brands/github";
import { StyledButton } from "../components/common/Button";
import useBoop from "../hooks/use-boop";

function ButtonTest() {
  const [styleHovering, triggerHovering] = useBoop({
    scale: 1.1,
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
    <a href="https://github.com/Crazy-Unicooorn/crazy-guessr" target="_blank" rel="noreferrer">
      <StyledButton
        type="button"
        backgroundColor="#ECCAAA"
        shadow="dark"
        onMouseEnter={() => {
          setCurrentStyle(() => styleHovering);
          triggerHovering();
        }}
      >
        <span className="front">
          <animated.span style={currentStyle}>
            <GithubIcon fill="black" size={24} />
          </animated.span>
          <div style={{ width: `100%`, textAlign: "left" }}>Contribute on Github</div>
        </span>
      </StyledButton>
    </a>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page content</p>
      <ButtonTest />
    </div>
  );
}

export default Home;

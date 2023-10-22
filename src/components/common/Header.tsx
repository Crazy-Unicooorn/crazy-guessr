import { useEffect, useState } from "react";
import { animated } from "react-spring";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useBoop from "../../hooks/use-boop";
import "./Header.css";
import { StyledButton } from "./Button";
import GithubIcon from "../../assets/icons/brands/github";
import TwitchIcon from "../../assets/icons/brands/twitch";
// import coffeeImg from "../../assets/icons/brands/buy-me-a-coffee.png";
import HeartIcon from "../../assets/icons/general/heart";

const BrandTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  -webkit-user-select: none;
  user-select: none;
`;

const BrandTextCrazy = styled.span`
  color: var(--pastel-green, #ade1d4);
  font-family: Quicksand;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 83.333% */
`;

const BrandTextGuessr = styled.span`
  color: var(--pastel-pink, #dea4c0);
  font-family: Quicksand;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const Separator = styled.div`
  content: " ";
  flex: 1 0 0;
  align-self: stretch;
`;

const CollapsingText = styled.div`
  width: 100%;
  text-align: left;

  @media (max-width: 640px) {
    display: none;
  }
`;

function ButtonTwitch() {
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
    <a href="https://www.twitch.tv/crazyquirkyunicorn" target="_blank" rel="noreferrer">
      <StyledButton
        type="button"
        backgroundColor="#e1cdff"
        shadow="light"
        onMouseEnter={() => {
          setCurrentStyle(() => styleHovering);
          triggerHovering();
        }}
      >
        <span className="front">
          <animated.span style={currentStyle}>
            <TwitchIcon size={24} />
          </animated.span>
          <CollapsingText>Catch me live</CollapsingText>
        </span>
      </StyledButton>
    </a>
  );
}

function ButtonGithub() {
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
        backgroundColor="var(--pastel-orange, #eccaaa);"
        shadow="light"
        onMouseEnter={() => {
          setCurrentStyle(() => styleHovering);
          triggerHovering();
        }}
      >
        <span className="front">
          <animated.span style={currentStyle}>
            <GithubIcon fill="black" size={24} />
          </animated.span>
          <CollapsingText>Contribute</CollapsingText>
        </span>
      </StyledButton>
    </a>
  );
}

function ButtonBuymeacoffee() {
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
    <a href="https://ko-fi.com/crazy_unicorn" target="_blank" rel="noreferrer">
      <StyledButton
        type="button"
        backgroundColor="var(--pastel-yellow, #f7edc3);"
        shadow="light"
        onMouseEnter={() => {
          setCurrentStyle(() => styleHovering);
          triggerHovering();
        }}
      >
        <span className="front">
          <animated.span style={currentStyle}>
            {/* <img src={coffeeImg} alt="" width={24} /> */}
            <HeartIcon size={24} fill="#000" />
          </animated.span>
          <CollapsingText>Donate</CollapsingText>
        </span>
      </StyledButton>
    </a>
  );
}

const LastUpdateText = styled.span`
  font-size: 12px;
  margin-left: 32px;
  white-space: pre-line;

  @media (max-width: 840px) {
    display: none;
  }
`;

function Header() {
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/Crazy-Unicooorn/crazy-guessr")
      .then((response) => response.json())
      .then((data) => {
        const date = new Date(data.pushed_at);
        setLastUpdate(`updated\n ${date.toLocaleDateString()}`);
      });
  }, []);

  return (
    <section className="header">
      <Link to="/" style={{ textDecoration: `none` }}>
        <BrandTextWrapper>
          <BrandTextCrazy>Crazy&apos;</BrandTextCrazy>
          <BrandTextGuessr>Guessr</BrandTextGuessr>
        </BrandTextWrapper>
      </Link>
      <Separator />
      <ButtonTwitch />
      <ButtonGithub />
      <ButtonBuymeacoffee />
      <LastUpdateText>{lastUpdate}</LastUpdateText>
    </section>
  );
}

export default Header;

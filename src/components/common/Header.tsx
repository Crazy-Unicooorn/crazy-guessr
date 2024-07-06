import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";
import GithubIcon from "../../assets/icons/brands/github";
import TwitchIcon from "../../assets/icons/brands/twitch";
import Button from "./Button";
import DonateButton from "../other/DonateButton";
import logo from "../../assets/icons/brands/cg_logo.svg";

const BrandTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  -webkit-user-select: none;
  user-select: none;
`;

const BrandTextCrazy = styled.span`
  color: white;
  font-family: Quicksand;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 83.333% */
`;

const BrandTextGuessr = styled.span`
  color: var(--purple-300);
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

const LastUpdateText = styled.span`
  font-size: 12px;
  margin-left: 32px;
  white-space: pre-line;
  line-height: 1.5;

  @media (max-width: 840px) {
    display: none;
  }

  a {
    color: white;
  }
`;

interface HeaderProps {
  onClick: () => void;
}

function Header({ onClick }: HeaderProps) {
  const [lastUpdate, setLastUpdate] = useState("Last update:\nloading...");
  const boopConfig = { scale: 1.1, timing: 200, springConfig: { tension: 100, friction: 5 } };
  const brandBoxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textDecoration: `none`,
    gap: "0.5rem",
  };

  useEffect(() => {
    fetch("https://api.github.com/repos/Crazy-Unicooorn/crazy-guessr")
      .then((response) => response.json())
      .then((data) => {
        const date = new Date(data.pushed_at); // updated_at is not accurate.
        setLastUpdate(`Last update:\n ${date.toLocaleDateString()}`);
      });
  }, []);

  return (
    <section className="header">
      <Link to="/" style={brandBoxStyle} onClick={onClick}>
        <img src={logo} alt="Logo" />
        <BrandTextWrapper>
          <BrandTextCrazy>Crazy&apos;</BrandTextCrazy>
          <BrandTextGuessr>Guessr</BrandTextGuessr>
        </BrandTextWrapper>
      </Link>
      <Separator />
      <Button
        text="Catch me live"
        title="Catch me live on Twitch! I stream development and general knowledge training."
        hasLink
        boop={boopConfig}
        externalLink="https://www.twitch.tv/crazyquirkyunicorn"
        collapseText
        bgcolor="#e1cdff"
        shadow="light"
        hasIconLeft
        iconLeft={<TwitchIcon size={24} />}
      />
      <Button
        text="Contribute"
        title="Contribute to the project on GitHub!"
        hasLink
        boop={boopConfig}
        externalLink="https://github.com/Crazy-Unicooorn/crazy-guessr"
        collapseText
        bgcolor="var(--pastel-orange, #eccaaa);"
        shadow="light"
        hasIconLeft
        iconLeft={<GithubIcon size={24} />}
      />
      <DonateButton />
      <LastUpdateText>
        <a href="https://github.com/Crazy-Unicooorn/crazy-guessr/releases" target="blank" rel="noreferrer">
          {lastUpdate}
        </a>
      </LastUpdateText>
    </section>
  );
}

export default Header;

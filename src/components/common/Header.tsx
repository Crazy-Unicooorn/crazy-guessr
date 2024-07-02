import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";
import GithubIcon from "../../assets/icons/brands/github";
import TwitchIcon from "../../assets/icons/brands/twitch";
import Button from "./Button";
import DonateButton from "../other/DonateButton";

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

function Header() {
  const [lastUpdate, setLastUpdate] = useState("Last update:\nloading...");
  const boopConfig = { scale: 1.1, timing: 200, springConfig: { tension: 100, friction: 5 } };

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
      <Link to="/" style={{ textDecoration: `none` }}>
        <BrandTextWrapper>
          <BrandTextCrazy>Crazy&apos;</BrandTextCrazy>
          <BrandTextGuessr>Guessr</BrandTextGuessr>
        </BrandTextWrapper>
      </Link>
      <Separator />
      <Button
        hasLink
        boop={boopConfig}
        externalLink="https://www.twitch.tv/crazyquirkyunicorn"
        text="Catch me live"
        collapseText
        bgcolor="#e1cdff"
        shadow="light"
        hasIconLeft
        iconLeft={<TwitchIcon size={24} />}
      />
      <Button
        hasLink
        boop={boopConfig}
        externalLink="https://github.com/Crazy-Unicooorn/crazy-guessr"
        text="Contribute"
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

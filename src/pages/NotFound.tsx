import { styled } from "styled-components";
import ArrowLeft from "../assets/icons/directional/arrow_left";
import OpenInNew from "../assets/icons/actions/open_in_new";
import Button from "../components/common/Button";
import IndexIcon from "../assets/icons/general";

const CTA = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 4rem 0;
`;

function NotFound() {
  return (
    <>
      <h1>
        404 · Page not found{" "}
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png"
          alt="Thinking Face"
          width="50"
          height="50"
        />
      </h1>
      <CTA>
        <Button
          text="Back to Home"
          hasIconLeft
          iconLeft={<ArrowLeft fill="white" />}
          hasInternalLink
          textColor="white"
          boop={{ x: -8, springConfig: { tension: 300, friction: 10 } }}
        />
        <Button
          text="Index of Training Cards"
          hasIconLeft
          iconLeft={<IndexIcon fill="var(--purple-950)" />}
          hasIconRight
          iconRight={<OpenInNew fill="var(--purple-950)" />}
          textColor="var(--purple-950)"
          bgcolor="var(--purple-300)"
          boop={{ x: 4, y: -4, springConfig: { tension: 300, friction: 10 } }}
          hasLink
          externalLink="https://github.com/Crazy-Unicooorn/crazy-guessr?tab=readme-ov-file#-index-of-training-cards-available"
          collapseText
        />
      </CTA>
    </>
  );
}

export default NotFound;

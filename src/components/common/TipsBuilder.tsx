import { styled } from "styled-components";
import Button from "./Button";
import LocationIcon from "../../assets/icons/general/location";

export const Tip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;

  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(241, 241, 252, 0.8);
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const Paragraph = styled.div`
  background-color: var(--purple-100);
  box-shadow: var(--shadow-flat);

  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-top: 0.5rem;

  width: 100%;
`;

export interface Card {
  front: string | JSX.Element;
  back: string | JSX.Element;
}

export function MapButton({ url }: { url: string }) {
  return (
    <Button
      text="GeoGuessr Map"
      hasLink
      externalLink={url}
      bgcolor="var(--purple-300)"
      textColor="var(--purple-950)"
      hasIconRight
      iconRight={<LocationIcon size={24} fill="var(--purple-950)" />}
      collapseText
      boop={{
        y: -4,
        timing: 200,
        springConfig: { tension: 300, friction: 10 },
      }}
    />
  );
}

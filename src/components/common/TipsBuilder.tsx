import { styled } from "styled-components";

export const Tip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  margin-bottom: 32px;
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

// export interface Card {
//   [key: string]: string;
// }

export interface Card {
  front: string | JSX.Element;
  back: string;
}

import styled from "styled-components";

interface StyledButtonProps {
  backgroundColor?: string;
  shadow?: "light" | "dark";
}

export const StyledButton = styled.button<StyledButtonProps>`
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
  min-width: 128px;

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

export default function Button() {
  return (
    <StyledButton>
      <span className="front" />
    </StyledButton>
  );
}

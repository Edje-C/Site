import styled, { css, keyframes } from "styled-components";
import static1 from "../assets/static-1.gif";
import static2 from "../assets/static-2.gif";

const blink = keyframes`
  from,
  to {
    color: transparent;
  }

  50% {
    color: greenyellow;
  }
`;

const darken = keyframes`
  to {
    filter: brightness(0);
  }
`;

const grow = keyframes`
  50% {
    opacity: 0;
  }

  to {
    transform: skew(-10deg, -10deg) scale(150, 300);
    opacity: 0;
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  color: greenyellow;
  transform: skew(10deg, 10deg);
  font-family: "Press Start 2P", cursive;
`;

export const Background = styled.div<{ startTransition: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;

  ${(props) =>
    props.startTransition
      ? css`
          animation: ${darken} 2s ease-in forwards;
        `
      : ""}

  &:before {
    width: 100%;
    height: 100%;
    background-image: url(${static1});
    background-size: cover;
    opacity: 0.4;
    content: "";
    position: absolute;
  }

  &::after {
    width: 100%;
    height: 100%;
    background-image: url(${static1});
    background-size: cover;
    position: absolute;
    content: "";
    z-index: -1;
  }
`;

export const Message = styled.div<{
  greetingComplete: boolean;
  startTransition: boolean;
}>`
  display: flex;
  align-items: center;
  position: relative;
  mix-blend-mode: difference;
  transform: skew(-10deg, -10deg);

  ${(props) =>
    props.greetingComplete
      ? css`
          flex-direction: column;
        `
      : ""}

  ${(props) =>
    props.startTransition
      ? css`
          animation: ${grow} 5s ease-in 0.5s forwards;
          opacity: 1;
        `
      : ""}
`;

export const Greeting = styled.p`
  margin: 0;
`;

export const InputEffects = styled.div`
  display: flex;
  align-items: center;
`;

export const NameInput = styled.input`
  width: ${(props: { width: number }) => props.width}px;
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  padding: 0;
  margin-right: -2rem;
  border: 0;
  outline: none;
  caret-color: transparent;
`;

export const NameLength = styled.span`
  position: absolute;
  left: -9999px;
  top: -9999px;
`;

export const BlinkingCursor = styled.span<{ startTransition: boolean }>`
  color: #cfb2b2;
  -webkit-animation: 1s ${blink} step-end infinite;

  ${(props) =>
    props.startTransition
      ? css`
          visibility: hidden;
        `
      : ""}
`;

export const EnterButton = styled.button<{
  greetingComplete: boolean;
  startTransition: boolean;
}>`
  background-color: gray;
  color: white;
  font-size: 2rem;
  font-family: inherit;
  padding: 16px;
  border: 1px solid greenyellow;
  border-radius: 8px;
  position: absolute;
  bottom: -5rem;
  opacity: 0;

  ${(props) =>
    props.greetingComplete
      ? css`
          transition: opacity 1s ease-in 0.5s;
          opacity: 1 !important;
        `
      : ""}

  ${(props) =>
    props.startTransition
      ? css`
          transition: opacity 1s ease-out 0.1s;
          opacity: 0;
        `
      : ""}
`;

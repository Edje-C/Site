import styled, { keyframes, css } from "styled-components";

const increaseHeight = keyframes`
  to {
    max-height: 100px;
    padding: inherit;
  }
`;

const slideReceived = keyframes`
  to {
    margin-left: 0;
  }
`;

const slideSent = keyframes`
  to {
    margin-right: 0;
  }
`;

export const Screen = styled.div`
  width: 600px;
  height: 100%;
  font-family: "Exo 2", sans-serif;
  background-color: rgb(200, 200, 200);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 72px;
  background-color: rgb(50, 50, 50);
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const Messages = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  flex: 1;
  justify-content: end;
  overflow: hidden;
`;

export const Message = styled.p<{
  received?: boolean;
  sent?: boolean;
  new?: boolean;
}>`
  max-height: 100px;
  max-width: 60%;
  color: white;
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.received
      ? css`
          background-color: indigo;
          align-self: start;
        `
      : ""}

  ${(props) =>
    props.sent
      ? css`
          background-color: slateblue;
          align-self: end;
        `
      : ""}

          
  ${(props) =>
    props.new && props.received
      ? css`
          max-height: 0px;
          margin-left: -60%;
          padding: 0;
          animation: ${increaseHeight} 1s linear forwards,
            ${slideReceived} 0.5s linear 0.25s forwards;
        `
      : ""}
          
  ${(props) =>
    props.new && props.sent
      ? css`
          max-height: 0px;
          margin-right: -60%;
          padding: 0;
          animation: ${increaseHeight} 0.5s ease-in forwards,
            ${slideSent} 0.5s linear 0.25s forwards;
        `
      : ""}
`;

export const ChatInput = styled.input`
  width: calc(100% - 32px);
  height: 56px;
  background-color: rgb(50, 50, 50);
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 100px;
  border: none;
`;

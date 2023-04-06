import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  ChangeEvent,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AppContext } from "../app";

import { Header, Messages, ChatInput, Message, Screen } from "../styles/chat";

const messages = [(name) => `Hi, my name is ${name}`, ""];

const Chat = () => {
  const navigate = useNavigate();
  const { name } = useContext(AppContext);

  useEffect(() => {
    // if () {
    // setTimeout(() => {
    // }, 1000);
    // } else {
    //   onGreetingComplete();
    // }
  });

  return (
    <Fragment>
      <Helmet>
        <title>Say you're sorry.</title>
        <link rel="stylesheet" href="/styles/chat.css" />
      </Helmet>
      <Screen>
        <Header></Header>
        <Messages>
          <Message received>Hi, I'm John. What's your name?</Message>
          <Message sent new>
            Hi, my name is {name}
          </Message>
        </Messages>
        <ChatInput></ChatInput>
      </Screen>
    </Fragment>
  );
};

export default Chat;

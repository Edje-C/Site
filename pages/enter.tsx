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
import {
  Container,
  Background,
  Message,
  Greeting,
  InputEffects,
  NameInput,
  BlinkingCursor,
  NameLength,
  EnterButton,
} from "../styles/enter";

const Enter = () => {
  const greetingText = "Hi, my name is";
  const navigate = useNavigate();
  const { name, setName } = useContext(AppContext);
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);
  const nameWidthRef: React.MutableRefObject<HTMLSpanElement | null> =
    useRef(null);
  const [nameWidth, setNameWidth] = useState<number>(0);
  const [greeting, setGreeting] = useState<string>("");
  const [greetingComplete, setGreetingComplete] = useState<boolean>(false);
  const [inputDisabled, setInputDisabled] = useState<boolean>(true);
  const [startTransition, setStartTransition] = useState<boolean>(false);

  useEffect(() => {
    if (greeting.length !== greetingText.length) {
      setTimeout(() => {
        setGreeting(greetingText.substring(0, greeting.length + 1));
      }, 150);
    } else {
      onGreetingComplete();
    }
  });

  const focusInput = () => inputRef.current?.focus();

  const onGreetingComplete = () => {
    setGreetingComplete(true);
    setInputDisabled(false);
    focusInput();
  };

  const transition = () => {
    setStartTransition(true);

    setInputDisabled(true);

    setTimeout(() => navigate("/chat"), 4000);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const nameInput = value.trim();

    setName(nameInput);
    if (nameWidthRef.current) nameWidthRef.current.textContent = nameInput;
    setNameWidth(nameWidthRef.current?.offsetWidth || 0 + 6);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Hi, my name is _</title>
        <link rel="stylesheet" href="/styles/enter.css" />
      </Helmet>
      <Container className="container">
        <Background startTransition={startTransition} />
        <Message
          onClick={focusInput}
          greetingComplete={greetingComplete}
          startTransition={startTransition}
        >
          <Greeting>{greeting}</Greeting>
          <InputEffects>
            <NameInput
              disabled={inputDisabled}
              ref={inputRef}
              width={nameWidth}
              onChange={onChange}
            />
            <BlinkingCursor startTransition={startTransition}>|</BlinkingCursor>
            <NameLength ref={nameWidthRef} />
          </InputEffects>
          <EnterButton
            onClick={transition}
            disabled={!greetingComplete || !name}
            greetingComplete={greetingComplete}
            startTransition={startTransition}
          >
            Enter
          </EnterButton>
        </Message>
      </Container>
    </Fragment>
  );
};

export default Enter;

import { onInterval } from "../utils/helpers";

const cursor = document.querySelector(".blinking-cursor");
const input = document.querySelector(".name-input");
const message = document.querySelector(".message");
const enter = document.querySelector(".enter");
const background = document.querySelector(".background");

const typeGreeting = (callback) => {
  const greetingElem = document.querySelector(".greeting");
  const greeting = "Hi, my name is";
  let i = 0;

  const interval = setInterval(() => {
    if (i === greeting.length) {
      clearInterval(interval);
      setTimeout(callback, 300);
      return;
    }
    greetingElem.innerText = greeting.substring(0, i + 1);
    i++;
  }, 100);
};

const transition = () => {
  const name = input.value;

  window.localStorage.setItem("name", name);

  console.log(cursor);
  cursor.style.visibility = "hidden";
  input.disabled = true;

  enter.style.transition = "opacity 1s ease-out .1s";
  enter.style.opacity = 0;

  message.style.animation = "grow 5s ease-in .5s forwards";
  background.style.animation = "darken 2s ease-in forwards";

  setTimeout(() => (window.location = "chat.html"), 4000);
};

const onChange = () => {
  const nameLength = document.querySelector(".name-length");
  nameLength.textContent = input.value; // the hidden span takes the value of the input;
  input.style.width = nameLength.offsetWidth + 6 + "px"; // apply width of the span to the input

  !!input.value.trim() ? (enter.disabled = false) : (enter.disabled = true);
};

const onGreetingComplete = () => {
  input.focus();
  message.addEventListener("click", () => input.focus());
  message.style.flexDirection = "column";
  enter.style.transition = "opacity 1s ease-in .5s";
  enter.style.opacity = 1;
};

setTimeout(() => {
  typeGreeting(onGreetingComplete);
  onInterval(typeGreeting);
}, 1000);

input.addEventListener("input", onChange);
enter.addEventListener("click", transition);

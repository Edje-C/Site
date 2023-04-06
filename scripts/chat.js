const { onInterval } = require("../utils/helpers");

window.onload = () => {
  const messages = document.querySelector(".messages");
  onInterval();
  // messages.appendChild();
};

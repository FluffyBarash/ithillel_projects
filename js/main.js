const button = document.querySelector(".menu__button");
const button_windows = document.querySelector(".button_windows");

button.addEventListener("click", () => {
  button_windows.classList.toggle("button_on");
  button.classList.toggle("button_activated");
});

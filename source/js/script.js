const navToggle = document.querySelector(".navigation__toggle");
const nav = document.querySelector(".navigation");
const body = document.querySelector(".body");

nav.classList.remove("navigation--nojs");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("navigation--closed");
  nav.classList.toggle("navigation--opened");
  body.classList.toggle("body--no-scroll");
});

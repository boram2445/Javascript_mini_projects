"use strict";

const navBtn = document.querySelector("#toggle");
const signUpBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");

navBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

signUpBtn.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// modal.addEventListener("click", (e) => {
//   if (e.target !== e.currentTarget) return;
//   modal.classList.remove("show-modal");
// });
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);

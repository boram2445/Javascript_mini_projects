"use strict";

const navBtn = document.querySelector("#toggle");
const nav = document.querySelector("nav");
navBtn.addEventListener("click", () => {
  nav.classList.toggle("on");
});

const signUpBtn = document.querySelector("#open");
const modal = document.querySelector("#modal");
const modalBg = document.querySelector(".modal-container");
const closeBtn = document.querySelector("#close");
signUpBtn.addEventListener("click", () => {
  modal.classList.toggle("on");
});
modalBg.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modal.classList.remove("on");
  }
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("on");
});

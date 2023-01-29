"use strict";

const wordBoxs = document.querySelector("#word");
const wrongBox = document.querySelector("#wrong-letters span");
const figure = document.querySelectorAll(".figure-part");
const notification = document.querySelector("#notification-container");
const popupContainer = document.querySelector("#popup-container");
const popupMessage = document.querySelector("#final-message");
const popupBtn = document.querySelector("#play-button");

const words = ["programmer", "korea", "developing"];
let selectedWord;

let rightLetters = [];
let wrongLetters = [];

let playable = true;

//게임 초기화
function init() {
  playable = true;
  popupContainer.classList.remove("show");
  wrongBox.innerHTML = "";
  selectedWord = words[Math.floor(Math.random() * words.length)];
  figure.forEach((item) => (item.style.display = "none"));
  rightLetters = [];
  wrongLetters = [];
  displayWordBox();
}

//단어 박스 보여주기
function displayWordBox() {
  wordBoxs.innerHTML = "";
  for (let i = 0; i < selectedWord.length; i++) {
    wordBoxs.innerHTML += '<div class="letter"></div>';
  }
}

//팝업 열기
function openPopup() {
  let lost = wrongLetters.length === 6;
  let win = rightLetters.length === selectedWord.length;
  if (!(lost || win)) return;
  else {
    if (lost) {
      popupMessage.textContent = "Try Again😱";
    } else {
      popupMessage.textContent = "Congratulations! You won!😉";
    }
    popupContainer.classList.add("show");
    playable = false;
  }
}

//이미 입력한 단어라는 경고 문구 보여주기
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 1000);
}

//right letter일 경우
function updateRightLetter(index, key) {
  wordBoxs.children[index].textContent = key;
  rightLetters.push(key);
}

//wrong letter일 경우
function updateWrongLetter(letter) {
  //wrong 박스에 틀린 알파벳 쓰기
  !wrongLetters.length
    ? (wrongBox.textContent += `${letter}`)
    : (wrongBox.textContent += `,${letter}`);
  //사람 그리기
  figure[wrongLetters.length].style.display = "block";
  wrongLetters.push(letter);
}

function checkWordEvent(e) {
  if (!playable) return;
  if (!(e.keyCode >= 65 && e.keyCode <= 90)) return;
  const letter = e.key.toLowerCase();
  if (wrongLetters.includes(letter) || rightLetters.includes(letter)) {
    showNotification();
    return;
  }
  let index = selectedWord.indexOf(letter);
  index !== -1 ? updateRightLetter(index, letter) : updateWrongLetter(letter);
  openPopup();
}

init();
window.addEventListener("keydown", checkWordEvent);
popupBtn.addEventListener("click", init);

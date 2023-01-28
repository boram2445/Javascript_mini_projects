"use strict";

const words = ["programmer", "korea", "developing"];
const selectedWord = words[Math.floor(Math.random() * words.length)];

const wordBoxs = document.querySelector("#word");
const wrongBox = document.querySelector("#wrong-letters span");

const figure = document.querySelectorAll(".figure-part");
const notification = document.querySelector("#notification-container");
const popupContainer = document.querySelector("#popup-container");
const popupMessage = document.querySelector("#final-message");
const popupBtn = document.querySelector("#play-button");

let rightLetters = [];
let wrongLetters = [];

//게임 초기화
function init() {
  popupContainer.style.display = "none";
  wrongBox.innerHTML = "";
  figure.forEach((item) => (item.style.display = "none"));
  rightLetters = [];
  wrongLetters = [];
  displayWordBox();
}

//단어 박스 배치
function displayWordBox() {
  wordBoxs.innerHTML = "";
  for (let i = 0; i < selectedWord.length; i++) {
    wordBoxs.innerHTML += '<div class="letter"></div>';
  }
}

//모달 열기
function openModal() {
  let lost = wrongLetters.length === 6;
  let win = rightLetters.length === selectedWord.length;
  if (lost) {
    popupContainer.style.display = "block";
    popupMessage.textContent = "Try Again😱";
    return true;
  } else if (win) {
    popupContainer.style.display = "block";
    popupMessage.textContent = "Congratulations! You won!😉";
    return true;
  }
}

//이미 입력한 단어인지 확인
function checkAlreadyInput(key) {
  if (wrongLetters.includes(key) || rightLetters.includes(key)) {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 1000);
    return true;
  }
  return false;
}

function checkRightWord(index, key) {
  wordBoxs.children[index].textContent = key;
  rightLetters.push(key);
}

function checkWrongWord(key) {
  //wrong 박스에 틀린 알파벳 쓰기
  !wrongLetters.length
    ? (wrongBox.textContent += `${key}`)
    : (wrongBox.textContent += `,${key}`);
  //사람 그리기
  figure[wrongLetters.length].style.display = "block";
  wrongLetters.push(key);
}

//단어 입력 이벤트 핸들러
function checkWordEvent(e) {
  //알파벳만 입력 가능
  const regExp = /[a-zA-Z]/g;
  if (!regExp.test(e.key.toLowerCase())) return;
  let index = selectedWord.indexOf(e.key);
  //이미 입력했던 단어인지 확인
  if (checkAlreadyInput(e.key)) return;
  //단어가 알맞은지 확인
  index !== -1 ? checkRightWord(index, e.key) : checkWrongWord(e.key);
  //모달이 열리면 게임 중지
  if (openModal()) return;
}

init();
window.addEventListener("keydown", checkWordEvent);
popupBtn.addEventListener("click", init);

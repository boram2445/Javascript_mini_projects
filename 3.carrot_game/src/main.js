"use strict";
import Modal from "./modal.js";
import Field from "./field.js";
import * as sound from "./sound.js";

const TIME_SEC = 5;
const BUG_COUNT = 20;
const CARROT_COUNT = 10;

const mainBtn = document.querySelector(".main-btn");
const gameTimer = document.querySelector(".timer");
const gameCount = document.querySelector(".count");

let started = false; //이렇게 전역 변수로 둬서 시작 여부를 판단하면 되는구나@
let score = 0;
let timer; //전역변수에 setInterval 함수를 부여하였다.

const gameFinishModal = new Modal();
gameFinishModal.setOnClick(startGame);
const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setOnClickItem(clickItem);

//아이템 클릭
function clickItem(item) {
  if (!started) return; //조건에 맞지 않으면 빠르게 함수를 나가도록 처리하는 것이 좋다.
  if (item === "carrot") {
    score++;
    gameCount.textContent = CARROT_COUNT - score;
    if (score === CARROT_COUNT) {
      sound.playWin();
      stopGame("✨You Win✨");
    }
  } else if (item === "bug") {
    sound.playBug();
    stopGame("You loose🐞");
  }
}

function startGame() {
  started = true;
  reset();
  gameField.init();
  showTimerAndScore();
  startTimer();
  sound.playBackground();
}

function stopGame(modalText) {
  started = false;
  mainBtn.style.visibility = "hidden";
  gameFinishModal.open(modalText);
  stopTimer();
  sound.stopBackground();
}

function reset() {
  score = 0;
  gameFinishModal.close();
  mainBtn.style.visibility = "visible";
  gameCount.textContent = CARROT_COUNT;
}

//타이머와 점수 보여주기
function showTimerAndScore() {
  mainBtn.innerHTML = '<i class="fas fa-stop"></i>';
  gameTimer.style.visibility = "visible";
  gameCount.style.visibility = "visible";
}

//타이머
function startTimer() {
  let leftTime = TIME_SEC;
  updateTimerText(leftTime);
  timer = setInterval(() => {
    updateTimerText(--leftTime);
    if (leftTime === 0) {
      sound.playBug();
      stopGame("You loose🐞");
      return;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateTimerText(leftTime) {
  let min = Math.floor(leftTime / 60);
  let sec = leftTime % 60;
  gameTimer.textContent = `${min}:${sec}`;
}

mainBtn.addEventListener("click", () => {
  if (!started) {
    startGame();
  } else {
    stopGame("Replay❓");
  }
});

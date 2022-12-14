"use strict";
import Modal from "./modal.js";

const TIME_SEC = 5;
const BUG_COUNT = 20;
const CARROT_COUNT = 10;
const CARROT_SIZE = 80;

const field = document.querySelector(".game-field");
const field_rect = field.getBoundingClientRect();
const main_btn = document.querySelector(".main-btn");
const game_timer = document.querySelector(".timer");
const game_count = document.querySelector(".count");

const background_audio = new Audio("./sound/bg.mp3");
const carrot_audio = new Audio("./sound/carrot_pull.mp3");
const bug_audio = new Audio("./sound/bug_pull.mp3");
const win_audio = new Audio("./sound/game_win.mp3");

let started = false; //이렇게 전역 변수로 둬서 시작 여부를 판단하면 되는구나@
let score = 0;
let timer; //전역변수에 setInterval 함수를 부여하였다.

const gameFinishModal = new Modal();
gameFinishModal.setOnClick(startGame);

function startGame() {
  started = true;
  reset();
  initGame();

  background_audio.play();
}

function stopGame(modalText) {
  started = false;
  main_btn.style.visibility = "hidden";
  gameFinishModal.open(modalText);
  stopTimer();

  background_audio.pause();
}

function initGame() {
  //1. 벌레와 당근 생성
  addItems("bug", "./images/bug.png", BUG_COUNT);
  addItems("carrot", "./images/carrot.png", CARROT_COUNT);

  //2. 타이머
  showTimerAndScore();
  startTimer();
}

function reset() {
  score = 0;
  gameFinishModal.close();
  main_btn.style.visibility = "visible";
  game_count.textContent = CARROT_COUNT;
  field.innerHTML = "";
  background_audio.currentTime = 0;
}

//게임 아이템 추가
function addItems(className, src, count) {
  for (let i = 0; i < count; i++) {
    let y = makeRandom(0, field_rect.height - CARROT_SIZE);
    let x = makeRandom(0, field_rect.width - CARROT_SIZE);

    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", src);
    item.style.top = `${y}px`;
    item.style.left = `${x}px`;
    field.append(item);
  }
}

//타이머와 점수 보여주기
function showTimerAndScore() {
  main_btn.innerHTML = '<i class="fas fa-stop"></i>';
  game_timer.style.visibility = "visible";
  game_count.style.visibility = "visible";
}

//타이머
function startTimer() {
  let leftTime = TIME_SEC;
  updateTimerText(leftTime);
  timer = setInterval(() => {
    updateTimerText(--leftTime);
    if (leftTime === 0) {
      bug_audio.play();
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
  game_timer.textContent = `${min}:${sec}`;
}

//아이템 클릭
function clickItem(e) {
  if (!started) return; //조건에 맞지 않으면 빠르게 함수를 나가도록 처리하는 것이 좋다.
  if (e.target.matches(".carrot")) {
    e.target.remove();
    score++;
    game_count.textContent = CARROT_COUNT - score;
    carrot_audio.play();

    if (score === CARROT_COUNT) {
      win_audio.play();
      stopGame("✨You Win✨");
    }
  } else if (e.target.matches(".bug")) {
    bug_audio.play();
    stopGame("You loose🐞");
  }
}

//랜덤 최솟값 - 최댓값
function makeRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

main_btn.addEventListener("click", () => {
  if (!started) {
    startGame();
  } else {
    stopGame("Replay❓");
  }
});

field.addEventListener("click", clickItem);

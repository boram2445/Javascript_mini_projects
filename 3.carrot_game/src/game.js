"use strict";
import Field from "./field.js";
import * as sound from "./sound.js";

export default class Game {
  constructor(timeSec, bugCount, carrotCount) {
    this.timeSec = timeSec;
    this.bugCount = bugCount;
    this.carrotCount = carrotCount;

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setOnClickItem(this.clickItem);

    this.gameTimer = document.querySelector(".timer");
    this.gameCount = document.querySelector(".count");
    this.mainBtn = document.querySelector(".main-btn");
    this.mainBtn.addEventListener("click", () => {
      if (this.started) {
        this.stop("stop");
      } else {
        this.start();
      }
    });

    this.started = false;
    this.score = 0;
    this.timer;
  }

  setGameStopLisenter(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start = () => {
    this.started = true;
    this.reset();
    this.gameField.init();
    this.showTimerAndScore();
    this.startTimer();
    sound.playBackground();
  };

  stop = (modalText) => {
    this.started = false;
    this.mainBtn.style.visibility = "hidden";
    this.stopTimer();
    sound.stopBackground();
    this.onGameStop && this.onGameStop(modalText);
  };

  reset() {
    this.score = 0;
    this.mainBtn.style.visibility = "visible";
    this.gameCount.textContent = this.carrotCount;
  }

  clickItem = (item) => {
    if (!this.started) return; //조건에 맞지 않으면 빠르게 함수를 나가도록 처리하는 것이 좋다.
    if (item === "carrot") {
      this.score++;
      this.gameCount.textContent = this.carrotCount - this.score;
      if (this.score === this.carrotCount) {
        sound.playWin();
        this.stop("win");
      }
    } else if (item === "bug") {
      sound.playBug();
      this.stop("loose");
    }
  };

  showTimerAndScore() {
    this.mainBtn.innerHTML = '<i class="fas fa-stop"></i>';
    this.gameTimer.style.visibility = "visible";
    this.gameCount.style.visibility = "visible";
  }

  startTimer() {
    let leftTime = this.timeSec;
    this.updateTimerText(leftTime);
    this.timer = setInterval(() => {
      this.updateTimerText(--leftTime);
      if (leftTime === 0) {
        sound.playBug();
        this.stop("loose");
        return;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  updateTimerText(leftTime) {
    let min = Math.floor(leftTime / 60);
    let sec = leftTime % 60;
    this.gameTimer.textContent = `${min}:${sec}`;
  }
}

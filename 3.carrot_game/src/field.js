"use strict";
import * as sound from "./sound.js";

const CARROT_SIZE = 80;

export const ItemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});

// 아이템 배치, 아이템 클릭
export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game-field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.clickItem);
  }

  //함수 받아오기
  setOnClickItem(onClickItem) {
    this.onClickItem = onClickItem;
  }

  init() {
    this.field.innerHTML = "";
    this._addItems(ItemType.bug, "./images/bug.png", this.bugCount);
    this._addItems(ItemType.carrot, "./images/carrot.png", this.carrotCount);
  }

  _addItems(className, src, count) {
    for (let i = 0; i < count; i++) {
      let y = makeRandom(0, this.fieldRect.height - CARROT_SIZE);
      let x = makeRandom(0, this.fieldRect.width - CARROT_SIZE);

      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", src);
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;
      this.field.append(item);
    }
  }

  clickItem = (e) => {
    if (e.target.matches(".carrot")) {
      e.target.remove();
      sound.playCarrot();
      this.onClickItem && this.onClickItem(ItemType.carrot);
    } else if (e.target.matches(".bug")) {
      this.onClickItem && this.onClickItem(ItemType.bug);
    }
  };
}

//랜덤 최솟값 - 최댓값
function makeRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

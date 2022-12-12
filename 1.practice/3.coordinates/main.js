"use strict";

const target = document.querySelector(".target");
const coordinate = document.querySelector(".coordinate");
const lineY = document.querySelector(".line-y");
const lineX = document.querySelector(".line-x");

const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

window.addEventListener("mousemove", (e) => {
  lineY.style.transform = `translateY(${e.clientY}px)`;
  lineX.style.transform = `translateX(${e.clientX}px)`;
  target.style.transform = `translate(${e.clientX - targetHalfWidth}px, ${
    e.clientY - targetHalfHeight
  }px)`;
  coordinate.style.transform = `translate(${e.clientX + 20}px, ${
    e.clientY + 20
  }px)`;
  coordinate.innerHTML = `${e.clientY}px, ${e.clientX}px`;
});
/*
  배운점
  1. 반복되는 값은, 변수로 선언해주자. 
  2. 이벤트리스너가 작동하기 전 상태도 생각해서 코드를 작성하자
  (처음화면에서는 가운데 배치-css로 조절)
  3. 	translate (x, y) 
*/

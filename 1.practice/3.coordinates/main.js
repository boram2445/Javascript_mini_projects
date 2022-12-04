"use strict";

const target = document.querySelector(".target");
const coordinate = document.querySelector(".coordinate");
const lineY = document.querySelector(".line-y");
const lineX = document.querySelector(".line-x");
const targetRect = target.getBoundingClientRect();

window.addEventListener("mousemove", (e) => {
  lineY.style.top = `${e.clientY}px`;
  lineX.style.left = `${e.clientX}px`;
  target.style.top = `${e.clientY}px`;
  target.style.left = `${e.clientX}px`;
  coordinate.style.left = `${e.clientX}px`;
  coordinate.style.top = `${e.clientY}px`;
  coordinate.innerHTML = `${e.clientY}px, ${e.clientX}px`;
});
/*
  배운점
  1. 반복되는 값은, 변수로 선언해주자. 
  2. 이벤트리스너가 작동하기 전 상태도 생각해서 코드를 작성하자
  (처음화면에서는 가운데 배치-css로 조절)
*/

"use strict";

const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');
const lineY = document.querySelector('.line-y');
const lineX = document.querySelector('.line-x');
const targetRect = target.getBoundingClientRect();

window.addEventListener('mousemove', (event)=>{
  const x = event.clientX;
  const y = event.clientY;
  target.style.transform = `translate(${x-(targetRect.width/2)}px, ${y-(targetRect.width/2)}px)`;
  lineY.style.transform =`translateY(${y}px)`;
  lineX.style.transform=`translateX(${x}px)`;
  coordinate.style.transform = `translate(${x+20}px, ${y+20}px)`;
  // target.style.top = `${y}px`;
  // target.style.left = `${x}px`;
  // lineY.style.top = `${y}px`;
  // lineX.style.left = `${x}px`;
  // coordinate.style.top = `${y}px`;
  // coordinate.style.left = `${x}px`;
  coordinate.innerHTML = `${y} px ${x} px`;
})

/*
  배운점
  1. 반복되는 값은, 변수로 선언해주자. 
  2. 이벤트리스너가 작동하기 전 상태도 생각해서 코드를 작성하자
  (처음화면에서는 가운데 배치-css로 조절)
*/

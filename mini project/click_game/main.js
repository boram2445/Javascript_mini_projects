"use strict";
const startBtn = document.querySelector('.top-btn.start');
const stopBtn = document.querySelector('.top-btn.stop');
const replayBtn = document.querySelector('.modal-btn');
const timer = document.querySelector('.top-timer');
const count = document.querySelector('.top-count');
const modal = document.querySelector('.modal');
const bgSizeX = document.querySelector('#game').getBoundingClientRect().width;
const bgSizeY = document.querySelector('#game').getBoundingClientRect().height;
const bugList = document.querySelector('.bugs');
const carrotList = document.querySelector('.carrots');

const BUG = 20;
const CARROT = 15;
const TIME = 10;
let intervalId; 
let bugCount = BUG;
let carrotCount = CARROT; 
let countLeft = TIME; 

let audioPlay = new Audio('sound/bg.mp3');
let audioWin = new Audio('sound/game_win.mp3');
let audioAlert = new Audio('sound/bug_pull.mp3');
let audioCarrot = new Audio('sound/carrot_pull.mp3');

startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);
bugList.addEventListener('click', bugClick);
carrotList.addEventListener('click', carrotClick);
replayBtn.addEventListener('click', startGame);

function bugClick(event){
  if(event.target.tagName === 'IMG'){
    stopGame('lose');
  }
}
function carrotClick(event){
  if(event.target.tagName === 'IMG'){
    event.target.remove();
    audioCarrot.play();
    carrotCount--;
    count.textContent = carrotCount;
    if(carrotCount === 0){
      stopGame('win');
    }
  }
}

//1. 게임 시작
function startGame(){
  audioPlay.play();
  startBtn.classList.add('non');
  stopBtn.classList.add('on');
  modal.classList.remove('on');
  count.textContent = carrotCount;
  clearInterval(intervalId); 
  timer.innerHTML = `0:${countLeft}`;
  intervalId = setInterval(()=>{
    countLeft--;
    timer.innerHTML = `0:${countLeft}`;
    if(countLeft == 0){
      stopGame('lose'); 
    }
  }, 1000);
  putItem(); 
}

//2.아이템 추가 
function putItem(){
  for(let i=0; i<bugCount; i++){
    const bug = document.createElement('img');
    bug.setAttribute('class', 'img bug');
    bug.setAttribute('src', 'images/bug.png');
    bugList.append(bug);
    itemPosition(bug);
  }

  for(let i=0; i<carrotCount; i++){
    const carrot = document.createElement('img');
    carrot.setAttribute('class', 'img carrot');
    carrot.setAttribute('src', 'images/carrot.png');
    carrotList.append(carrot);
    itemPosition(carrot);
  }
}

//랜덤 배치 함수 
function itemPosition(item){
  const itemX = Math.floor(Math.random()*(bgSizeX-100)+30);
  const itemY = Math.floor(Math.random()*(bgSizeY/2-80)+bgSizeY/2);
  item.style.top = `${itemY}px`; 
  item.style.left = `${itemX}px`;
}

//3. 게임 정지 
function stopGame(state){
  audioPlay.pause();
  clearInterval(intervalId); 
  startBtn.classList.remove('non');
  stopBtn.classList.remove('on');
  bugList.innerHTML = '';
  carrotList.innerHTML = '';
  countLeft = TIME;
  carrotCount = CARROT;
  modal.classList.add('on');
  if(state === 'win'){
    modal.children[1].textContent = 'You win🎉';
    audioWin.play();
  } else{
    modal.children[1].textContent = 'You lose😈';
    audioAlert.play();
  }
}
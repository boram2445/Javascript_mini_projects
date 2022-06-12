"use strict";
const startBtn = document.querySelector('.top-btn');
// const replayBtn = document.querySelector('.modal-btn');
const timer = document.querySelector('.top-timer');
const count = document.querySelector('.top-count');
// const modal = document.querySelector('.modal');
const field = document.querySelector('.field');
const fieldSize = document.querySelector('.field').getBoundingClientRect();

const BUG_COUNT = 40;
const CARROT_COUNT = 15;
const GAME_DURATION_SEC = 10;

let carrotLeft = CARROT_COUNT; 
let started = false; 
let intervalId; 

let audioPlay = new Audio('sound/bg.mp3');
let audioWin = new Audio('sound/game_win.mp3');
let audioAlert = new Audio('sound/bug_pull.mp3');
let audioCarrot = new Audio('sound/carrot_pull.mp3');

startBtn.addEventListener('click', ()=>{
  if(started){
    stopGame('pause');
  } else{
    startGame(); 
  }
  started = !started;
});
field.addEventListener('click', clickItem);
replayBtn.addEventListener('click', startGame);

//1. 게임 시작
function startGame(){
  audioPlay.play();
  initGame(); 
  showStopButton();
  showTimerAndScore(); 
  startGameTimer(); 
  modal.classList.remove('on');
}

function initGame(){
  startBtn.style.visibility = 'visible';
  field.innerHTML = '';
  count.textContent = CARROT_COUNT;
  addItem('img carrot', CARROT_COUNT, 'images/carrot.png'); 
  addItem('img bug', BUG_COUNT, 'images/bug.png'); 
}

function showTimerAndScore(){
  count.style.visibility = 'visible';
  timer.style.visibility = 'visible';
}

function showStopButton(){
  startBtn.children[0].classList.remove('fa-play');
  startBtn.children[0].classList.add('fa-stop');
}

function startGameTimer(){
  let remainingTime = GAME_DURATION_SEC; 
  updateTimerText(remainingTime);
  clearInterval(intervalId); 
  intervalId = setInterval(()=>{
    remainingTime--;
    if(remainingTime == 0){
      clearInterval(intervalId);
      stopGame('lose'); 
    }
    updateTimerText(remainingTime);
  }, 1000);
}

function updateTimerText(remainingTime){
  let minute = Math.floor(remainingTime/60);
  let second = remainingTime%60;
  timer.innerHTML = `${minute}:${second}`;
}

//2.아이템 추가 
function addItem(className, count ,path){
  for(let i=0; i<count; i++){
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', path);
    field.append(item);
    itemPosition(item);
  }
}

//랜덤 배치 함수 
function itemPosition(item){
  let x1= 0;
  let y1 = 0;
  let x2 = fieldSize.width - 80;
  let y2 = fieldSize.height - 80;
  const itemX = randomNumber(x1,x2);
  const itemY = randomNumber(y1,y2);
  item.style.top = `${itemY}px`; 
  item.style.left = `${itemX}px`;
}

function randomNumber(min, max){
  return Math.random()*(max-min)+min;
}

//3. 아이템 클릭 
function clickItem(event){
  if(event.target.tagName !== 'IMG') return; 
  if(event.target.classList.contains('bug')){
    stopGame('lose');
  } else{
    playSound(audioCarrot);
    event.target.remove();
    count.textContent = --carrotLeft;
    if(carrotLeft === 0){
      stopGame('win');
    }
  }
}

//4. 게임 정지 
function stopGame(state){
  started = false;
  stopSound(audioPlay);
  clearInterval(intervalId); 
  hideStopButton();
  showModal(state);
  carrotLeft = CARROT_COUNT;
  field.innerHTML = '';
}

function hideStopButton(){
  startBtn.children[0].classList.remove('fa-stop');
  startBtn.children[0].classList.add('fa-play');
}

// function showModal(state){
//   modal.classList.add('on');
//   if(state === 'win'){
//     modal.children[1].textContent = 'You win🎉';
//     playSound(audioWin);
//   } else{
//     playSound(audioAlert);
//     startBtn.style.visibility = 'hidden';
//     if(state === 'pause'){
//       modal.children[1].textContent = 'restart❓';
//     } else{
//       modal.children[1].textContent = 'You lose😈';
//     }
//   } 
// }

function playSound(sound){
  sound.currentTime = 0;
  sound.play(); 
}

function stopSound(sound){
  sound.pause(); 
}

/*리팩토링 1차
1. 랜덤배치 - randomNumber 함수 생성 (O)
2. addItem 함수 파라미터 활용 (O)
3. startGame 함수 간결하게 하기 (O)
4. stop btn 지우고, 함수 호출시에 생성하기 (O)
5. updateTimer 함수 만들기 (O)
6. playSound 함수 생성 (O)

리팩토링 2차 - class로 만들기
-> 함수는 역할에 따라 완벽하게 분리되어야 한다. 
1. 모달 클래스
2. 필드 클래스
3. 게임 클래스 
*/
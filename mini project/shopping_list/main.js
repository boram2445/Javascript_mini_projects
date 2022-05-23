"use strict";

const lists = document.querySelector('.lists');
const inputItem = document.querySelector('.input-item');
const inputBtn = document.querySelector('.btn-input');

//1. list item 생성 및 삭제 
function makeItem(data){
  const li = document.createElement('li');
  const strong = document.createElement('strong');
  const btn = document.createElement('button');
  strong.textContent = data;
  li.setAttribute('class', 'list');
  li.append(strong);
  btn.setAttribute('class', 'btn-delete');
  btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  btn.addEventListener('click',()=>{
    btn.parentNode.remove()
  })
  li.append(btn);
  lists.append(li);
  li.scrollIntoView();
}

function addItem(){
  const data = inputItem.value;
  if(data === '') return;
  makeItem(data);
  inputItem.value = '';
}

//1. Enter을 누르거나, btn누르면 list item 추가하기 
inputBtn.addEventListener('click', addItem);

window.addEventListener('keydown', (e)=>{
  if(e.key !== 'Enter') return; 
  addItem();
})


/*
  배운점
  1. innerHTML로 요소를 생성한 것은 addEventListner가 먹지 않는다. (왜그럴까?)
  2. 해당 태그에 이벤트를 걸고 싶으면, createElement를 사용해야 한다. 
  3. 처음에는 아이템이 없었는데, 중간에 생성해 주는 프로세스가 있다면, 함수 밖에서는 처음에 호출되지 않기 
  때문에 사용할 수 없다. 
*/


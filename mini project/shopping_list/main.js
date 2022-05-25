"use strict";
const lists = document.querySelector('.lists');
const inputItem = document.querySelector('.input-item');
const inputBtn = document.querySelector('.btn-input');

//1. list item 생성 및 삭제 
function makeItem(data){
  const li = document.createElement('li');
  li.setAttribute('class', 'list');
  const strong = document.createElement('strong');
  strong.textContent = data;
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn-delete');
  btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`; //변동하지 않는 요소이기 때문에 
  btn.addEventListener('click',()=>{
    btn.parentNode.remove()
  })
  li.append(strong);
  li.append(btn);
  return li; 
}

function addItem(){
  const data = inputItem.value;
  if(data === ''){
    inputItem.focus();
    return;
  }
  const item = makeItem(data);
  lists.append(item);
  item.scrollIntoView();
  inputItem.value = '';
}

//1. Enter을 누르거나, btn누르면 list item 추가하기 
inputBtn.addEventListener('click', ()=>{
  addItem();
  inputItem.focus();  //버튼을 누르면 focus가 button으로 옴겨오기 때문에
});

window.addEventListener('keydown', (e)=>{
  if(e.key !== 'Enter') return; 
  addItem();
})


/*
  배운점
  1. innerHTML로 요소를 생성한 것은 addEventListner가 먹지 않는다.-변동되지 않을 요소만 쓰자 
  2. 해당 태그에 이벤트를 걸고 싶으면, createElement를 사용해야 한다. 
  3. 처음에는 아이템이 없었는데, 중간에 생성해 주는 프로세스가 있다면, 함수 밖에서는 처음에 호출되지 않기 
  때문에 사용할 수 없다. 
  4. input에 언제 focus를 줘야 하는지 주의하자. (다른 요소를 클릭하면 focus가 옴겨가게 된다)
*/


"use strict";
const lists = document.querySelector('.lists');
const inputItem = document.querySelector('.input-item');
const inputBtn = document.querySelector('.btn-input');
const form = document.querySelector('.new-form');
const storageItems = JSON.parse(localStorage.getItem("todoItems"));
let todoArr = [];

//새로 고침시 localStorage 불러오기 
if(storageItems){
  storageItems.forEach((item) => {
    addItem(item); 
    // todoArr.push(item); 
  });
}

form.addEventListener('submit',(event)=>{
  event.preventDefault(); 
  addItem();
  inputItem.focus();
});

//1. list item 생성
function makeItem(data, newTodoItem){
  const item = document.createElement('li');
  item.setAttribute('class', 'list');
  item.dataset.id = newTodoItem.id;
  item.innerHTML = `
    <strong>${data}</strong>
    <button class="btn-delete"><i class="fa-solid fa-trash-can" data-id="${newTodoItem.id}"></i></button>
  `;
  return item; 
}

//2. list item 추가 
function addItem(localData){
  // event.preventDefault(); 
  const data = localData === undefined ? inputItem.value : localData.text;
  if(data === ''){
    return;
  }
  const newTodoItem = saveLocal(data);
  const item = makeItem(data, newTodoItem);
  lists.append(item);
  item.scrollIntoView();
  inputItem.value = '';
}

//4. 로컬 스토리지 저장
function saveLocal(data){
  const newTodoItem = {
    id:Date.now(),
    text:data,
  };
  todoArr.push(newTodoItem);
  localStorage.setItem("todoItems", JSON.stringify(todoArr));
  return newTodoItem; 
}

//3. list item 삭제 
lists.addEventListener('click', (event)=>{
  const id = event.target.dataset.id; 
  if(!id) return; 
  const deleteItem = document.querySelector(`.list[data-id="${id}"]`);
  deleteItem.remove();
  todoArr = todoArr.filter(item=>item.id !== parseInt(id));
  localStorage.setItem("todoItems", JSON.stringify(todoArr));
})

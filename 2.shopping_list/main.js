const lists = document.querySelector(".lists");
const input = document.querySelector(".input-item");
const form = document.querySelector(".new-form");

function createItem() {
  const elem = document.createElement("li");
  elem.setAttribute("class", "list");
  //3. 요소 체크 - 요소를 생성함과 동시에 이벤트도 부여할 수 있다.
  elem.addEventListener("click", () => {
    elem.classList.toggle("done");
    checkBox.checked = elem.classList.contains("done") ? true : false;
  });

  const div = document.createElement("div");
  div.setAttribute("class", "wrap-left");

  const randomId = Math.random();
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", `${input.value}${randomId}`);

  const label = document.createElement("label");
  label.setAttribute("for", `${input.value}${randomId}`);
  label.textContent = input.value;

  const trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "btn-delete");
  trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  //2. 요소 삭제
  trashBtn.addEventListener("click", () => {
    elem.remove();
  });

  div.append(checkBox, label);
  elem.append(div, trashBtn);
  return elem;
}

//1. 요소 추가
function onAdd(e) {
  e.preventDefault();

  if (!input.value) {
    input.focus();
    return;
  }
  const item = createItem();
  lists.append(item);

  item.scrollIntoView({ block: "center", behavior: "smooth" });

  input.value = "";
  input.focus();
}

form.addEventListener("submit", onAdd);

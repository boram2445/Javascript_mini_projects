const lists = document.querySelector(".lists");
const input = document.querySelector(".input-item");
const form = document.querySelector(".new-form");

let id = 0;
function createItem() {
  const item = document.createElement("li");
  item.setAttribute("class", "list");
  item.setAttribute("data-id", id);

  item.innerHTML = `
    <label>${input.value}</label>
  <button class="btn-delete" >
    <i class="fas fa-trash-alt" aria-hidden="true" data-delete=${id}></i>
  </button>`;

  id++;
  return item;
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

//2. 요소 삭제
function onDelete(e) {
  const deleteId = e.target.dataset.delete;
  if (deleteId) {
    const item = document.querySelector(`.list[data-id="${deleteId}"]`);
    item.remove();
  }
}

//3. 요소 체크
function onCheck(e) {
  if (e.target.tagName === "LI") {
    itemId = e.target.dataset.id;
  } else if (e.target.tagName === "LABEL") {
    itemId = e.target.parentElement.parentElement.dataset.id;
  } else {
    return;
  }

  if (itemId) {
    const item = document.querySelector(`.list[data-id="${itemId}"]`);
    item.classList.toggle("done");
  }
}

form.addEventListener("submit", onAdd);
lists.addEventListener("click", onDelete);
lists.addEventListener("click", onCheck);

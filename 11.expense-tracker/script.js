"use strict";

const balance = document.querySelector("#balance");
const income = document.querySelector("#money-plus");
const expense = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const form = document.querySelector("#form");
const textInput = document.querySelector("#text");
const amountInput = document.querySelector("#amount");

const localStroageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStroageTransactions : [];

function showBalance() {
  const totalPrice = transactions.reduce((sum, curr) => sum + curr.amount, 0);
  const incomePrice = transactions.reduce((sum, curr) => {
    return curr.amount > 0 ? sum + curr.amount : sum;
  }, 0);
  const sign = totalPrice < 0 ? "-" : "+";
  balance.textContent = `${sign}$${Math.abs(totalPrice.toFixed(2))}`;
  income.textContent = `$${incomePrice.toFixed(2)}`;
  expense.textContent = `$${Math.abs(totalPrice - incomePrice).toFixed(2)}`;
}

function showTransactionItem(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text}
    <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>
  `;
  list.append(item);
}

function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Math.floor(Math.random() * 100000000),
    text: textInput.value.trim(),
    amount: parseInt(amountInput.value),
  };

  transactions.push(transaction);
  showTransactionItem(transaction);
  showBalance();

  updateLocalStorage();

  textInput.value = "";
  amountInput.value = "";
}

function removeTransaction(id) {
  transactions = transactions.filter((item) => item.id !== id);
  updateLocalStorage();

  init();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

//앱 시작
function init() {
  list.innerHTML = "";
  transactions.forEach((item) => showTransactionItem(item));

  showBalance();
}

init();
form.addEventListener("submit", addTransaction);

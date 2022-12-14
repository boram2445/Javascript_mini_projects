const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate-wealth');

//1. getRandomUser 함수 만들기 
//2. main에 user요소 추가 함수 만들기 
//3. user 추가 이벤트 만들기 

getRandomUser();
getRandomUser();
getRandomUser();

let data = [];

async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 10000000),
  }

  addData(newUser);
}

// 새로운 객체를 반환해야 한다. 
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });

  updateDom();
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDom();
}

function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDom();
}

function calculateWealth() {
  const wealth = data.reduce((acc, user) => acc += user.money, 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth : <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
}

function addData(obj) {
  data.push(obj); //추후 정렬을 위해 배열에 생성된 객체를 추가하였다. 

  updateDom(); //돔에 새로운 요소를 추가하기 위해서
}

//새로운 요소 생성 및 추가 
function updateDom(providedData = data) {
  //main content를 새로고침 - 하나만 추가할때는 뒤에있는 요소만 
  //생성해도 상관없지만, sort 등 다른 처리를 할것이기 때문에 매번 새로운
  //data배열이라 생각하고 요소를 생성해 주어야 하는 듯 하다.
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByRichest);
calculateBtn.addEventListener('click', calculateWealth);

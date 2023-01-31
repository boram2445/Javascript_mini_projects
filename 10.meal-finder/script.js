const form = document.querySelector("#submit");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const randomBtm = document.querySelector("#random-btn");

const resultHeading = document.querySelector("#result-heading");
const mealsContainer = document.querySelector("#meals");
const singleMeal = document.querySelector("#single-meal");

//검색한 meal 종류 API에서 정보 받아오기
async function searchMeal(e) {
  e.preventDefault(); //js에서도 form을 사용하면 e.preventDefault를 이용해야 하는구나!

  const term = search.value.trim();
  if (!term) {
    alert("음식 이름을 입력해 주세요😉");
    search.focus();
    return;
  }

  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);

  resultHeading.innerHTML = `<h3>${
    meals ? `Search results for : '${term}'` : "검색 결과가 없습니다😭"
  }</h3>`;

  mealsContainer.innerHTML = `
    ${
      meals
        ? meals
            .map(
              (meal) =>
                `<div class="meal">
                  <img src=${meal.strMealThumb} alt=${meal.strMeal}>
                  <div class="meal-info" data-mealId=${meal.idMeal}>
                    <h3>${meal.strMeal}</h3>
                  </div>
                </div>`
            )
            .join("")
        : ""
    }
  `;
}

//meal id와 일치하는 meal 정보 API에서 받아오기
async function getMealById(id) {
  const [mealDetail] = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);
  addMealToDom(mealDetail);
}

//랜덤 meal 정보 API에서 받아오기
async function getRandomMeal() {
  resultHeading.innerHTML = "";
  const [mealDetail] = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  )
    .then((response) => response.json())
    .then((data) => data.meals);
  addMealToDom(mealDetail);
}

//음식클릭시 디테일 페이지 보여주기
function showMealDetail(e) {
  //이벤트 위임 - 내가 찾던 요소인지 판별하는 법
  const path = e.path || e.composedPath();
  const mealInfo = path.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else return false;
  });
  if (!mealInfo) return;
  const id = mealInfo.dataset.mealid;

  getMealById(id);
}

function getIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    } else break;
  }
  return ingredients;
}

async function addMealToDom(mealDetail) {
  const ingredientList = getIngredients(mealDetail);

  singleMeal.innerHTML = `
    <h2>${mealDetail.strMeal}</h2>
    <img src=${mealDetail.strMealThumb} alt=${mealDetail.strMeal}>
    <ul class="category">
      <li>${mealDetail.strCategory}</li>
      <li>${mealDetail.strArea}</li>
    </ul>
    <p class="instruction">${mealDetail.strInstructions}</p>
    <div class="ingredients">
      <h2 >Ingredients</h3>
      <ul>
        ${ingredientList
          .map((item) => `<li>${item.ingredient} - ${item.measure}</li>`)
          .join("")}
      </ul>
    </div>
  `;
}

form.addEventListener("submit", searchMeal);
mealsContainer.addEventListener("click", showMealDetail);
randomBtm.addEventListener("click", getRandomMeal);

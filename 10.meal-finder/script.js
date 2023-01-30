const form = document.querySelector("#submit");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const randomBtm = document.querySelector("#random-btn");

const resultHeading = document.querySelector("#result-heading");
const mealsContainer = document.querySelector("#meals");
const singleMeal = document.querySelector("#single-meal");

async function fetchSearchMeal(e) {
  e.preventDefault(); //js에서도 form을 사용하면 e.preventDefault를 이용해야 하는구나!

  const inputValue = search.value;
  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);

  resultHeading.innerHTML = `<h3>Search results for '${inputValue}':</h3>`;
  //요소를 innerHtml로 하지말고 직접 만들어야 할까?
  mealsContainer.innerHTML = `
    ${meals
      .map(
        (meal) =>
          `<img src=${meal.strMealThumb} alt=${meal.strMeal} data-id=${meal.idMeal}>`
      )
      .join("")}
  `;
}

function fetchRandomMeal() {}

function getIngredients(detail) {
  const ingredients = Object.entries(detail).filter(
    (obj) => obj[0].includes("strIngredient") && obj[1]
  );
  const measures = Object.entries(detail).filter(
    (obj) => obj[0].includes("strMeasure") && obj[1].trim()
  );
  console.log(ingredients);
  let ingredientList = [];
  for (let i = 0; i < ingredients.length; i++) {
    ingredientList.push({
      ingredient: ingredients[i][1],
      measure: measures[i][1],
    });
  }
  return ingredientList;
}

async function showMealPage(e) {
  if (e.target.tagName !== "IMG") return;
  const id = e.target.dataset.id;

  const [mealDetail] = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);

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

form.addEventListener("submit", fetchSearchMeal);
mealsContainer.addEventListener("click", showMealPage);

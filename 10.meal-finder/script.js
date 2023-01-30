const form = document.querySelector("#submit");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const randomBtm = document.querySelector("#random-btn");

const resultHeading = document.querySelector("#result-heading");
const mealsContainer = document.querySelector("#meals");

async function fetchSearchMeal(e) {
  e.preventDefault(); //js에서도 form을 사용하면 e.preventDefault를 이용해야 하는구나!

  const inputValue = search.value;
  const meals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);

  resultHeading.innerHTML = `<h2>Search results for '${inputValue}':</h2>`;
  mealsContainer.innerHTML = `
    ${meals
      .map((meal) => `<img src=${meal.strMealThumb} id=${meal.idMeal}>`)
      .join("")}
  `;
}

function fetchRandomMeal() {}

form.addEventListener("submit", fetchSearchMeal);

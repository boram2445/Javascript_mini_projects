function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.reject("치킨을 가져올 수 없음!");
  return Promise.resolve("🌿 => 🐔");
}

getChicken() //
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log)
  .catch(console.error);
//🌿 => 🐔 => 🥚 => 🍳

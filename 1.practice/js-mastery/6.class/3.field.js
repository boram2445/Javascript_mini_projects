//접근 제어자
class Fruit {
  #name;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name} ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
// apple.#name = "오렌지"; #feild는
console.log(apple);

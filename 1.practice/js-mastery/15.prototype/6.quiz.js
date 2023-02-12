class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }
  play() {
    console.log(`${this.owner}! 같이 놓쟈옹`);
  }
}

class Tiger extends Animal {
  hunt() {
    console.log("사냥하자! ...🐓");
  }
}

const dog1 = new Dog("멍멍", "🐶", "보람");
dog1.play();
dog1.printName();
const tiger1 = new Tiger("타이거", "🦁");
tiger1.hunt();
tiger1.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
console.log(tiger1 instanceof Animal);

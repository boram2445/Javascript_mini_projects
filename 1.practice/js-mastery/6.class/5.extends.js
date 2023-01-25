//부모 클래스
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("자자");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("yello");
console.log(tiger);
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자!");
  }
  eat() {
    super.eat();
    console.log();
  }
}
const dog = new Dog("brown", "boram");
console.log(dog);
dog.play();

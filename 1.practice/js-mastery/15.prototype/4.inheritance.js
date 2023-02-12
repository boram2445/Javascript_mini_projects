// 프로토타입을 베이슬로 한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  //super(name, emoji) - 부모 생성자에서 필요한 것을 call이라는 함수를 통해 전달해준다
  Animal.call(this, name, emoji);
  this.owner = owner;
}

//만약 Dog가, Animal을 상속하게 하고 싶다면?
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = function () {
  console.log(`${this.owner}! 같이 놓쟈옹`);
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("사냥하자! ...🐓");
};
const dog1 = new Dog("멍멍", "🐶", "보람");
dog1.play();
dog1.printName();
const tiger1 = new Tiger("타이거", "🦁");
tiger1.hunt();
tiger1.printName();

console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //true
console.log(dog1 instanceof Tiger); //false

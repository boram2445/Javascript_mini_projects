// 오브젝트는 단 하나의 prototype을 가리킬 수 있다(부모는 단 하나!)
//하지만! 여러개의 함수들을 상속하고 싶다!
//Mixin!
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

//Dog 생성자함수의 프로토타입에 play와 sleep이라는 객체를 함께 썪고 싶은 경우?
function Dog(name) {
  this.name = name;
}

//Dog의 prototype에 play객체와 sleep객체를 할당해라
Object.assign(Dog.prototype, play, sleep);
const dog = new Dog("멍멍");
console.log(dog);
dog.play(); //멍멍 놀아요!
dog.sleep(); //멍멍 자요!

//class도 내부적으로는 프로토타입이기 때문에, 동일한 방식으로 mixin을 할 수 있다.
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("어흥");
tiger.play();
tiger.sleep();

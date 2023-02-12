// const dog1 = { name: "뭉치", emoji: "🐶" };
// const dog2 = { name: "코코", emoji: "🦁" };

// 클래스는 프로토타입을 한단계 감싸는 문법적 설탕이다.
//(즉, 우리는 클래스가 있는것 처럼 쓸 수 있지만, 사실 내부적으로는 프로토타입으로 동작된다)

//생성자 함수
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수 - 동일한 일을 객체마다 생성해주는 것은 메모리 낭비인것 같다
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}

//프로토타입 레벨의 함수 - 조금더 메모리 전략하기!
//각각의 만들어진 인스턴스에 해당 함수가 들어있지 않고, 프로토타입에 들어있는 함수를 만들 수 있다.
//만들어진 인스턴스는 동일한 프로토타입을 상속하고 있기 때문에 해당 함수를 사용할 수 있다.
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog("뭉치", "🐶");
const dog2 = new Dog("코코", "🦁");
console.log(dog1, dog2); //Dog { name: '뭉치', emoji: '🐶' } Dog { name: '코코', emoji: '🦁' }
dog1.printName(); //뭉치 🐶
dog2.printName(); //코코 🦁

//오버라이딩
//인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면,
//프로토타입 레벨(부모) 함수의 프로퍼티는 가려진다.
dog1.printName = function () {
  console.log("안녕");
};
dog1.printName(); //안녕

//정적 레벨
Dog.hello = function () {
  console.log("Hello");
};
Dog.hello(); //Hello
Dog.MAX_AGE = 20;

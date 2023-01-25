// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4; //인스턴스 레벨에서 접근 할 수 없다
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //클래스 레벨의 메서드
  static makeRandomFruit = () => {
    //클래스 레벨의 메서드에서는 this를 참조할 수 없다.
    //왜냐하면 class 자체로는 템플릿 상태이기 때문이다.
    return new Fruit("banana", "🍌");
  };
  display = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

console.log(Fruit.makeRandomFruit());

const apple = new Fruit("apple", "🍎");
console.log(apple);

//Math라는 class의 static 메서드를 사용하는 것이다
Math.pow();

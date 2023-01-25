//객체를 손쉽게 만들 수 있는 템플릿
//1. 생성자 함수(고전방법)
//2. 클래스 👍

class Fruit {
  //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  //인스턴스를 만들때 필요한 데이터
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //멤버함수 : 보통 생성자 밖에서 정의해준다
  display = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
console.log(apple);

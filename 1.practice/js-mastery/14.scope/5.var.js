//var의 특징
//-> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕온다.
//-> 코드의 가독성과 유지보수성에 좋지 않다.

//1. 변수 선언하는 키워드 없이 선언, 할당이 가능하다
//선언인지, 재할당인지 구분하기 어렵다.
something = "❤";
console.log(something);

//2. 재선언을 해도 오류가 나지 않는다.
//이전에 선언했던 값이 덮어 씌워지면서 오류를 낼 가능성이 높아진다.
var poo = "💩";
var poo = "💩";
console.log(poo);

//3. 블록 레벨 스코프 안됨
//지역변수를 사용하고 싶었는데, 지역변수가 글로벌 변수랑 동일하게 사용되어져 버린다.
var apple = "사과";
{
  var apple = "🍎";
}
console.log(apple);

//4. 함수 레벨 스코프만 지원됨
function example() {
  var dog = "🐶";
}
// console.log(dog);  - dog is not defined

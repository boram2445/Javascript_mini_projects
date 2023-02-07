// 1.함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log("Hello");
}

// 2.변수(let, const)와 클래스는 선언만 호이스팅이 되고,
//초기화는 안됨
//초기화전, 변수에 접근하면 컴파일(빌드)에러가 발생한다
// console.log(hi); - Cannot access 'hi' before initialization
let hi = "hi";
let func1 = function () {};
class Cat {}

//3. 아래 코드가 에러가 나는 이유
//블럭 안에서 변수를 선언했기 때문에, 선언 된 부분만 호이스팅이 되어서
//올라오지만, 초기화가 안되었다고 판단이 되는 것이다.
let x = 1;
{
  console.log(x);
  //let x = 2; - Cannot access 'x' before initialization
}

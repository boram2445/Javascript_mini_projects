//코드 블럭 : { }, if(){} , for(){}, function(){}

//1.스코프 (블럭)안에 있는 변수는 블럭 내부에서만 접근이 가능하다.
{
  const a = "a";
  console.log(a);
}

// console.log(a); - a is not defined
const b = "b";

//2. 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  //message는 함수 내부에서 쓰이는 지역변수(로컬변수)이다.
  const message = "Hello World";
  console.log(message);
}

// console.log(message); - message is not defined

//3. 함수 외부에서는 함수의 매개변수를 참조할 수 없다.
function sum(a, b) {
  console.log(a, b);
}
// console.log(a, b);

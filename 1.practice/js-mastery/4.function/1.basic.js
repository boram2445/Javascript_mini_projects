//사용예제1
//add함수 선언
function add(num1, num2) {
  //숫자 2개의 인자를 전달받는다 => 함수 안에서 사용하는 변수와 동일하다.
  return num1 + num2; //결과값 리턴
}

const result = add(1, 3); //add 함수 호출
console.log(result);

//사용예제2
let lastName = "김";
let firstName = "지수";

function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}
console.log(fullName(lastName, firstName));

let lastName2 = "김";
let firstName2 = "보람";

console.log(fullName(lastName2, firstName2));

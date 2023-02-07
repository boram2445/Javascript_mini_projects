// 엄격모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격모드이다.
"use strict";

//1. 키워드 삭제 불가
var x = 1;
//delete x; -  Delete of an unqualified identifier in strict mode.

//2. 선언하지 않은 변수 사용 불가
function add(x) {
  var a = 2;
  //b = a + x; -b is not defined
}
add(1);

//3.let, const와 같은 변수를 통해서 선언을 제대로 해주어야 한다.
const arr = [1, 2, 3];
// for (num of arr) { - num is not defined
//   console.log(num);
// }
for (const num of arr) {
  console.log(num);
}

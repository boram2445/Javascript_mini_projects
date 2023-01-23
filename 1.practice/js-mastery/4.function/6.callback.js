// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 고차함수
// action은 함수를 전달받는다.
// 이렇게 외부로부터 주어지는 함수를 callback함수라고 한다.
// 함수의 ref만 전달받아서 이후 action을 함수 안에서 호출한다.

function calculator(a, b, action) {
  if (a < 0 || b < 0) return;
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add); //add가 지닌 함수의 주소를 전달하는 것이다.

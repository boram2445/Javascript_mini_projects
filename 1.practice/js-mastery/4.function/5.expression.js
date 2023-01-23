// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
// 화살표 함수 const name = () => {}

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));
add = (a, b) => {
  return a + b;
};

add = (a, b) => a + b;

// 생성자 함수 const obj = new Function();

(function run() {
  console.log("🧡");
})();

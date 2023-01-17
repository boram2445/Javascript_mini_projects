//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = "hello";
// text = "hi";  이렇게 하면 안됨!

//1. 상수 - 항상 대문자로 작성해야 한다. 단어-단어
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
// apple = {}; 불가능
apple.name = "오렌지";
console.log(apple);

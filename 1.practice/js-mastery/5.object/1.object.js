// Object literal { key: value}
// new Object()
// Object.create();

let apple = {
  name: "apple",
  "hello-emoji": "🖐",
  0: 1,
  ["hello-bye"]: "🖐",
};

//속성, 데이터에 접근하기
console.log(apple.name); //마침표 표기법
console.log(apple["hello-emoji"]); //대괄호 표기법

apple.emoji = "🍎";
console.log(apple);

delete apple.emoji;
console.log(apple);

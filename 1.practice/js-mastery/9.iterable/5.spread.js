//Spread 연산자, 전개구문
//모든 Iterable은 Spread 될 수 있다.
//순회가 가능한 모든 것들은 최르르륵 펼쳐질 수 있다.
//fucntion(...iteralbe)
//[...iterable]
//{...obj}
//EcmaScript 2018년도에 도입되었다.

//배열을 하나씩 펼쳐서 인자로 전달하기
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

//Rest parameters를 이용해서 여러 값을 배열로 받아오기
function sum(first, second, ...nums) {
  console.log(nums); //[ 0, 1, 2, 3 ] - 배열로 전달된다
}
sum(1, 2, 0, 1, 2, 3);

//Array Concat
const fruits1 = ["🍏", "🍑"];
const fruits2 = ["🍎", "🍍"];
let arr = fruits1.concat(fruits2);
console.log(arr); //[ '🍏', '🍑', '🍎', '🍍' ]
//concat 대신 spread 연산자를 사용할 수 있다.
arr = [...fruits1, ...fruits2];
console.log(arr); //[ '🍏', '🍑', '🍎', '🍍' ]

//Object
const boram = { name: "Boram", age: 24 };
const updated = {
  ...boram,
  country: "South Korea",
};
console.log(updated); //{ name: 'Boram', age: 24, country: 'South Korea' }

//주의 - 내부 value로 object가 있으면 shallow copy가 된다는 것을 잊지 말자

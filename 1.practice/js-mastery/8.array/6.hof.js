//고차함수
const fruits = ["🍎", "🍐", "🍏", "🍑"];

//배열을 빙글 빙글 돌면서 원하는 것을 할 때
fruits.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
//이렇게 간단하게 사용 가능하다
fruits.forEach((value) => console.log(value));

//이 코드가 forEach 고차함수랑 똑 같다.
//다만, 고차함수는 정의하지 않은 함수를 인자로 넣어주고 있는 것이다.
function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

const pizza = { name: "🍕", price: 2 };
const ramen = { name: "🍜", price: 3 };
const sushi = { name: "🍣", price: 1 };
const products = [pizza, ramen, sushi, sushi];

//조건에 맞는 (콜백함수) 아이템을 찾을때
//find : 제일 먼저 조건에 맞는 아이템을 반환함./ 값을 못찾으면 undefined
let result = products.find((value) => value.name === "🍣");
console.log("find", result); //{ name: '🍣', price: 1 }

//이와 동일한 함수라고 생각하면 된다. return 뒤 조건이 true일때 값 반환
function find(item, check) {
  for (let i = 0; i < item.length; i++) {
    if (check(item[i])) {
      return item[i];
    }
  }
}

//findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환 / 값을 못찾으면 -1
result = products.findIndex((value) => value.name === "🍣");
console.log("findIndex", result); //2

//배열의 아이템들중에서 하나라도 조건에 맞는게 있는지
result = products.some((item) => item.name === "🍣");
console.log(result); //true

//배열의 아이템들이 모두 조건에 맞는지 확인
result = products.every((item) => item.name === "🍣");
console.log(result); //false

//조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter((item) => item.name === "🍣");
console.log(result); //[ { name: '🍣', price: 1 }, { name: '🍣', price: 1 } ]

console.clear();

//Map: 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap: 중첩되는 배열을 하나로 풀어준다.
result = nums.map((item) => [1, 2]);
console.log(result); //[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result); //[1, 2, 1, 2, 1,  2, 1, 2, 1, 2]

//문자열을 모두 해체해서 하나의 배열에 넣고 싶은 경우 사용하기 좋다.
result = ["dream", "coding"].map((text) => text.split(""));
console.log(result); //[ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]

result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result); //['d', 'r', 'e', 'a','m', 'c', 'o', 'd','i', 'n', 'g']

//sort : 배열의 아이템들을 정렬
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const text = ["hi", "abc"];
text.sort();
console.log(text); //[ 'abc', 'hi' ]

//숫자 정렬 주의해야 함 - 숫자가 문자열 형태로 변환되어 정렬됨
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); //[ 0, 1, 10, 2, 4, 5 ]
numbers.sort((a, b) => a - b); //음수를 리턴하면 a가 b보다 작다는 것
console.log(numbers);
numbers.sort((a, b) => b - a); //내림차순
console.log(numbers);

//reduce: 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0); //sum 초기화값 지정
console.log(result);

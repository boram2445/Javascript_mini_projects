//Iterable 하다는건! 순회가 가능하다는 거지!
//[Symbol.iterator]() : Iterator;
//심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
//순회 가능한 객체이다라는 것을 알 수 있다.
//순회가 가능하면 for...of, spread 연산자를 사용할 수 있다.

const array = [1, 2, 3];
//배열은 순회가 가능하기 때문에 for...of로 배열 안의 값에 접근가능하다.
for (const item of array) {
  console.log(item);
}

//객체는 이터레이션 규격사항을 따르지 않기 때문에 for...of 문을 사용할 수 없다.
const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
//   //console.log(item); //TypeError: obj is not iterable
// }
for (const item in obj) {
  //key를 출력한다.
  console.log(item);
}

//array.values(), .keys(), .etnries() 모두 이터레이터를 반환한다.
//따라서 반환된 이터레이터를 이용해서 for...of문 사용하여 순회가 가능하다.
for (const item of array.values()) {
  console.log(item);
}
for (const item of array.keys()) {
  console.log(item);
}
for (const item of array.entries()) {
  console.log(item);
}

//next를 호출할때마다 값을 감싸고 있는 객체가 return 된다.
//{value:값, done:반복이 끝났는지}
const iterator = array.values();
console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next()); //{ value: 2, done: false }
console.log(iterator.next()); //{ value: 3, done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

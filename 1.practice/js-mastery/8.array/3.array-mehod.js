//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ["🥭", "🍎", "🍏", "🍐"];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // true

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf("🍎")); // 1

//배열안에 특정한 아이템이 있는지 체크 - 문자열과 동일
console.log(fruits.includes("🍎")); //true

//추가 - 배열 자체를 수정
//1) 제일 뒤 추가 push
console.log(fruits.push("🍑", "🍒")); // 6 배열의 길이 return
console.log(fruits); //[ '🥭', '🍎', '🍏', '🍐', '🍑', '🍒' ]

//2) 제일 앞 추가
console.log(fruits.unshift("🍍")); //7
console.log(fruits); //['🍍', '🥭','🍎', '🍏','🍐', '🍑','🍒']

//제거
//1) 제일 뒤 제거
let lastItem = fruits.pop();
console.log(lastItem); //🍒 제거된 아이템 return
console.log(fruits); //[ '🍍', '🥭', '🍎', '🍏', '🍐', '🍑' ]

//2) 제일 앞 제거
let firstItem = fruits.shift();
console.log(firstItem); //🍍
console.log(fruits); //[ '🥭', '🍎', '🍏', '🍐', '🍑' ]

//중간에 추가 또는 삭제 - 원본 변경
//splice(start: number, deleteCount: number, ...items: T[]): T[];
const deleted = fruits.splice(1, 1, "👍");
console.log(deleted); //[ '🍎' ] 삭제된 아이템 return
console.log(fruits); //[ '🥭', '👍', '🍏', '🍐', '🍑' ]

//-------------------------------------------------------------------
//잘라진 새로운 배열을 만듦
//slice(start?: number, end?: number): T[]; - 물음표는 옵션이라는 뜻
let newArr = fruits.slice(0, 2);
console.log(newArr); //[ '🥭', '👍' ]
console.log(fruits); //[ '🥭', '👍', '🍏', '🍐', '🍑' ] - 기존의 배열 유지

console.log(fruits.slice()); //[ '🥭', '👍', '🍏', '🍐', '🍑' ] - 배열 전체 복사
console.log(fruits.slice(1)); //[ '👍', '🍏', '🍐', '🍑' ] - 1부터 끝까지
console.log(fruits.slice(-1)); //[ '🍑' ] - 뒤에서 첫번째 부터 끝까지

//여러 배열 붙이기 - 새로운 배열을 만듦
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); //[ 6, 5, 4, 3, 2, 1 ]

//중첩 배열을 하나의 배열로 쫙 펴기 - 배열 자체를 수정
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr.flat()); //[ 1, 2, 3, 4, [ 5, 6 ] ] - 기본 1단계 까지만 중첩된 것을 풀어준다.
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6 ] - 몇단계 까지 풀도록 지정할 수 있다.
arr = arr.flat(2);

//특정한 값으로 배열을 채우기 - 배열 자체를 수정
arr.fill(0);
console.log(arr); //[ 0, 0, 0, 0, 0, 0 ]

arr.fill("s", 1, 3); //-어디서 어디까지 어떤 것으로 채울지 설정 가능하다.
console.log(arr); //[ 0, 's', 's', 0, 0, 0 ]

arr.fill("a", 1); //1부터 끝까지 채우기
console.log(arr); //[ 0, 'a', 'a', 'a', 'a', 'a' ]

//배열을 문자열로 합하기
let text = arr.join();
console.log(text); //'0,a,a,a,a,a' - 자동으로 콤마를 이용해서 붙인다.

text = arr.join("");
console.log(text); //'0aaaaa' - 붙이고 싶은 문자열을 지정해 줄 수 있다.

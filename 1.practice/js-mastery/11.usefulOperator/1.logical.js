//논리연산자 Logical Operator
//&& 그리고
//|| 또는
//단축평가 : short-circuit evaluation

const obj1 = { name: "dog" };
const obj2 = { name: "cat", owner: "Boram" };

//조건문 안에서 논리연산자를 사용하면 각각의 값들이 boolean값으로 평가된다
//조건문안에서는 a&&b, a||b a와 b의 조건 모두가 평가된다.
if (obj1 && obj2) {
  console.log("둘다 true!");
}

if (obj1 || obj2) {
  console.log("둘중 하나 true!");
}

//조건문 밖에서 논리연산자를 쓰면 평가를 단축되어 값을 반환한다.
// a && b a가 true 이면 뒤의 값을 반환한다.
let result = obj1 && obj2;
console.log(result);

//a || b의 경우에는 true인게 반환된다.
// a가 true이면 a가 반환된다.
//a가 false이면 b가 반환된다.
result = obj1 || obj2;
console.log(result);

//활용예
//조건이 truthy일떄 && 무언가를 해야할 경우
//조건이 falsy 일때 || 무언가를 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐주인!";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인!";
}

//owner가 있을 경우에만 해당 함수를 호출하여라
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

//owner가 없을 경우에만 해당 함수를 호출하여라
obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//null 또는 undefined인 경우를 확인할때 - react에서 많이 사용했던방식!
let item = { price: 1 };
const price = item && item.price;
console.log(price);

//기본값을 설정
function print(message) {
  const text = message || "Hello"; //전달받는 메세지가 없을때 Hello라는 기본값을 사용하게 된다.
  console.log(text);
}
print();

//default parameter와의 차이점
//default parameter- 전달하지 않거나, undefined일 경우만 설정
// || - 값이 falshy 한 경우 설정 : 0, -0, null, undefined, ""
function print2(text = "Hi") {
  console.log(text);
}
print2();
print2(undefined);
print2(null); //null
print2(0); //null

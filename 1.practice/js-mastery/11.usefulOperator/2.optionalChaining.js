//옵셔널 체이닝 연산자 Optional Chaining Operator
//ES11 (ECMAScript 2020)

let item = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

let obj = { name: "doggy", owner: { name: "Boram" } };
function printName(obj) {
  // const ownerName = obj.owner.name; - obj가 없을 경우, 에러
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName(); //undefined
printName(obj); //Boram

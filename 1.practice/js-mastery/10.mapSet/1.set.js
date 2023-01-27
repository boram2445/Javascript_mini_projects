//Set
const set = new Set([1, 2, 3]); //Set(3) { 1, 2, 3 }
console.log(set);

//사이즈 확인
console.log(set.size); //3

//존재하는지 확인
console.log(set.has(3)); //true

//순회 - set은 이터러블이다.
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//추가
set.add(4);
console.log(set); //Set(4) { 1, 2, 3, 4 }

//있는데 추가하면? - 무시된다.
set.add(4);
console.log(set); //Set(4) { 1, 2, 3, 4 }

//삭제
set.delete(4);
console.log(set); //Set(3) { 1, 2, 3 }

//모두 삭제
set.clear();
console.log(set); //Set(0) {}

//오브젝트 세트
const obj1 = { name: "🍎", price: 8 };
const obj2 = { name: "🍌", price: 3 };
const objs = new Set([obj1, obj2]);
console.log(objs); //Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 3 } }

//퀴즈 - obj value를 변경하면 어떻게 될까? (objs에도 변경된다 - shallow copy)
obj1.price = 10;
console.log(objs); //Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 3 } }

//퀴즈 2 - 오브젝트 프로퍼티가 모두 같은 경우 추가가 될까 - 당연히 된다. 생성된 오브젝트가 새로운 메모리 주소를 가지고 있기 때문이다.
const obj3 = { name: "🍌", price: 5 };
objs.add(obj3);
console.log(objs); //Set(3) {{ name: '🍎', price: 10 },{ name: '🍌', price: 3 },{ name: '🍌', price: 5 }}

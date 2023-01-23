const obj = {
  name: "보람",
  age: 24,
};

//코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
//obj의 해당하는 key의 값을 return 하고 싶을경우
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "age"));

function addValue(obj, key, value) {
  obj[key] = value;
}

console.log(addValue(obj, "height", "160"));

function deleteKey(obj, key) {
  delete obj[key];
}

console.log(addValue(obj, "height"));

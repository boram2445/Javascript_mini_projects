// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 🤢
// 상태 변경이 필요한 경우에는, 새로운 상태(오브젝트, 값)을 만들어 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소가 전달 => 동일한 오브젝트를 가리킴)
function display(num) {
  num = 5; // 함수 안에서 전달받은 인자의 값을 변경하면 어떻게 될까?
  console.log(num); //5
}
const value = 4;
display(value);
console.log(value); //4

function displayObject(obj) {
  obj.name = "Ellie";
  console.log(obj);
}
const boram = { name: "boram" };
displayObject(boram);
console.log(boram);

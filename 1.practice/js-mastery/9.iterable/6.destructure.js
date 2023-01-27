//구조 분해 할당 Destructuring Assignment
//데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ["🍎", "🍏", "🍑", "🍐"];
const [first, second, ...others] = fruits;
console.log(first, second, others); //🍎 🍏 [ '🍑', '🍐' ]

//배열안의 값을 조금 더 의미있는 이름을 붙이고 싶을때
const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); //1
console.log(z); //point안에 원하는 값이 없다면 이렇게 기본값을 설정해 줄 수도 있다.

function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji();
console.log(title); //apple
console.log(emoji); //🍎

//Object 구조분해할당
const boram = { name: "Boram", age: 20, job: "s/w engineer" };
function display({ name, age, job }) {
  //key 이름을 통해 구조 분해 할당
  console.log("이름", name); //Boram
  console.log("나이", age); //20
  console.log("직업", job); //s/w enginner
}
display(boram);

const { name, age, job: occupation, pet = "강아지" } = boram;
console.log(name); //Boram
console.log(age); //20
console.log(occupation); //s/w enginner job-> occupation으로 이름 변경
console.log(pet); //강아지

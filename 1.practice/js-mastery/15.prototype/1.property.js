const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

//dog라는 객체 안에 namd이라는 key가 있니??
console.log("name" in dog); //true - 이걸 주로 사용한다.
console.log(dog.hasOwnProperty("name")); //true

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
/**
 * 오브젝트의 key들은 value 만으로 이루어져 있는 것이 아니라, key의 정보들도 객체로 가지고 있다는 것을 알 수 있다.
 {
  name: { value: '와우', writable: true, enumerable: true, configurable: true },
  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }  
}
 */
//특정 key하나의 디스크립터를 알아보고 싶은 경우
const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);

Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false, // 값을 업데이트 할 수 있는지
  enumerable: false, //열거가능한지
  configurable: false, // key자체를 수정가능한지
});
console.log(dog.name);
console.log(Object.keys(dog)); //열거가 안되도록 했기 때문에, dog key는 나오지 않는다.
delete dog.name;
console.log(dog.name); //값이 삭제 되지 않는다

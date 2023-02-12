// 동결! Object.freeze
//- 동결된 객체는 추가, 삭제, 쓰기, 속성 재정의가 불가능하게 된다
// (단, 얕은 꽁꽁 얼림이다!) 따라서 중첩된 boram 객체는 수정 가능하다
const boram = { name: "보람" };
const dog = { name: "와우", emoji: "🐶", owner: boram };
Object.freeze(dog);
dog.name = "멍멍";
console.log(dog.name); //와우

dog.age = 4;
console.log(dog); //추가 되지 않는다

delete dog.name;
console.log(dog); //삭제 되지 않는다.

boram.name = "김보람";
console.log(dog); //{ name: '와우', emoji: '🐶', owner: { name: '김보람' } }

//밀봉! Object.seal
//값의 수정은가능, 하지만 key 추가 X, key 삭제X, 속성 재정의 X
const cat = { ...dog };
//cat이라는 object에 dog이라는 객체를 복사
//Object.assign(cat, dog);
//cat = {...dog} - 이것도 동일하다
Object.seal(cat);
cat.name = "나용";
console.log(cat); //{ name: '나용', emoji: '🐶', owner: { name: '김보람' } }

delete cat.emoji;
console.log(cat); //{ name: '나용', emoji: '🐶', owner: { name: '김보람' } }

//객체가 동결되었는지, 밀봉되었는지 확인하는 함수
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

//확장 금지 preventExtensions
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); //false
tiger.name = "어흥흥";
delete tiger.name;
console.log(tiger); //{}
tiger.age = 12;
console.log(tiger); //{}

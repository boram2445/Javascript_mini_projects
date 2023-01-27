//Symbol 심벌
//유일한 키를 생성할 수 있음.

//아래 상황은 key1 === key2
const map = new Map();
const key1 = "key";
const key2 = "key";
map.set(key1, "Hello");
//이렇게 해도 Hello가 답이 된다 왜냐하면 key1과 key2는 같은 값이기 때문에.
console.log(map.get(key2));

//Symbol을 사용하면 key3 !== key4
//이름은 똑같아도, 유일한 key를 만들고 싶을때 Symbol을 사용한다.
const key3 = Symbol("key");
const key4 = Symbol("key");
map.set(key3, "Hello");
console.log(map.get(key4)); //undefined

//동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
//전역 심벌 레지스트리(Global Symbol Registry)에 해당 이름의 Symbol이 만들어지고,
//이름에 대한 문자열을 요구하면, 동일한 심볼을 재사용 하게 된다.
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2); //true

//keyFor은 전역 레지시트리에 저장된 key만 가져올 수 있다.
console.log(Symbol.keyFor(k1)); //key
console.log(Symbol.keyFor(key3)); //undefined

//Map에서 유용하게 사용 가능하다.조금더 유일함을 보장하여 보안성을 높일때 사용한다.

const obj = { [k1]: "hello", [Symbol("key")]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol("key")]); //undefined 객체의 심볼과 다르기 때문에 접근 불가

// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)

// || falsy 한 경우 뒤에값 반환

// ?? null, undefined인 경우에만 뒤에값 반환

//num이라는 값이 아예 없을때만 -1을 출력하고 싶다.
let num = 0;
console.log(num || -1); //-1 (X)
console.log(num ?? -1); // 0 (O)

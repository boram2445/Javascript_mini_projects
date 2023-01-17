//3. 단항 연산자
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a;
console.log(a);
console.log(-a);

a = +a;
console.log(a);
a = -a;
console.log(a);

let boolean = true;
console.log(!boolean); //false
console.log(!!boolean); //true

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 할 수 있음.
console.clear();
console.log(+false);
console.log(+null);
console.log(+"");
console.log(+0);
console.log(+true);
console.log(+"text");
console.log(+undefined);

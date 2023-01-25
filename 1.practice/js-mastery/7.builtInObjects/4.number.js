const num1 = 123;
const num2 = new Number(123);

console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);

//지수 표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

//숫자를 문자열로 변환
console.log(num4.toString());

//숫자를 그 나라의 문자에 맞게
console.log(num4.toLocaleString("ar-EG"));

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));

const num = 0.1 + 0.2 - 0.2;
console.log(num);

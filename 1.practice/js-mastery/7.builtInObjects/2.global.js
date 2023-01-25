console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

//값으로 평가해서 출력하는 함수
eval("const num =2; console.log(num)");
//값이 유한한지 판별하는 함수
console.log(isFinite(1));
console.log(isFinite(Infinity));
//문자열을 숫자로 변환하는 함수
console.log(parseFloat("1.234")); //1.234
console.log(parseInt("1.23")); //1

//URL
//아스키 문자로만 구성되어야 한다. 따라서 한글, 특수문자는 이스케이프 처리를 해야 한다.
const URL = "https://드림코딩.com";
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인것은 Component 이용
const part = "드림코딩.com";
console.log(encodeURIComponent(part));

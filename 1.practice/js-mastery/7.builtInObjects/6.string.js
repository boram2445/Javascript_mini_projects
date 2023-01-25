const textObj = new String("Hello world");
const text = "Hello World";

console.log(textObj);
console.log(text);
console.log(text.length);

//인덱스로 접근
console.log(text[0]);
console.log(text[1]);
//함수로 접근
console.log(text.charAt(0));
console.log(text.charAt(1));

//문자 위치 반환
console.log(text.indexOf("l"));
//뒤에서부터 찾기
console.log(text.lastIndexOf("l"));

//해당 문자열이 포함되어 있는가 - 대소문자 구분함
console.log(text.includes("h"));

//문자열이 해당 문자로 시작하는가
console.log(text.startsWith("H"));
//문자열이 해당 문자로 끝나는가
console.log(text.endsWith("H"));

//문자 모두 대문자로 변경
console.log(text.toUpperCase());
console.log(text.toLocaleLowerCase());

//*원본이 변형되지는 않는군
//특정한 문자 가져오기 start, end+1
console.log(text.substring(0, 2));
//index 2 부터 잘라내 가져오기
console.log(text.slice(2));
//뒤에서부터 두번째 부터 잘라내기
console.log(text.slice(-2));

//공백 제거
const space = "  hi";
console.log(space.trim());

//문자를 끊어주어 배열로 반환
const longText = "Get to the, point";
console.log(longText.split(" "));
//끊어진것 중에 두덩어리만 받고 싶은 경우
console.log(longText.split(",", 2));

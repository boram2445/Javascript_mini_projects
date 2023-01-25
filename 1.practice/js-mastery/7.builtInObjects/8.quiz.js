//퀴즈
//1. 문자열의 모든 캐릭터를 하나씩 출력하라.
const text = "Hello World!";
for (let char of text) {
  if (char === " ") continue;
  console.log(char);
}

//2. 사용자들의 id를 잘라내여서 각각의 id를 배열로 보관하여라
const ids = "user1, user2, user3, user4";
const result = ids.split(", ");
console.log(result);

//3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString());
}, 1000);

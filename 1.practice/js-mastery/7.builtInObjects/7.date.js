//UTC 기준(협정 세계시, 1970년 1월 1일 UTC 자정과의 자정 차이를 밀리초 단위로 표기)
console.log(new Date()); //현재시간 출력
console.log(new Date("Jun 2, 2023")); //특정 날짜 지정
console.log(new Date("2023-06-02T02:03:00")); //특정 시간 기준

//1970년 1월 1일 과 시간 차이를 밀리초로 나타내준다.
console.log(Date.now());
console.log(Date.parse("2023-06-02T02:03:00")); //특정 시간과의 차이도 나타낼 수 있다

const now = new Date();
//set-을 이용해서 특정 날짜로 지정할 수 있다.
now.setFullYear(2023);
now.setMonth(10); //0이 1월이다.

console.log(now.getFullYear()); //2023
console.log(now.getDate()); //25
console.log(now.getDay()); //6 (0-일요일, 6-토요일)
console.log(now); //2023-11-25T06:46:34.960Z

console.log(now.toString()); //Sat Nov 25 2023 15:49:01 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); //Sat Nov 25 2023
console.log(now.toTimeString()); //15:49:27 GMT+0900 (대한민국 표준시)
console.log(now.toISOString()); //2023-11-25T06:49:39.676Z
console.log(now.toLocaleString("en-US")); //11/25/2023, 3:50:17 PM (미국방식)
console.log(now.toLocaleString("ko-KR")); //2023. 11. 25. 오후 3:50:39

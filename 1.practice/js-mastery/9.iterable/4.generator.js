// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return {
//           value: num++ * 2,
//           done: num > max,
//         };
//       },
//     };
//   },
// };

//인터레이터를 간단하게 만들 수 있는 제너레이터
function* multipleGenerator() {
  //제너레이터는 function뒤 별표(*)를 꼭 붙여야 한다.
  for (let i = 0; i < 10; i++) {
    //yield는 return과 비슷하지만, 사용자가 원할때만 리턴해준다는 차이가 있다.
    console.log(i);
    yield i ** 2; //next를 호출해야지 다음 코드로 실행된다.
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
next = multiple.next();

//multiple.return(); //순회를 끝냄
//multiple.error('Error'); //에러 발생시킴

next = multiple.next();
console.log(next.value, next.done); // 1 false

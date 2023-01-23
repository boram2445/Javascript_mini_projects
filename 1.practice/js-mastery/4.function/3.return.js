function add(a, b) {
  return a + b;
}
const result = add(1, 3); //add라는 함수를 호출해서 결과값을 할당
console.log(result);

//조건이 맞지 않는 경우, 함수 도입 부분에서 함수를 일찍이 종료하자
function print(num) {
  if (num < 0) return;
  console.log(num);
}

print(12);
print(-12);

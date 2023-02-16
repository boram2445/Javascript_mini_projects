// 클로저는 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드와 똑같은 효과를 내기 위해서
// 이전에는 해당 기능이 없었기 때문에 클로저를 이용하였다.

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

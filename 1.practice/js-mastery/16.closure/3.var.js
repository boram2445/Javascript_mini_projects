function loop() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i); //0-4 출력하는 함수의 참조값을 배열에 push하고 있다
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func()); //그럼 0-4가 출력되지 않을까?

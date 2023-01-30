function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

//바나나와 사과를 같이 가지고 오기
//4초뒤에 [ '🍌', '🍎' ] 가 반환된다.
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
//3초뒤에 받아오게 된다.
//결과값은 배열에 담겨서 반환된다.
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

//Promise.race 주어진 Promise중에 제일 빨리 수행되는 것이 이김
Promise.race([getBanana(), getApple()]) //
  .then(console.log); //🍌

//만약 에러가 발생하는 것을 함께 묶에서 Promise.all을 하면?
//모든 Promise함수가 성공해야지 then이 실행된다.
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.error);

//실패하든 성공하던 결과를 배열로 묶어 보내줘라
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.error);

/** { status: 'fulfilled', value: '🍌' },
{ status: 'fulfilled', value: '🍎' },
{
  status: 'rejected',
  reason: Error: no orange
      at getOrange ...*/

//Bubbling up, Propagating
//a에서 던져진 에러는 b -> c -> c를 호출한 곳 까지 전파되어서 마지막에 에러를 잡을 수 있다(catch!)
//따라서 에러를 최종적으로 마지막에 캐치 해주어도 되고, 아니면 가장 근접한 곳에서 (b함수) 캐치해 주어되 된다.

function a() {
  throw new Error("error!");
}

function b() {
  try {
    a();
  } catch (error) {
    console.log("생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!");
    throw error; //다시 에러를 던질 수 있다.
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
}

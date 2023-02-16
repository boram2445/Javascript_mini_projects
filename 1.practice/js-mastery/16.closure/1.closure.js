//어떤 블록이던지 내부에서 외부로의 접근은 가능하다.
//하지만 내부에서 선언된것은 외부에서 접근할 수 없다.
const text = "hello";
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

const inner = outer();
inner();

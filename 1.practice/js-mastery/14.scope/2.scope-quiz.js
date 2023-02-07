{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1 - 코드블럭 내부에서는 값에 접근이 가능하다.
  }
  console.log(x); // 1
  console.log(y); // X - 블럭 밖에서는 내부를 참조할 수 없다
}

// 내부 블록에서는 가장 근접한 값이 출력이 된다.
const text = "global";
{
  const text = "inside block1";
  {
    console.log(text); //insde block1
  }
}

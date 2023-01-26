const fruits = ["🥭", "🍎", "🍏", "🍐"];

//배열 아이템을 참조하는 방법
console.log(fruits[1]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//추가, 삭제
//인덱스를 이용한 추가 - 좋지 않은 방식이다.
//이미 들어있는 아이템이 있으면, 덮어씌워질 수 있다.
fruits[4] = "🍉";
console.log(fruits); //[ '🥭', '🍎', '🍏', '🍐', '🍉' ]

//인덱스를 이용한 삭제 - 빈 공간이 남아있게 되어 좋지 않은 방식이다.
delete fruits[1];
console.log(fruits); //[ '🥭', <1 empty item>, '🍏', '🍐', '🍉' ]

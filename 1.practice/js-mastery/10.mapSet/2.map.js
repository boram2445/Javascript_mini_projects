const map = new Map([
  ["key1", "🍎"],
  ["key2", "🍊"],
]);

console.log(map); //Map(2) { 'key1' => '🍎', 'key2' => '🍊' }

// 사이즈 확인
console.log(map.size);

//존재하는지 확인 - key로 확인
console.log(map.has("key1"));

//순회 - key도 받아올 수 있다.
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//찾기 - key로
console.log(map.get("key1"));
console.log(map.get("key")); //존재하지 않는 key면 undefined가 나온다.

//추가
map.set("key3", "🍉");
console.log(map);
//삭제
map.delete("key3");
console.log(map);

//전부 삭제
map.clear();
console.log(map); //Map(0) {}

//오브젝트와의 큰 차이점?
//1.사용할 수 있는 함수가 map이 훨씬 많다.
//2.obj에서는 key를 동적으로 접근할 수 있었다. obj[key]
//map에서 특정한 key를 찾기 위해서는 map.get(key)로 찾아야 한다.

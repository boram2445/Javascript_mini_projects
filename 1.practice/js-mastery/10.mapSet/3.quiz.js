// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']

// let set = new Set(fruits);
// let res1 = [];
// set.forEach((item) => res1.push(item));
// console.log(res1);
console.log([...new Set(fruits)]);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// let res2 = new Set();
// set1.forEach((item) => {
//   if (set2.has(item)) res2.add(item);
// });
function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));

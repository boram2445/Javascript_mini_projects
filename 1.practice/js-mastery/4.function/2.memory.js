function add(a, b) {
  return a + b;
}

const sum = add;

console.log(add(1, 5));
console.log(sum(1, 5));
console.log(add());

const isEven  = function (num) {
  return num % 2 === 0;
}
// const tenIsEven = isEven(10);
// const elevenIsEven = isEven(11);

// console.log(tenIsEven);
// console.log(elevenIsEven);

console.log(isEven(10));
console.log(isEven(11));

// The first expression, 10 % 2 === 0 will evaluate to true, the second to false. This is because when we divide 10 by 2, it produces no remainder so 10 % 2 will be equal to 0. When we divide 11 by 2, it produces a remainder of 1, which is not equal to 0.
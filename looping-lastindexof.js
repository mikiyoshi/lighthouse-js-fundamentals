function lastIndexOf(array, value) {
  // console.log(array);
  // console.log(value);
  let lastNum = -1;
  if (array.length === 0) {
    lastNum = -1;
  } else {
    for (let i = 0; i < array.length; i++) {
      // console.log(array.length);
      // console.log(array[i]);
      if (array[i] === value) {
        // console.log(i);
        lastNum = i;
      }
    }
  }
  return lastNum;
}
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
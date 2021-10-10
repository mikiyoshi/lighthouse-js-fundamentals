function concat(dataOne, dataTwo) {
  // console.log(dataOne);
  // console.log(dataTwo);
  let newArray = [];
  if (dataOne !== "") {
    for (let i = 0; i < dataOne.length; i++) {
      newArray.push(dataOne[i]);
    }
  } 
  if (dataTwo !== "") {
    for (let n = 0; n < dataTwo.length; n++) {
      newArray.push(dataTwo[n]);
    }
  }
  console.log(newArray);
  return newArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
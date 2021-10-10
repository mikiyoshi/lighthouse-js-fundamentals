function merge(dataOne, dataTwo) {
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
  return newArray.sort();
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
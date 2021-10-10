function loopyLighthouse(range, multiples, words) {
  // console.log(range);
  // console.log(multiples[1]);
  // console.log(words);
  for (let i = range[0]; i <= range[1]; i++ ) {
      // console.log(i);
      // if (i % 5) {
      //   console.log(words[0]);
      // }
    if (!(i % multiples[0]) && !(i % multiples[1])) {
      console.log(words[0] + words[1]);
    } else if (!(i % multiples[0])) {
      console.log(words[0]);
    } else if (!(i % multiples[1])) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

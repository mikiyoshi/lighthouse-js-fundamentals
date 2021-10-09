var amounts = [61.00, 52.25, 112.99, 5.00]; 
var total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

var total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);

let name = 'pedro';
for(let character of name) {
  console.log(character);
};




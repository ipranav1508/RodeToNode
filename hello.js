console.log("hello world");
const fs = require('fs');
//var
let a = 10;
let b = 30;

let sum = a + b;
let product = a * b;
let difference = a - b;
let quotient = a / b;

// data to write 
let data = `Sum: ${sum}\nProduct: ${product}\nDifference: ${difference}\nQuotient: ${quotient}`;
console.log(data);

// write data to file
fs.writeFile('results.txt', data, (err) => {
    if (err) throw err;
    console.log('Results have been saved to results.txt');
});
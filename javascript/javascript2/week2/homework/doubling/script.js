//Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.
//Rewrite the above program using map and filter don't forget to use arrow functions.
let numbers = [1, 2, 3, 4];

let newNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

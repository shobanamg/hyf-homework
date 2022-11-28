/*** 2. Function as a variable ***/
//Create funtions that are used in these different ways:

/** i). Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions. **/
const func1 = () => console.log("function 1 has been called");
const func2 = () => console.log("function 2 has been called");
const func3 = () => console.log("function 3 has been called");
const funArr = [func1, func2, func3];

funArr.forEach((func) => func());

/** ii). Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are
 // interested: https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip **/
//Function declaration:
function funcDec() {
  return 5;
}

//Anonymous function expression:
const anonymousFunc = function () {
  return 5;
};

//Named function expression:
const namedFunc = function bar() {
  return 5;
};

namedFunc();
anonymousFunc();
funcDec();

/** iii). Create an object that has a key whose value is a function. Try calling this function. **/
const circle = {
  radius: 10,
  area: function () {
    return Math.floor(Math.PI * this.radius * this.radius);
  },
};

console.log(circle.area()); // => 314
console.log(typeof circle.area); // => function

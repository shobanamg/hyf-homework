console.log("hello world");

//When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.
//Clicking the second button should also count up and logout the same variable.

const firstButton = document.querySelector(".btn1");
let counter = 0;
const incrementCounter = () => {
  console.log(counter++);
};
firstButton.addEventListener("click", incrementCounter);

let secondButton = document.querySelector(".btn2");
secondButton.addEventListener("click", incrementCounter);

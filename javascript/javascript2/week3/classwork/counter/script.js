console.log("hello world")

//When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.
//Clicking the second button should also count up and logout the same variable.

let firstButton = document.querySelector('.btn1')
let counter = 0;
firstButton.addEventListener('click', () => {
  console.log(counter)
  counter++
})

let secondButton = document.querySelector('.btn2')
secondButton.addEventListener('click', () => {
  console.log(counter)
  counter++
})


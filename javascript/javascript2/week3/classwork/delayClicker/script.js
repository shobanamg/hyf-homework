console.log("hello");

//When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".
let button = document.querySelector(".btn");

button.addEventListener("click", () =>
  setTimeout(() => console.log("This text was delayed by 3 seconds"), 3000)
);

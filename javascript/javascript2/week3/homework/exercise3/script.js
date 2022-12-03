const setSeconds = document.querySelector("#set-seconds");
const btnStart = document.querySelector(".btn");
const sBoard = document.querySelector(".sBoard");
const lBoard = document.querySelector(".lBoard");

let sCounter = 0;
let lCounter = 0;
let isGameStarted = false;

const startGame = () => {
  if (isNaN(setSeconds.value) || setSeconds.value === "") {
    alert("Please enter a valid time in seconds to start the game");
    return;
  }
  isGameStarted = !isGameStarted;
  setTimeout(() => {
    if (sCounter === lCounter) {
      sBoard.innerHTML = ` Count : ${sCounter} `;
      lBoard.innerHTML = ` Count : ${lCounter} `;
      alert("It is draw");
    } else if (sCounter > lCounter) {
      sBoard.innerHTML = ` Count : ${sCounter} You Won!`;
      lBoard.innerHTML = ` Count : ${lCounter} You Lost `;
    } else {
      lBoard.innerHTML = ` Count : ${lCounter} You Won! `;
      sBoard.innerHTML = ` Count : ${sCounter} You Lost `;
    }
    isGameStarted = !isGameStarted;
    sCounter = 0;
    lCounter = 0;
    btnStart.innerHTML = "Restart Game";
    btnStart.style = "background-color : red";
  }, 1000 * setSeconds.value);
};

btnStart.addEventListener("click", startGame);

document.addEventListener("keyup", (event) => {
  if (isGameStarted) {
    if (event.key === "s") {
      sCounter++;
      console.log(event.key, sCounter);
    } else if (event.key === "l") {
      lCounter++;
      console.log(event.key, lCounter);
    }
  }
});

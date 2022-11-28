const setSeconds = document.querySelector("#set-seconds");
const btnStart = document.querySelector(".btn");
const sBoard = document.querySelector(".sBoard");
const lBoard = document.querySelector(".lBoard");

let sCounter = 0;
let lCounter = 0;
let isGameStarted = false;

const startGame = () => {
  console.log(typeof setSeconds.value);
  if (isNaN(setSeconds.value) || setSeconds.value === "") {
    alert("Please enter a valid time in seconds to start the game");
    return;
  }
  isGameStarted = !isGameStarted;
  setTimeout(() => {
    if (sCounter === lCounter) {
      sBoard.innerHTML = `<br><span> Count : ${sCounter} </span>`;
      lBoard.innerHTML = `<br><span> Count : ${lCounter} </span>`;
      alert("It is draw");
    } else if (sCounter > lCounter) {
      sBoard.innerHTML = `<br><span> Count : ${sCounter}<br> You Won!</span>`;
      lBoard.innerHTML = `<br><span> Count : ${lCounter}<br> You Lost </span>`;
    } else {
      lBoard.innerHTML = `<br><span> Count : ${lCounter}<br> You Won! </span>`;
      sBoard.innerHTML = `<br><span> Count : ${sCounter}<br> You Lost </span>`;
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

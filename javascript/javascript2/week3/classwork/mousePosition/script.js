//First create a callback function as a variable that logs this out: "DOM fully loaded and parsed" This callback
// function should be called when the DOM is fully loaded.
// To find what this function is called go to google! What should we search for???
let position = [];

document.addEventListener("mousemove", (event) => {
  position.push({ x: event.clientX, y: event.clientY });
});

const positionPrinter = () => {
  const xAverage =
    position.reduce((acc, cur) => cur.x + acc, 0) / position.length;
  const yAverage =
    position.reduce((acc, cur) => cur.y + acc, 0) / position.length;
  console.log(
    "The average x and y positions are",
    Math.floor(xAverage),
    Math.floor(yAverage)
  );
};

setTimeout(positionPrinter, 30000);

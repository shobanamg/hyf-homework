const args = process.argv.slice(2);
const numbers = args
  .map((arg) => parseFloat(arg))
  .filter((n) => !isNaN(n) && n !== "");
if (numbers.length === 0) {
  console.log("Error: No valid arguments found");
} else {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const average = sum / numbers.length;
  console.log(average);
}

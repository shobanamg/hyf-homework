const balance = 1000;

if (balance <= 0) {
  console.log("Please deposit some money!");
} else if (balance > 0 && balance <= 1000) {
  console.log("Your balance is looking okay");
} else if (balance > 1000 && balance <= 3000) {
  console.log("Your balance is looking good");
} else if (balance > 3000 && balance <= 10000) {
  console.log("Your balance is fantastic");
} else {
  console.log("Your balance is Amazing");
}



/*** Rewrite this with ternary operator:  ***/
/*let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/

//terinary operator:
 let result;
 result = a + b < 4 ? "Below" : "Over";

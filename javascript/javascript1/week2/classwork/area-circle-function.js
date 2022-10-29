/*** Area of the cicle ***/
function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
}

console.log(getCircleArea(5));

/*** Celcious to Fahreneit ***/
function celciusToFahreneit(celcius) {
  return Math.round(celcius * 1.8 + 32);
}
celciusToFahreneit(32);
console.log(celciusToFahreneit(38));

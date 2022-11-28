/*** 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded. ***/
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

/*** 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function
 should log out the stringToLog after delay seconds. Call the function you have created with some different arguments. ***/
const f1 = (delay, stringToLog) => {
  setTimeout(() => console.log(stringToLog), delay * 1000);
};

f1(2, "It has been 2 seconds, since the page is loaded");
f1(8, "It has been 8 seconds, since the page is loaded");

/*** 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text:
 Called after 5 seconds 5 seconds after the button is clicked.***/
let button = document.querySelector(".btn");

button.addEventListener("click", () =>
  f1(5, "It has been 5 seconds, since the button is clicked.")
);

/*** 4. Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn.
 Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the
 provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.***/
const earthLogger = () => console.log("earth");
const saturnLogger = () => console.log("saturn");

const planetLogger = (callback) => typeof callback === "function" && callback();

planetLogger(earthLogger);
planetLogger(saturnLogger);

/*** 5. Create a button with the text called "Log location". When this button is clicked the location
 (latitude, longitude) of the user should be logged out using this browser api***/
const para = document.querySelector(".demo");

const getLocation = () =>
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(showPosition)
    : (para.innerHTML = "Geolocation is not supported by this browser.");

const showPosition = (position) => {
  para.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    " Longitude: " +
    position.coords.longitude;
};

let logLocation = document.querySelector(".btn1");

logLocation.addEventListener("click", getLocation);

/*** 6. Optional Now show that location on a map using fx the Google maps api ***/
//optional

/*** 7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function
 should wait delay seconds and then call the provided callback function. Try and call this function with different delays and
 different callback functions***/
const runAfterDelay = (delay, callback) => setTimeout(callback, delay);

runAfterDelay(10000, () => console.log("Print after 10 seconds"));
runAfterDelay(20000, () => console.log("Print after 20 seconds"));

/*** 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
 If a double click has been detected, log out the text: "double click!" ***/
document.addEventListener("dblclick", () => {
  console.log("double clicked");
});

/*** 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke -
 function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function
 that should log out a funny joke. And vice versa. ***/

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  shouldTellFunnyJoke && typeof logFunnyJoke === "function"
    ? logFunnyJoke()
    : typeof logBadJoke === "function" && logBadJoke();
};

jokeCreator(true, () => console.log("Funny joke"));
jokeCreator(false, () => console.log("Funny joke"));
jokeCreator(false, "", () => console.log("Bad joke"));
jokeCreator(
  false,
  () => console.log("Funny joke"),
  () => console.log("Bad joke")
);
jokeCreator(true);

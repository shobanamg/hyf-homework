const firstWords = [
  "Bonefire",
  "Spa",
  "Gameday",
  "Exploration",
  "Yoga",
  "Darwin",
  "Party",
  "Pizza",
  "Acron",
  "silver",
];

const secondtWords = [
  "Adventures",
  "Paragon",
  "catering",
  "Kids",
  "professor",
  "Travel",
  "Plex",
  "Factor",
  "Crafts",
  "singles",
];

let randomNumber = Math.floor(Math.randome * 10);
let startupName = firstWords[randomNumber] + secondtWords[randomNumber];
console.log(
  `The Startup: ${startupName} contains ${startupName.lenth} characters`
);

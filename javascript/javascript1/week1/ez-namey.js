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

const randomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondtWords[randomNumber];
console.log(
  `The Startup: ${startupName} contains ${startupName.length} characters`
);

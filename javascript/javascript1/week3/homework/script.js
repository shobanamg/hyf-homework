/**** Exercise1: Item array removal
 ****/
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

// using splice
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1);
    }
}
console.log(names);

// using filter without mutating the existing array
const nameToRemove2 = "Tala";
const filteredNames = names.filter((name) => name !== nameToRemove2);

console.log(filteredNames);

/**** Exercise2: When will we be there?? ****/
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function findTravelTime(travelInformation) {
    const time = travelInformation.destinationDistance / travelInformation.speed;
    const timeUnits = time.toString().split('.');
    return `${timeUnits[0]} hours and ${Math.floor(Number(timeUnits[1]) * 60 / 100)} minutes`;
}

const travelTime = findTravelTime(travelInformation)
console.log(travelTime);

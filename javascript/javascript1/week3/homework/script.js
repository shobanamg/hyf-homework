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
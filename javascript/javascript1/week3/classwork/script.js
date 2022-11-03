//Array
/*** Exercise 1 ***/
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.pop(6);
arr.shift(0);
console.log(arr.length);
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (const item of arr) {
    console.log(item);
}
const stringArr = arr.toString();
console.log(stringArr);
const joinArr = arr.join(); // it returns the array into string like toString method.
console.log(joinArr);
const anotherJoinArray = arr.join("-");
console.log(anotherJoinArray);
console.log(arr.includes(2));

/*** Exercise 2 ***/
let fruits = ["apple", "Pear", "Orange"];

fruits.push("Mango");
console.log(fruits)

//Object
/*** Exercise 1 ***/

const classmates = [
    {
        name: "Aditi",
        age: 29,
    },
    {
        name: "Madhu",
        age: 30,
    },
    {
        name: "Yefan",
        age: 25,
    },
];
function isOneOfYourClassmate(studentName) {

    // using some
    return classmates.some((classmate) => classmate.name === studentName);

    //using for loop
    //   for (i = 0; i < classmates.length; i++) {
    //     if (classmates[i].name === student) {
    //       console.log(`Yes ${student} is our classmate`);
    //     }
    //     console.log(`No ${student} is not our classmate`);
    //   }
}

isOneOfYourClassmate("Alex");

classmates[1].age = 33;
console.log(classmates[1]);

/*** Exercise 2 ***/
const band = {
    name: "Friends Band",
    nationality: "Indian",
    genre: "Western",
    members: 5,
    formed: 2005,
    split: true,
    album: [
        {
            name: "First Album",
            released: 2010,
        },
        {
            name: "Second Album",
            released: 2015,
        },
    ],
};

const bandInfo = `My favourite band is called ${band.name} and it has ${band.members} members.`;
console.log(bandInfo);
console.log(band);

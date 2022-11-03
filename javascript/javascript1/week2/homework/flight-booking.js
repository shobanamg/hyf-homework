/****** Exercise 1: Flight booking ******/
function getFullname(firstname, surname) {
    return firstname + " " + surname;
}

const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Shobana", "Mathiarul");

console.log(fullname1);
console.log(fullname2);

//FormalFullname
function getFormalFullname(firstname, surname, useFormalName = true, gender) {
    if (useFormalName && gender) {
        if (gender === "male") {
            return "Lord" + " " + firstname + " " + surname;
        }
        return "Lady" + " " + firstname + " " + surname;
    }
    return firstname + " " + surname;
}

const fullname3 = getFormalFullname("Benjamin", "Hughes", true, "male");
const fullname4 = getFormalFullname("Benjamin", "Hughes", false);
const fullname5 = getFormalFullname("", "");
const fullname6 = getFormalFullname("Shobana", "Mathiarul", true, "female");

console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);
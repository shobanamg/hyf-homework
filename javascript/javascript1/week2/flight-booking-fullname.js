function getFullname(firstname, surname) {
    return firstname+ ' ' + surname;
}

const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Shobana", "Mathiarul");

console.log(fullname1);
console.log(fullname2);

//FormalFullname
function getFormalFullname(firstname, surname, useFormalName=true) {
    if(useFormalName){
        return 'lord' + ' ' +  firstname + ' ' + surname;
    } else {
    return firstname+ ' ' + surname;
}
}

const fullname3 = getFormalFullname("Benjamin", "Hughes",true);
const fullname4 = getFormalFullname("Shobana", "Mathiarul",false);
const fullname5 = getFormalFullname("", "");

console.log(fullname3);
console.log(fullname4);
console.log(fullname5);




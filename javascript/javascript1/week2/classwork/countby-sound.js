 const names = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

for (i = 0; i < names.length; i++) {
  if (names[i].toLowerCase().includes("a") === true) continue;
    console.log(names[i]);
}

const searchName = "Lola";
for (j = 0; j < names.length; j++) {
  if (names[j] === searchName) {
    console.log(j, `Yes It is ${names[j]}`);
    break;
  }else{
    console.log(`${names[j]} is not ${searchName}`);
}
}

/*
JSON
JSON stands for JavaScript Object Notation
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
Typical example of json: 
https://jsonplaceholder.typicode.com/users
For validating your JSON
https://jsonlint.com/
The most important rules:
JSON names require double quotes.
No trailing commas
In JSON, values must be one of the following data types:
a string
a number
an object (JSON object)
an array
a boolean
null
*/

const jsonTest = '{"name":"shobana","age": 34, "gender": "female"}';
console.log(jsonTest);
console.log(jsonTest.name);

const jsonTestJs = JSON.parse(jsonTest);
console.log(JSON.parse(jsonTest));
console.log(jsonTestJs.age);

const jsObj = { name: "shobana", age: 34, gender: "female" };
console.log(JSON.stringify(jsObj));

//Meal ordering website
const mealOrder = [
  {
    name: "pizza",
    id: 112,
    Price: 100,
    drinks: ["Sprite", "Fanta"],
    extras: "cheese",
  },
  {
    name: "FriedRice",
    id: 113,
    price: 120,
    drinks: ["Sprite", "Fanta"],
    extras: "lettuce",
  },
];
console.log(mealOrder);
console.log(mealOrder[mealOrder.length - 1].name);
console.log(mealOrder[mealOrder.length - 1].price);

const mealOrderString = JSON.stringify(mealOrder);
console.log(mealOrderString);
console.log(mealOrderString[mealOrderString.length - 1].name);

const mealOrderString2 =
  '[{"name":"pizza","id":112,"Price":100,"drinks":["Sprite","Fanta"],"extras":"cheese"},{"name":"FriedRice","id":113,"price":120,"drinks":["Sprite","Fanta"],"extras":"lettuce"}]';

const mealOrderObject = JSON.parse(mealOrderString2);
console.log(mealOrderObject[mealOrderObject.length - 1].name);

import mealOrder from "./mealOrder.json" assert { type: "json" };

const jsonTest = '{"name":"shobana","age": 34, "gender": "female"}';
console.log(jsonTest);
console.log(jsonTest.name);

const jsonTestJs = JSON.parse(jsonTest);
console.log(JSON.parse(jsonTest));
console.log(jsonTestJs.age);

const jsObj = { name: "shobana", age: 34, gender: "female" };
console.log(JSON.stringify(jsObj));

//Meal ordering website
const mealOrder1 = [
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
console.log(mealOrder1);
console.log(mealOrder1[mealOrder1.length - 1].name);
console.log(mealOrder1[mealOrder1.length - 1].price);

const mealOrderString = JSON.stringify(mealOrder1);
console.log(mealOrderString);
console.log(mealOrderString[mealOrderString.length - 1].name);

const mealOrderString2 =
  '[{"name":"pizza","id":112,"Price":100,"drinks":["Sprite","Fanta"],"extras":"cheese"},{"name":"FriedRice","id":113,"price":120,"drinks":["Sprite","Fanta"],"extras":"lettuce"}]';

const mealOrderObject = JSON.parse(mealOrderString2);
console.log(mealOrderObject[mealOrderObject.length - 1].name);

// fetch("mealOrder.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function alertOnload() {
    alert('hello, from js on load');
}

//alertOnload();

const rootDiv = document.querySelector('.root-div')

const button = document.createElement('button');
button.innerText = 'Click me';
rootDiv.appendChild(button);

// Add an event listener for the button's click event.
button.addEventListener("click", function () {
    const para = document.createElement('p')
    para.innerText = "you clicked me!"
    rootDiv.appendChild(para);
})


// Logic for triggering and alert onclick.
function alertonClick() {
    alert('hello, from js click!');
}

//Try entering something into the field below, click somewhere else to trigger the event
const input = document.querySelector('input');
const log = document.querySelector('#log');
input.addEventListener('change', updateValue);

function updateValue(e) {
    log.innerText = e.target.value;
}

input.addEventListener('focus', function (event) {
    event.target.style.background = 'limegreen';
});

const alertButton = document.createElement('button')
alertButton.textContent = 'Click me to trigger an alert';
alertButton.addEventListener("click", () => alertonClick())
rootDiv.appendChild(alertButton);

//Favorite dishes with arrray
const favouriteDish = ["chicken korma", "fried rice", "biriyani"];
let menuItem = document.querySelector('.menu-items');

for (let i = 0; i < favouriteDish.length; i++) {
    const listItem = document.createElement('li')
    listItem.innerText = favouriteDish[i];
    menuItem.appendChild(listItem);
}



//Favorite dishes with array of objects
const favouriteDishes = [{dishName: "chicken65", isFavourite: true}, {dishName: "tomato rice", isFavourite: true}, {dishName: "thalapakati biriyani", isFavourite: false}, {dishName: "sambar rice", isFavourite: true}];
const foods = document.querySelector('.foods');

favouriteDishes.map((dish) => {
    if(dish.isFavourite){
        const li = document.createElement('li');
        li.innerText = `${dish.dishName}, -my favourite`;
        foods.appendChild(li);
    }
});










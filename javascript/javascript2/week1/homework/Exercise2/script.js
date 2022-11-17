/*** Spirit animal name generator ***/
const btn = document.querySelector('.btn');
const textOutput = document.querySelector('.output-div');
const myInput = document.querySelector('#user-name');

const spritAnimalName = ["patience Ant", "bravery Alligator", "cunning Anaconda", "sensitive Albatross", "keen eyesight Antelope", "isolated and humble Armadillo", "visionary Beaver", "strength Buffalo", "fear Bat", "Power Bear"];

btn.addEventListener('click', () => {
    if (myInput.value === '') {
        alert('Please enter a valid Name')
    } else {
        let randomSpritAnimal = spritAnimalName[Math.floor(Math.random() * spritAnimalName.length)];
        return textOutput.innerHTML = `${myInput.value} - ${randomSpritAnimal}`;
    }
})

myInput.addEventListener('mouseover', () => {
    location.reload();
})




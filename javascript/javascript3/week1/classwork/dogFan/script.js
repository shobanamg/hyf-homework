//Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random
//1.Get a random dog image and display it in the browser

const getRandomDogImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setTimeout(() => {
        document.querySelector(
          ".image-container"
        ).innerHTML = `<img src="${data.message}" width="500" height="500" alt="dog img">`;
      });
    }, 1000);
};

const getRandomImage = async () => {
  const resp = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await resp.json();
  const breedArr = Object.keys(data.message);
  const randomIndex = Math.floor(Math.random() * breedArr.length);
  const randomBreed = breedArr[randomIndex];
  const url = `https://dog.ceo/api/breed/${randomBreed}/images/random`;
  const response = await fetch(url);
  const breed = await response.json();
  const breedImgContainer = document.querySelector(".breed-image-container");
  const breedimage = document.createElement("img");
  const breedName = document.createElement("h2");
  breedimage.setAttribute("src", `${breed.message}`);
  breedimage.setAttribute("width", "500");
  breedimage.setAttribute("height", "500");
  breedimage.setAttribute("alt", "dog img");
  breedImgContainer.appendChild(breedimage);
  breedName.innerHTML = `Breed Name is ${randomBreed}`;
  breedImgContainer.appendChild(breedName);
};

setInterval(getRandomImage, 1000);

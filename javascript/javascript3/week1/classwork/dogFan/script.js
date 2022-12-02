//Lets create a site for dog lovers using this API: https://dog.ceo/api/breeds/image/random
//1.Get a random dog image and display it in the browser
// setInterval(() => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(
//         ".image-container"
//       ).innerHTML = `<img src="${data.message}">`;
//     });
// }, 2000);

const getRandomImage = async (breed) => {
  return data.message;
};

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const result = Object.keys(data.message).map(async (breed) => {
      let { message } = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      )
        .then((response) => response.json())
        .then((data) => data);
      document
        .querySelector(".breed-image-container")
        .appendChild((document.createElement("img").src = `${message}`));
    });
    console.log(result);
    document.querySelector(".breed-image-container").innerHTML = "";
  });

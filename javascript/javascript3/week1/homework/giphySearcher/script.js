const searchGif = document.querySelector(".search-gif");
const numberOfGif = document.querySelector(".number-of-gif");
const btn = document.querySelector(".btn");
const gifContainer = document.querySelector(".gif-container");

const getData = () => {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=4BhKE3YXMUStugZmjc72MMZMNLmZz5B1&q=${searchGif.value}&limit=${numberOfGif.value}&offset=0&rating=pg-13&lang=en

`)
    .then((response) => response.json())
    .then((giphyData) => {
      console.log(giphyData);
      const gifData = giphyData.data;
      console.log(searchGif.value);
      gifData.forEach((gif) => {
        gifContainer.innerHTML += `<div class="gif-box"><img src=${gif.images.original.url} width="400" height="400" alt="giphy"></div>`;
      });
    });
};

btn.addEventListener("click", getData);

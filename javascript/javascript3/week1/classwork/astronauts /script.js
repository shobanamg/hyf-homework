fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => {
    const astroHeader = document.querySelector(".astro-header");
    astroHeader.innerText = `There are ${data.number} astronauts in space, they are:`;
    const people = data.people.map((person) => `<li>${person.name}</li>`);
    console.log(people);
    const peopleWrapper = document.querySelector(".people");
    peopleWrapper.style.listStyle = "none";
    peopleWrapper.innerHTML = people.join(" ");
  });

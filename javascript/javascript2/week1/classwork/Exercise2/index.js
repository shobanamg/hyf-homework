const form = document.querySelector('#myForm');
const ul = document.querySelector('ul');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.querySelector('Input');
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
});
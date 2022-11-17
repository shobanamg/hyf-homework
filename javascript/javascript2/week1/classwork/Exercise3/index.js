let toggle = false;

let toggleButton  = document.querySelector('button')
toggleButton.addEventListener('click',function() {
    if (toggle === false){
        toggle = true;
        document.body.classList.add('dark');
    } else {
        toggle = false;
        document.body.classList.remove('dark');
    }
});
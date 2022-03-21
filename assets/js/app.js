const menu = document.querySelector('.menu i');
const navbar = document.querySelector('nav');

menu.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    }
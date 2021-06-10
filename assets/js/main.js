// Menu show y hidden
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Show
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Hidden
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

// Remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

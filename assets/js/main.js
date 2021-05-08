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

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active');
        }
    })
}


class TypeWriter {
    constructor(txtElement, words, wait) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wait = wait;
        this.type();
    }

    type() {
        const fullTxt = this.words;
        this.txt = fullTxt.substring(0, this.txt.length + 1);

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        const typeSpeed = 165;
    
        if (this.txt === fullTxt) {
            setTimeout(() => {
                document.querySelector('.txt').className = "txt-hidden";
            }, this.wait);
            return;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init typewriter
    new TypeWriter(txtElement, words, wait);
}
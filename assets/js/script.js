/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            const header = document.querySelector('header');
            const headerHeight = header.offsetHeight;
                window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});


/* scroll active */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* Mobile Menu Toggle */
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const menuIcon = document.querySelector('#menu-icon');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

/* Swap between hamburger and close icon */
if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

/* Close mobile menu on link click */
navMenu.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

/* Close mobile menu on outside click */
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});
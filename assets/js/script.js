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

/* Mobile Menu Toggle */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* Close mobile menu on link click */
navLinks.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

/* Close mobile menu on outside click */
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});
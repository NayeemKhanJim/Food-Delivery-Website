document.addEventListener("scroll", () => {
    const nav = document.querySelector('.header');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }

});



const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const navClose = document.querySelector('.close-toggle-icon');

navToggle.addEventListener('click', () => {
    navList.classList.add('active');
});

navClose.addEventListener('click', () => {
    navList.classList.remove('active');

})

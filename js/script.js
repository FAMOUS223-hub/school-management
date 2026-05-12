document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('openBtn');
    const navLinks = document.getElementById('navlinks');

    hamburger.addEventListener('click', () =>{
        navLinks.classList.toggle('active');
    });
});

const footerDate = document.getElementById('footerDate');
const currentYear = new Date().getFullYear();
footerDate.textContent = currentYear;
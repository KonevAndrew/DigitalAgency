window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.links'),
    menuItem = document.querySelectorAll('.nav_links'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('links_active');
        })
    })
})
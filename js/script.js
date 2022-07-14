window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile-menu'),
    menuItem = document.querySelectorAll('.mobile-menu__item'),
    hamburger = document.querySelector('.hamburger'),
    bgMobile = document.querySelector('.mobile-menu__background');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        bgMobile.classList.toggle('mobile-menu__background_active');
        menu.classList.toggle('mobile-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            bgMobile.classList.toggle('mobile-menu__background_active');
            menu.classList.toggle('mobile-menu_active');
        });
    });
});
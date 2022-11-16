'use strict';

// Мобильное меню
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile-menu'),
        menuItem = document.querySelectorAll('.mobile-menu__item'),
        hamburger = document.querySelector('.hamburger'),
        bgMobile = document.querySelector('.mobile-menu__background'),
        menuNav = document.querySelector('.mobile-menu__nav');

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

    bgMobile.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        bgMobile.classList.toggle('mobile-menu__background_active');
        menu.classList.toggle('mobile-menu_active');
    });

    menuNav.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        bgMobile.classList.toggle('mobile-menu__background_active');
        menu.classList.toggle('mobile-menu_active');
    });


    // Рендер элементов-категорий мобильного меню с использованием классовых компонентов
    class MobileMenuItem {
        constructor(text, href, parentSelector, ...classes) {
            this.text = text;
            this.href = href;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const element = document.createElement('a');

            if (this.classes.length === 0) {
                this.element = 'mobile-menu__item';
                element.classList.add(this.element);
            } else {

                this.classes.forEach(className => element.classList.add(className));
            }

            element.setAttribute('href', `${this.href}`);

            element.innerHTML = `
                ${this.text}
            `;
            this.parent.append(element);
        }
    }

    // 1
    new MobileMenuItem(
        "Бренды",
        "/brands",
        ".mobile-menu__wrapper",
        "mobile-menu__item",
        "mobile-menu__item-brands"
    ).render();

    // 2
    new MobileMenuItem(
        "Новинки",
        "/category-new",
        ".mobile-menu__wrapper",
        "mobile-menu__item",
        "mobile-menu__item-new"
    ).render();

    // 3
    new MobileMenuItem(
        "Кроссовки",
        "/cross",
        ".mobile-menu__wrapper",
        "mobile-menu__item",
        "mobile-menu__item-cross"
    ).render();

    // 4
    new MobileMenuItem(
        "Кеды",
        "/sneakerses",
        ".mobile-menu__wrapper",
        "mobile-menu__item",
        "mobile-menu__item-sneakers"
    ).render();

    // 5
    new MobileMenuItem(
        "Ботинки",
        "/boots",
        ".mobile-menu__wrapper",
        "mobile-menu__item",
        "mobile-menu__item-boots"
    ).render();

    // 6
    new MobileMenuItem(
        "Распродажа",
        "/sales",
        ".mobile-menu__wrapper",
        "mobile-menu__item",
        "mobile-menu__item-sale"
    ).render();
});
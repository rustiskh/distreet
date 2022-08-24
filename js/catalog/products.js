"use strict";

function render(payload) {
    let htmlCatalog = '';

    const filteredCatalog = payload ? catalog.filter(({ brand }) => {
        return brand.toLocaleLowerCase() === payload.brand.toLocaleLowerCase();
    }) : catalog;

    filteredCatalog.forEach(({ id, img, brand, name, currentPrice, sale, newPrice, oldPrice, sizes }) => {

        let sizeItem = '';

        sizes.forEach((s) => {
            sizeItem += `<div class="product-card__size-item">${s}</div>`;
        });

        htmlCatalog += `
            <div class="product-card ${sale === false ? '' : 'product-card_sale'
            }">
                <img class="product-card__img" src="${img}" alt="${brand}">
                <div class="product-card__content">
                    <h3 class="product-card__title h3-title">${name}</h3>
                    <div class="product-card__price-wrapper">
                        <div class="product-card__price product-card__price_current">${currentPrice} ₽</div>
                        <div class="product-card__price product-card__price_new">${newPrice} ₽</div>
                        <div class="product-card__price product-card__price_old">${oldPrice} ₽</div>
                    </div>
                </div>
                <div class="product-card__size-wrapper">
                    ${sizeItem}
                </div>
            </div>
        `;
    });

    const html = `
        ${htmlCatalog}
    `;

    ROOT_MAIN_SLIDER.innerHTML = html;

    // Сокращение кол-ва символов в названии товара в карточке товара
    (function () {
        const nameTitleItems = document.querySelectorAll('.product-card__title');

        nameTitleItems.forEach((item) => {
            const cardTitle = item.textContent;

            if (cardTitle.length > 52) {
                item.textContent = item.textContent.substring(0, 52) + '...';
            }
        });
    })();
}

render();
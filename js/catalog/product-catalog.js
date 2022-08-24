"use strict";

var catalog = [
    // 1
    {
        id: 'product-01',
        img: 'img/product-images/img-1.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas Originals Forum Exhibit Mid',
        currentPrice: '12999',
        sale: false,
        newPrice: '12222',
        oldPrice: '15000',
        sizes: [23, 42, 23.5, 44]
    },
    // 2
    {
        id: 'product-02',
        img: 'img/product-images/img-2.png',
        brand: 'Converse',
        name: 'Кеды Converse Chuck Taylor All Star CX',
        currentPrice: '12999',
        sale: true,
        newPrice: '7999',
        oldPrice: '12999',
        sizes: [38, 42]
    },
    // 3
    {
        id: 'product-03',
        img: 'img/product-images/img-3.png',
        brand: 'Asics',
        name: 'Кроссовки Asics GEL-QUANTUM',
        currentPrice: '12999',
        sale: true,
        newPrice: '14999',
        oldPrice: '11999',
        sizes: [38, 42, 42.5, 43, 44]
    },
// 4
    {
        id: 'product-4',
        img: 'img/product-images/img-4.png',
        brand: 'New Balance',
        name: 'Кроссовки New Balance XC-72 Future Legacy',
        currentPrice: '20999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [42.5, 43, 44]
    },
    
    {
        id: 'product-5',
        img: 'img/product-images/img-5.png',
        brand: 'Vans',
        name: 'Кеды Vans OLD SKOOL',
        currentPrice: '7999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-6',
        img: 'img/product-images/img-6.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas SUPERSTAR',
        currentPrice: '15999',
        sale: true,
        newPrice: '10999',
        oldPrice: '12999',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-7',
        img: 'img/product-images/img-7.png',
        brand: 'Converse',
        name: 'Кеды Converse CHUCK 70',
        currentPrice: '9999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-8',
        img: 'img/product-images/img-8.png',
        brand: 'PUMA',
        name: 'Кроссовки PUMA TRC Blaze',
        currentPrice: '12999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-9',
        img: 'img/product-images/img-9.png',
        brand: 'Adidas',
        name: 'Ботинки Adidas SUPERSTAR BOOT',
        currentPrice: '12999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-10',
        img: 'img/product-images/img-10.png',
        brand: 'DR.Martens',
        name: 'Ботинки DR.Martens 1461 - TNG Bathers',
        currentPrice: '23999',
        sale: true,
        newPrice: '21999',
        oldPrice: '23999',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-11',
        img: 'img/product-images/img-11.png',
        brand: 'Saucony',
        name: 'Кроссовки Saucony Jazz 81 NM',
        currentPrice: '13999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-12',
        img: 'img/product-images/img-12.png',
        brand: 'Reebok',
        name: 'Кроссовки Reebok CLUB C 85',
        currentPrice: '11999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-13',
        img: 'img/product-images/img-13.png',
        brand: 'PUMA',
        name: 'Кеды PUMA CA Pro EMBD',
        currentPrice: '12999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-14',
        img: 'img/product-images/img-14.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas OZWEEGO CELOX',
        currentPrice: '13999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-15',
        img: 'img/product-images/img-15.png',
        brand: 'Converse',
        name: 'Кеды Converse CHUCK TAYLOR ALL STAR SPLIT UPPER CANVAS & RIPSTOP',
        currentPrice: '10999',
        sale: true,
        newPrice: '8999',
        oldPrice: '10999',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-16',
        img: 'img/product-images/img-16.png',
        brand: 'PUMA',
        name: 'Кроссовки PUMA x Helly Hansen RS-Connect',
        currentPrice: '13999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-17',
        img: 'img/product-images/img-17.png',
        brand: 'Tommy',
        name: 'Кроссовки Tommy Jeans BASKET MID LEATHER',
        currentPrice: '17999',
        sale: true,
        newPrice: '14999',
        oldPrice: '17999',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-18',
        img: 'img/product-images/img-18.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas FORUM EXHIBIT LOW',
        currentPrice: '11999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-19',
        img: 'img/product-images/img-19.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas STREETBALL II',
        currentPrice: '16999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-20',
        img: 'img/product-images/img-20.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas FORUM LOW',
        currentPrice: '11999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },
    
    {
        id: 'product-21',
        img: 'img/product-images/img-21.png',
        brand: 'Lacoste',
        name: 'Кроссовки Lacoste GAME ADVANCE LUXE',
        currentPrice: '17999',
        sale: true,
        newPrice: '15999',
        oldPrice: '17999',
        sizes: [38, 42, 42.5, 43, 44]
    },

    {
        id: 'product-22',
        img: 'img/product-images/img-22.png',
        brand: 'PUMA',
        name: 'Кроссовки PUMA Slipstream Mid',
        currentPrice: '12999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },

    {
        id: 'product-23',
        img: 'img/product-images/img-23.png',
        brand: 'Vans',
        name: 'Кеды Vans SK8-HI',
        currentPrice: '7999',
        sale: false,
        newPrice: '',
        oldPrice: '',
        sizes: [38, 42, 42.5, 43, 44]
    },

    {
        id: 'product-24',
        img: 'img/product-images/img-24.png',
        brand: 'Adidas',
        name: 'Кроссовки Adidas NITEBALL',
        currentPrice: '15999',
        sale: true,
        newPrice: '13999',
        oldPrice: '15999',
        sizes: [38, 42, 42.5, 43, 44]
    }
];
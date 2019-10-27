'use strict';

const emptyItem = {
    id: 0,
    name: 'Этого жука украли пришельцы',
    price: 0,
    img: 'none',
    imgType: 'png',
};
const goods = [
    {
        id: 1,
        name: 'Больной жук',
        price: 100,
        img: 'item-1',
        imgType: 'jpg',
    },
    {
        id: 2,
        name: 'Мрачный жнец',
        price: 400,
        img: 'item-2',
        imgType: 'jpg',
    },
    {
        id: 3,
        name: 'Соня',
        price: 200,
        img: 'item-3',
        imgType: 'jpg',
    },
    {
        id: 4,
        name: 'Травоед',
        price: 600,
        img: 'item-4',
        imgType: 'jpeg',
    },
    {
        id: 5,
        name: 'Плоскодон',
        price: 500,
        img: 'item-5',
        imgType: 'jpg',
    },
    {
        id: 6,
        name: 'Жалыч',
        price: 200,
        img: 'item-6',
        imgType: 'jpg',
    },
    {
        id: 7,
        name: 'Майский симпотяга',
        price: 1000,
        img: 'item-7',
        imgType: 'jpg',
    },
    {
        id: 8,
        name: 'Сорванец',
        price: 1500,
        img: 'item-8',
        imgType: 'jpg',
    },
];



const renderGoodsItem = (img, imgType, name, price) => {
        return `<div class="catalogue__item">
            <img class="catalogue__img" src="images/${img}.${imgType}" alt="img">
            <p class="catalogue__headline">${name}</p>
            <div class="catalogue__action">
                <p class="catalogue__price">${price} р.</p>
                <button class="catalogue__button">Купить</button>
            </div>
        </div>`
};

const renderGoodsList = (list) => {
    let goodsList = list.map(good => renderGoodsItem(good.img, good.imgType, good.name, good.price));
    document.querySelector('.catalogue').innerHTML = goodsList.join('');
};

const checkPic = () =>  {
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].img === '' || goods[i].img === '') {
            goods[i].img = emptyItem.img;
            goods[i].imgType = emptyItem.imgType;
        }
    }
};
const catalogueGenerate = () => {
    checkPic();
    while (goods.length % 6 !== 0) {
        goods.push(emptyItem);
    }
    renderGoodsList(goods);
};
catalogueGenerate();
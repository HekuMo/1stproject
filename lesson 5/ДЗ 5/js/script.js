
    let menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu-item'),
        title = document.querySelector('.title'),
        adv = document.querySelector('.adv'),
        column = document.querySelectorAll('.column'),
        promptIn = document.querySelector('.prompt');


//menu.appendChild(menuItem[0]);
menu.insertBefore(menuItem[2],menuItem[1]);
document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
title.innerHTML = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv);
promptIn.innerHTML= prompt('Как вы относитесь к Apple');




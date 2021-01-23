import slider from './modules/slider';
import imagesCash from './modules/imagesCash';
import tabs from './modules/tabs';
import modal from './modules/modal';
import phoneMask from './modules/phoneMask';
import timer from './modules/timer';
import arrow from './modules/arrow';
import phoneNavigator from './modules/phoneNavigator';
import convertor from './modules/convertor';
import forms from './modules/forms';
import catalog from './modules/catalog';



window.addEventListener("DOMContentLoaded",()=>{
    
    slider(
        '.slide1__inner', '.slide1__slide', '.slide1__carousel', '.slide1__next-btn-wrapper', '.slide1__prev-btn-wrapper'
    );
    imagesCash(
        '.slide1__hidden-div', ["images/shot1.jpg", "images/shot2.jpg", "images/shot3.jpg", "images/shot4.jpg"]
    );
    tabs(
        ['.tabs__content-electro', '.tabs__menu-list-electro', '.tabs__list-btn-electro', '.tabs__content-img-electro', '.tabs__spot-text-electro'], ['.tabs__content-acoustic', '.tabs__menu-list-acoustic', '.tabs__list-btn-acoustic', '.tabs__content-img-acoustic', '.tabs__spot-text-acoustic'], '.tabs__guitar-form', '.tabs__switcher', '.tabs__switcher-both'
    );
    modal(
        '.header__btnWrapper-btn', '.fixed__basket', '[data-close]', '.modal__wrapper', '.modal__consultation', '.modal__basket', '.modal__thanks', '.modal__error', 'body'
    );
    phoneMask('[type="phone"]');
    timer(
        '2021-04-15T00:00:00', '.discount__timer-numbers-days', '.discount__timer-numbers-hours', '.discount__timer-numbers-minutes', '.discount__timer-numbers-seconds'
    );
    arrow(
        '.fixed__arrow'
    );
    phoneNavigator(
        '.header__spans', '.header__spans-line', '.header__nav', '.header__nav-link'
    );
    convertor('.convertor__usd-input', '.convertor__uah-input');
    forms('[data-formConsult]', '[data-formBasket]', '.modal__thanks', '.modal__error', '.modal__consultation', '.modal__basket', 'body', '.modal__wrapper');
    catalog();


    
});



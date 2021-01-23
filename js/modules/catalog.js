import {getResource} from '../services/services';
import {basketStore} from './basketStore';


function catalog() {
    const tabWrapper = document.querySelector('.catalog__tabs');

    class CatalogTab {
        constructor(img, alt, name, secondname, price, desc, code, parent) {
            this.img = img;
            this.alt = alt;
            this.name = name;
            this.secondname = secondname;
            this.price = price;
            this.desc = desc;
            this.code = code;
            this.parent = parent;
        }
        render() {
            const tab = document.createElement('div');
            tab.classList.add('catalog__tabs-tab');
            tab.classList.add('fadeIn');
            tab.innerHTML = `
                <div class="catalog__tabs-tab-image catalog__tabs-tab-imageMain">
                    <img src=${this.img} alt=${this.alt}>
                    <div class="catalog__tabs-tab-image-basket">
                        <img src="icons/basket.png">
                    </div>
                    <div class="catalog__tabs-tab-image-code">${this.code}</div>
                </div>
                <div class="catalog__tabs-tab-image catalog__tabs-tab-imageDetails">${this.desc}</div>
                <div class="catalog__tabs-tab-desc">
                    <div class="catalog__tabs-tab-desc-header">${this.name}</br>${this.secondname}</div>
                    <div class="catalog__tabs-tab-desc-price">$${this.price}</div>
                    <div class="catalog__tabs-tab-desc-details catalog__tabs-tab-desc-detailsMain fadeIn-one">Подробнее...</div>
                    <div class="catalog__tabs-tab-desc-details catalog__tabs-tab-desc-detailsDetails fadeIn-one">Назад...</div>
                </div>
            `;

            this.parent.append(tab);
        }
    }


    getResource('db.json')
        .then(data => data.catalog)
        .then((data) => {
            data.forEach(({ img, alt, name, secondname, price, desc, code }) => {
                new CatalogTab(img, alt, name, secondname, price, desc, code, tabWrapper).render();
            })
        })
        .then(() => {

            //description and details btn animation

            const tabsImages = document.querySelectorAll(".catalog__tabs-tab-imageMain"),
                tabsDesc = document.querySelectorAll('.catalog__tabs-tab-imageDetails'),
                detailBtns = document.querySelectorAll('.catalog__tabs-tab-desc-detailsMain'),
                backBtns = document.querySelectorAll('.catalog__tabs-tab-desc-detailsDetails');

            function showCatalogImg(i) {
                tabsImages[i].style.display = "none";
                tabsDesc[i].style.display = "block";
                detailBtns[i].style.display = "none";
                backBtns[i].style.display = "block";
            }

            function showCatalogDesc(i) {
                tabsDesc[i].style.display = "none";
                tabsImages[i].style.display = "block";
                backBtns[i].style.display = "none";
                detailBtns[i].style.display = "block";
            }

            tabWrapper.addEventListener('click', (e) => {
                for (let i = 0; i < detailBtns.length; i++) {
                    if (e.target && e.target == detailBtns[i]) {
                        tabsImages[i].classList.remove('rotate3D-in');
                        tabsImages[i].classList.add('rotate3D-out');
                        tabsDesc[i].classList.remove('rotate3D-out');
                        tabsDesc[i].classList.add('rotate3D-in');
                        detailBtns[i].classList.add('fadeOut-one');
                        backBtns[i].classList.remove('fadeOut-one');
                        setTimeout(() => showCatalogImg(i), 600);

                    }
                    if (e.target && e.target == backBtns[i]) {
                        tabsDesc[i].classList.remove('rotate3D-in');
                        tabsDesc[i].classList.add('rotate3D-out');
                        tabsImages[i].classList.remove('rotate3D-out');
                        tabsImages[i].classList.add('rotate3D-in');
                        backBtns[i].classList.add('fadeOut-one');
                        detailBtns[i].classList.remove('fadeOut-one');
                        setTimeout(() => showCatalogDesc(i), 600);

                    }
                }
            });

            //btns actions
            const switcherThreeBtns = document.querySelectorAll('.catalog__switcher-both'),
                switherThreeDivsWithBtns = document.querySelectorAll('.catalog__forms-switcher'),
                catalogFormsTwelveBtns = document.querySelectorAll('.catalog__forms-switcher-btn'),
                catalogSection = document.querySelector('.catalog'),
                catalogTabCode = document.querySelectorAll('.catalog__tabs-tab-image-code'),
                catalogTabs = document.querySelectorAll('.catalog__tabs-tab');


            function showCatalogTwelveBtns(i = 0) {
                switherThreeDivsWithBtns.forEach((item) => {
                    switherThreeDivsWithBtns[i].style.display = "flex";
                });

                switcherThreeBtns[i].classList.remove('catalog__switcher-active-not');
                switcherThreeBtns[i].classList.add('catalog__switcher-active');
            }


            function hideCatalogTwelveBtns() {
                switherThreeDivsWithBtns.forEach((item) => {
                    item.style.display = "none";
                });

                switcherThreeBtns.forEach((item) => {
                    item.classList.remove('catalog__switcher-active');
                    item.classList.add('catalog__switcher-active-not');
                });
            }


            function showCatalogTabs() {
                catalogTabs.forEach((item) => {
                    item.style.display = "block";
                });
            }


            function hideCatalogTabs() {
                catalogTabs.forEach((item) => {
                    item.style.display = "none";
                });
            }

            function twelveBtnsShowActive(i) {
                catalogFormsTwelveBtns[i].classList.remove('catalog__forms-switcher-active-not');
                catalogFormsTwelveBtns[i].classList.add('catalog__forms-switcher-active');
            }


            function twelveBtnshideActive() {
                catalogFormsTwelveBtns.forEach((item) => {
                    item.classList.remove('catalog__forms-switcher-active');
                    item.classList.add('catalog__forms-switcher-active-not');
                });
            }


            function pickRightTab(regex) {
                catalogTabs.forEach((item, i) => {
                    item.style.display = "none";
                    if (regex.test(catalogTabCode[i].innerHTML)) {
                        item.style.display = "block";
                    }
                });
            }


            catalogSection.addEventListener('click', (e) => {
                for (let i = 0; i < switcherThreeBtns.length; i++) {
                    if (e.target && e.target == switcherThreeBtns[i]) {
                        hideCatalogTwelveBtns();
                        showCatalogTwelveBtns(i);

                        tabsDesc.forEach(item => {
                            item.classList.remove('rotate3D-in');
                        });
                        tabsImages.forEach(item => {
                            item.classList.remove('rotate3D-in');
                        })

                        switch (i) {
                            case 0:
                                showCatalogTabs();
                                break;
                            case 1:
                                pickRightTab(/\b2/);

                                twelveBtnshideActive();
                                twelveBtnsShowActive(0);
                                break;
                            case 2:
                                pickRightTab(/\b1/);

                                twelveBtnshideActive();
                                twelveBtnsShowActive(6);
                                break;
                        }
                    }
                }

                for (let i = 0; i < catalogFormsTwelveBtns.length; i++) {
                    if (e.target && e.target == catalogFormsTwelveBtns[i]) {
                        twelveBtnshideActive();
                        twelveBtnsShowActive(i);

                        tabsDesc.forEach(item => {
                            item.classList.remove('rotate3D-in');
                        });
                        tabsImages.forEach(item => {
                            item.classList.remove('rotate3D-in');
                        })

                        switch (i) {
                            case 0:
                                pickRightTab(/\b2/);
                                break;
                            case 1:
                                pickRightTab(/\b21/);
                                break;
                            case 2:
                                pickRightTab(/\b22/);
                                break;
                            case 3:
                                pickRightTab(/\b23/);
                                break;
                            case 4:
                                pickRightTab(/\b24/);
                                break;
                            case 5:
                                pickRightTab(/\b25/);
                                break;
                            case 6:
                                pickRightTab(/\b1/);
                                break;
                            case 7:
                                pickRightTab(/\b11/);
                                break;
                            case 8:
                                pickRightTab(/\b12/);
                                break;
                            case 9:
                                pickRightTab(/\b13/);
                                break;
                            case 10:
                                pickRightTab(/\b14/);
                                break;
                            case 11:
                                pickRightTab(/\b15/);
                                break;
                        }
                    }
                }
            });


            hideCatalogTwelveBtns();
            showCatalogTwelveBtns();
            hideCatalogTabs();
            showCatalogTabs();


            //basket part
            const basketTabBtn = document.querySelectorAll('.catalog__tabs-tab-image-basket img'),
                tabName = document.querySelectorAll('.catalog__tabs-tab-desc-header'),
                tabPrice = document.querySelectorAll('.catalog__tabs-tab-desc-price'),
                basketQuantity = document.querySelector('.fixed__basket-quantity'),
                hiddenInput = document.querySelector('.hidden-input'),
                presentBasketBtn = document.querySelector('.discount__guitar-body-desc-btn'),
                basketBtn = document.querySelector('.fixed__basket'),
                basketForm = document.querySelector('.modal__basket');


            class BasketList {
                constructor(nameItem, priceItem, codeItem, parent) {
                    this.nameItem = nameItem;
                    this.priceItem = priceItem;
                    this.codeItem = codeItem;
                    this.parent = document.querySelector(parent);
                }

                render() {
                    const listItem = document.createElement('div');
                    listItem.classList.add('modal__basket-list-item');
                    listItem.innerHTML = `
                    <div class="modal__basket-list-item-name">${this.nameItem}</div>
                    <div class="modal__basket-list-item-numbers">
                        <div class="modal__basket-list-item-numbers-price">${this.priceItem}</div>
                        <div class="modal__basket-list-item-numbers-code">${this.codeItem}</div>
                    </div>
                    <div class="modal__basket-list-item-bin">
                        <img src="icons/bin.png" alt="delete">
                    </div>
                `;
                    this.parent.prepend(listItem);
                }
            }

            let basketBin, basketListItem;

            tabWrapper.addEventListener('click', (e) => {
                for (let i = 0; i < basketTabBtn.length; i++) {
                    if (e.target && e.target == basketTabBtn[i]) {
                        new BasketList(tabName[i].innerHTML, tabPrice[i].innerHTML, catalogTabCode[i].innerHTML, '.modal__basket-list').render();

                        basketBin = document.querySelectorAll('.modal__basket-list-item-bin img');
                        basketListItem = document.querySelectorAll('.modal__basket-list-item');

                        basketQuantity.innerHTML = +basketQuantity.innerHTML + 1;
                        if (+basketQuantity.innerHTML > 0) {
                            basketBtn.style.display = "block";
                        }

                        basketStore.unshift(tabName[i].innerHTML);
                        basketStore.unshift(tabPrice[i].innerHTML);
                        basketStore.unshift(catalogTabCode[i].innerHTML);
                        hiddenInput.value = basketStore.join('---');
                    }
                }
            });


            presentBasketBtn.addEventListener('click', (e) => {
                new BasketList(tabName[23].innerHTML, '$3,600.00', catalogTabCode[23].innerHTML, '.modal__basket-list').render();

                basketBin = document.querySelectorAll('.modal__basket-list-item-bin img');
                basketListItem = document.querySelectorAll('.modal__basket-list-item');

                basketQuantity.innerHTML = +basketQuantity.innerHTML + 1;
                if (+basketQuantity.innerHTML > 0) {
                    basketBtn.style.display = "block";
                }

                basketStore.unshift(tabName[23].innerHTML);
                basketStore.unshift('$3,600.00');
                basketStore.unshift(catalogTabCode[23].innerHTML);
                hiddenInput.value = basketStore.join('---');
            });


            basketForm.addEventListener('click', (e) => {
                for (let i = 0; i < basketBin.length; i++) {
                    if (e.target && e.target == basketBin[i]) {
                        basketListItem[i].remove();

                        basketQuantity.innerHTML = +basketQuantity.innerHTML - 1;
                        if (+basketQuantity.innerHTML <= 0) {
                            basketBtn.style.display = "none";
                        }

                        const foundName = basketBin[i].parentElement.previousElementSibling.previousElementSibling.innerHTML,
                            foundPrice = basketBin[i].parentElement.previousElementSibling.firstElementChild.innerHTML,
                            foundCode = basketBin[i].parentElement.previousElementSibling.lastElementChild.innerHTML;

                        basketStore.splice(basketStore.indexOf(foundName), 1);
                        basketStore.splice(basketStore.indexOf(foundPrice), 1);
                        basketStore.splice(basketStore.indexOf(foundCode), 1);

                        hiddenInput.value = basketStore.join('---');
                    }
                }
            })
        });

};

export default catalog;
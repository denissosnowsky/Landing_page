/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/arrow.js":
/*!*****************************!*\
  !*** ./js/modules/arrow.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function arrow(fixedArrowElement){

    const fixedArrow = document.querySelector(fixedArrowElement);

    function hideArrow(){
        fixedArrow.style.display = 'none';
    }

    window.addEventListener('scroll', ()=>{
        if(document.documentElement.scrollTop > 1000){
            fixedArrow.classList.remove('fadeOut');
            fixedArrow.style.display = 'block';
        } else {
            fixedArrow.classList.add('fadeOut');
            setTimeout(()=>hideArrow(), 600)
        }
    })

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrow);

/***/ }),

/***/ "./js/modules/basketStore.js":
/*!***********************************!*\
  !*** ./js/modules/basketStore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketStore": () => /* binding */ basketStore
/* harmony export */ });
let basketStore = []; // тут зберігаються обрані в коризну товари




/***/ }),

/***/ "./js/modules/catalog.js":
/*!*******************************!*\
  !*** ./js/modules/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
/* harmony import */ var _basketStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basketStore */ "./js/modules/basketStore.js");




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


    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('db.json')
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

                        _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.unshift(tabName[i].innerHTML);
                        _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.unshift(tabPrice[i].innerHTML);
                        _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.unshift(catalogTabCode[i].innerHTML);
                        hiddenInput.value = _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.join('---');
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

                _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.unshift(tabName[23].innerHTML);
                _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.unshift('$3,600.00');
                _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.unshift(catalogTabCode[23].innerHTML);
                hiddenInput.value = _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.join('---');
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

                        _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.splice(_basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.indexOf(foundName), 1);
                        _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.splice(_basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.indexOf(foundPrice), 1);
                        _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.splice(_basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.indexOf(foundCode), 1);

                        hiddenInput.value = _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.join('---');
                    }
                }
            })
        });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);

/***/ }),

/***/ "./js/modules/convertor.js":
/*!*********************************!*\
  !*** ./js/modules/convertor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function convertor(usdInputElement, uahInputElement) {

    const usdInput = document.querySelector(usdInputElement),
        uahInput = document.querySelector(uahInputElement);


    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(data => data[0].sale)
        .then(data => {
            usdInput.addEventListener('input', () => {
                if (!isNaN(usdInput.value)) {
                    uahInput.value = (usdInput.value * data).toFixed(2);
                } else {
                    uahInput.value = "Введите число";
                }
                if (usdInput.value == "") {
                    uahInput.value = "";
                }
            })
        });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertor);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
/* harmony import */ var _basketStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basketStore */ "./js/modules/basketStore.js");



function forms(consultFormsElement, basketFormsElement, thanksFormElement, errorFormElement, consultFormElement, basketFormElement, bodyElementElement, blackWallElement) {
    const consultForms = document.querySelectorAll(consultFormsElement),
        basketForms = document.querySelector(basketFormsElement),
        thanksForm = document.querySelector(thanksFormElement),
        errorForm = document.querySelector(errorFormElement),
        consultForm = document.querySelector(consultFormElement),
        basketForm = document.querySelector(basketFormElement),
        bodyElement = document.querySelector(bodyElementElement),
        blackWall = document.querySelector(blackWallElement);

    function showThanksForm() {
        bodyElement.style.overflow = "hidden";
        blackWall.style.display = 'block';
        thanksForm.style.display = 'block';
    }
    
    function showErrorForm() {
        bodyElement.style.overflow = "hidden";
        blackWall.style.display = 'block';
        errorForm.style.display = 'block';
    }

    function hideForms() {
        blackWall.style.display = 'none';
        consultForm.style.display = 'none';
        basketForm.style.display = 'none';
        thanksForm.style.display = 'none';
        errorForm.style.display = 'none';
        bodyElement.style.overflow = "";
    }




    consultForms.forEach((item) => {
        sendData(item, 'mailer/smart.php');
    });

    sendData(basketForms, 'mailer/smartSecond.php');
    
    function sendData(form, url) {
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let spinner = document.createElement('img');
            spinner.src = 'icons/spinner.svg';
            spinner.style.cssText = "display: block; margin: 0 auto;";
            form.insertAdjacentElement('afterend', spinner);

            const formData = new FormData(form);

            
            (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)(url, formData)
                .then(data => {
                    spinner.remove();
                    hideForms();
                    showThanksForm();
                    setTimeout(hideForms, 2000);
                    
                })
                .catch(() => {
                    spinner.remove();
                    hideForms();
                    showErrorForm();
                    setTimeout(hideForms, 2000);
                }).finally(() => {
                    form.reset();
                    if (form == basketForms) {
                        
                        document.querySelector('.hidden-input').value = _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.splice(0, _basketStore__WEBPACK_IMPORTED_MODULE_1__.basketStore.length);
                        document.querySelector('.fixed__basket-quantity').innerHTML = 0;
                        document.querySelector('.fixed__basket').style.display = "none";
                        document.querySelectorAll('.modal__basket-list-item').forEach(item => item.remove());
                    }

                });
        })
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/imagesCash.js":
/*!**********************************!*\
  !*** ./js/modules/imagesCash.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function imagesCash(hiddenDivElement, imageArrElement){

    const preloadImages = function(array){
        let list = [];
        for (let i = 0; i < array.length; i++) {
            let img = new Image();
            list.push(img);
            img.src = array[i];
        }  
        return list;
    }

    function preloadImg(hiddenDivElement, imageArrElement){

        let picArr = preloadImages(imageArrElement);

        const hiddenDiv = document.querySelector(hiddenDivElement);
        

        hiddenDiv.style.cssText="position:absolute; top:0%; z-index: -5; overflow:hidden;"; //ширина і висота вказані в стилях slide1

        picArr.forEach((item,i)=>{
            let hide = document.createElement('div');
            hide.classList.add('slide1__hidden-div-preload');
            
            hide.append(item);
            item.style.objectFit = "cover";
            hide.style.cssText = "position:absolute;";
            
            hiddenDiv.append(hide);
        });
    }
    setTimeout(()=>preloadImg(hiddenDivElement, imageArrElement), 500);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imagesCash);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function modal(consultBtnElement, basketBtnElement, closeBtnElement, blackWallElement, consultFormElement, basketFormElement, thanksFormElement, errorFormElement, bodyElementElement){


    const consultBtn = document.querySelector(consultBtnElement),
          basketBtn = document.querySelector(basketBtnElement),
          closeBtn = document.querySelectorAll(closeBtnElement),
          blackWall = document.querySelector(blackWallElement),
          consultForm = document.querySelector(consultFormElement),
          basketForm = document.querySelector(basketFormElement),
          thanksForm = document.querySelector(thanksFormElement),
          errorForm = document.querySelector(errorFormElement),
          bodyElement = document.querySelector(bodyElementElement);
    


    function showConsultForm(){
        bodyElement.style.overflow = "hidden";
        blackWall.style.display = 'block';
        consultForm.style.display = 'block';
    }

    function hideForms(){
        blackWall.style.display = 'none';
        consultForm.style.display = 'none';
        basketForm.style.display = 'none';
        thanksForm.style.display = 'none';
        errorForm.style.display = 'none';
        bodyElement.style.overflow = "";
    }
        
    function showBasketForm(){
        bodyElement.style.overflow = "hidden";
        blackWall.style.display = 'block';
        basketForm.style.display = 'block';
    }

    consultBtn.addEventListener('click', ()=>{
        showConsultForm();
    });

    basketBtn.addEventListener('click', ()=>{
        showBasketForm();
    });

    closeBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            hideForms();
        });
    });

    blackWall.addEventListener('click', (e)=>{
        if(e.target == blackWall){
            hideForms();
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(consultForm.style.display=='block' || basketForm.style.display=='block' || thanksForm.style.display=='block' || errorForm.style.display=='block'){
            if(e.code == "Escape"){
                hideForms();
            }
        }    
    });

    function showConsultFormByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight == document.documentElement.scrollHeight){
            showConsultForm();
            removeEventListener('scroll', showConsultFormByScroll);
        }
    }

    window.addEventListener('scroll', showConsultFormByScroll);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/phoneMask.js":
/*!*********************************!*\
  !*** ./js/modules/phoneMask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function phoneMask(phoneInputElement) {

    const telInput = document.querySelectorAll(phoneInputElement);

    telInput.forEach((item) => {

        function setCursor(pos) { item.setSelectionRange(pos, pos) };

        item.addEventListener('focus', () => {
            item.value = "+38(___)___-__-__";
            setTimeout(() => setCursor(item.value.indexOf('_')));

        })

        if (!isNaN(item.value[item.value.length - 1])) {
            setCursor(item.value[item.value.length - 1]);
        }

        item.addEventListener('keydown', (e) => {

            if (e.keyCode == 46 || e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 40) {
                e.preventDefault();
            }

            if (!isNaN(e.key) && !(e.keyCode == 32)) {
                let indexValue = item.value.indexOf('_');
                const arr = item.value.split('');
                arr[indexValue] = e.key;
                const str = arr.join('');
                item.value = str;

                if (isNaN(item.value[item.value.length - 1])) {
                    setCursor(item.value.lastIndexOf(e.key) + 1);
                }
            }

            if (e.keyCode == 8) {
                e.preventDefault();
                let match = /(\d{1,4}.?)+/.exec(item.value);
                const arr = item.value.split('');
                const element = match[1];
                let lastNumber;

                if (isNaN(element[element.length - 1])) {
                    lastNumber = element[element.length - 2];
                } else {
                    lastNumber = element[element.length - 1];
                }
                const lastIndex = arr.lastIndexOf(lastNumber);
                if (lastIndex != 1 && lastIndex != 2) {
                    arr[lastIndex] = '_';
                    const str = arr.join('');
                    item.value = str;
                }
                if (lastIndex == 2) {
                    setCursor(lastIndex + 2);
                } else {
                    setCursor(lastIndex);
                }
            }

        })
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneMask);

/***/ }),

/***/ "./js/modules/phoneNavigator.js":
/*!**************************************!*\
  !*** ./js/modules/phoneNavigator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function phoneNavigator(burgerElement, burgerlinesElements, navigatorElement, navigatorLinksElements) {

    const burger = document.querySelector(burgerElement),
        burgerlines = document.querySelectorAll(burgerlinesElements),
        navigator = document.querySelector(navigatorElement),
        navigatorLinks = document.querySelectorAll(navigatorLinksElements);

    burger.addEventListener('click', () => {
        navigator.classList.toggle('header__nav-active');
        burgerlines.forEach(item => {
            item.classList.toggle('header__spans-line-active');
        })
    });

    navigatorLinks.forEach(item => {
        item.addEventListener('click', () => {
            navigator.classList.toggle('header__nav-active');
            burgerlines.forEach(item => {
                item.classList.toggle('header__spans-line-active');
            })
        });
    })

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneNavigator);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function slider(innerElement, slideElement, carouselElement, nextBtnElement, prevBtnElement) {

    //slider1
    const inner = document.querySelector(innerElement),
        slide = document.querySelectorAll(slideElement),
        carousel = document.querySelector(carouselElement),
        next = document.querySelector(nextBtnElement),
        prev = document.querySelector(prevBtnElement);

    let offset = 0,
        slideIndex = 1,
        slideArr = [];


    for (let i = 0; i < slide.length; i++) {
        let el = document.createElement('li');
        el.setAttribute('data-slide', i + 1);
        el.style.cssText = `
            height: 5px;
            width: 50px;
            background-color: #fff;
            cursor: pointer;
            margin-left: 5px;
            margin-right: 5px;
            opacity: .3;
            flex-shrink:1;
            flex-grow:0;
            transition: opacity 0.6s ease 0s
        `;
        if (i == 0) el.style.opacity = 1;
        carousel.append(el);
        slideArr.push(el);
    }


    function nextBtn() {
        if (offset == (slide.length - 1) * (100 / slide.length)) {
            offset = 0;
        } else {
            offset += (100 / slide.length);
        }

        inner.style.transform = `translateX(-${offset}%)`;

        if (slideIndex == slide.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        slideArr.forEach((item, i) => {
            item.style.opacity = '.3';
            if (i == slideIndex - 1) {
                item.style.opacity = '1';
            }
        });
    }

    next.addEventListener('click', nextBtn);


    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (slide.length - 1) * (100 / slide.length);
        } else {
            offset -= (100 / slide.length);
        }

        inner.style.transform = `translateX(-${offset}%)`;

        if (slideIndex == 1) {
            slideIndex = slide.length;
        } else {
            slideIndex--;
        }

        slideArr.forEach((item, i) => {
            item.style.opacity = '.3';
            if (i == slideIndex - 1) {
                item.style.opacity = '1';
            }
        });

    });


    slideArr.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            slideIndex = e.target.getAttribute('data-slide');

            offset = (100 / slide.length) * (slideIndex - 1);
            inner.style.transform = `translateX(-${offset}%)`;

            slideArr.forEach((item, i) => {
                item.style.opacity = '.3';
                if (i == slideIndex - 1) {
                    item.style.opacity = '1';
                }
            });

        });
    });

    setInterval(nextBtn, 4000);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function tabs(formsArrElementOne, formsArrElementTwo, guitarFormElements, switcherFormElement, switcherBtnsFormElements){

    //Guitar Forms part
    class GuitarType{
        constructor(guitarContent, guitarMenuList, guitarListBtns, guitarContentImg, guitarContentText){
            this.guitarContent = document.querySelectorAll(guitarContent);
            this.guitarMenuList = document.querySelector(guitarMenuList);
            this.guitarListBtns = document.querySelectorAll(guitarListBtns);
            this.guitarContentImg = document.querySelectorAll(guitarContentImg);
            this.guitarContentText = document.querySelectorAll(guitarContentText);
        }
        
        showMenuBtn(i=0){        
            this.guitarListBtns[i].classList.add('tabs__guitar-form-menu-list-active');
            this.guitarListBtns[i].classList.remove('tabs__guitar-form-menu-list-active-not');
        }
        showContent(i=0){
            this.guitarContent[i].style.display = "block";
        }
        hideImg(){
            this.guitarContent.forEach((item)=>{
                item.style.display = "none";
            });
        }
        hideContent(i){
            this.guitarContentImg.forEach((item)=>{
                item.classList.add('fadeOut');
            });
            this.guitarContentImg[i].classList.remove('fadeOut');
    
            this.guitarContentText.forEach((item)=>{
                item.classList.add('fadeOutDelay');
            });
            this.guitarContentText[i].classList.remove('fadeOutDelay');
    
            setTimeout(()=>this.hideImg(), 600);
    
            this.guitarListBtns.forEach((item)=>{
                item.classList.remove('tabs__guitar-form-menu-list-active');
                item.classList.add('tabs__guitar-form-menu-list-active-not');
            });
        }
        typeExecuter(){
            this.guitarMenuList.addEventListener('click', (e)=>{
                for(let i=0; i<this.guitarListBtns.length;i++){
                    if(e.target && e.target==this.guitarListBtns[i]){
                        this.hideContent(i);
                        this.showMenuBtn(i);
                        setTimeout(()=>this.showContent(i), 600);
                    }
                }
            });
        
            this.hideImg();
            this.showMenuBtn();
            this.showContent();
        }
    }

    new GuitarType(...formsArrElementOne).typeExecuter();
    new GuitarType(...formsArrElementTwo).typeExecuter();

    //Guitar Types part

    const guitarForm = document.querySelectorAll(guitarFormElements),
          switcher = document.querySelector(switcherFormElement),
          switcherBtns = document.querySelectorAll(switcherBtnsFormElements);


    function showForm(i=0){
        guitarForm[i].style.display = "grid";
    }


    function showFormBtns(i=0){
        switcherBtns[i].classList.remove('tabs__switcher-active-not');
        switcherBtns[i].classList.add('tabs__switcher-active');
    }
    

    function hideForm(){
        guitarForm.forEach((item)=>{
            item.style.display = "none";
        });
    }


    function hideFormContent(i){
        guitarForm.forEach((item)=>{
            item.classList.add('fadeOut');
        });
        guitarForm[i].classList.remove('fadeOut');

        setTimeout(()=>hideForm(), 600);

        switcherBtns.forEach((item)=>{
            item.classList.remove('tabs__switcher-active');
            item.classList.add('tabs__switcher-active-not');
        });
    }


    switcher.addEventListener('click', (e)=>{
        for(let i=0; i<switcherBtns.length;i++){
            if(e.target && e.target==switcherBtns[i]){
                hideFormContent(i);
                showFormBtns(i);
                setTimeout(()=>showForm(i), 600);
            }
        }
    });

    hideForm();
    showForm();
    showFormBtns();
    

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function timer(deadline, daysElement, hoursElement, minutesElement, secondsElement){

    function counter(deadline){
        const gen = Date.parse(deadline) - Date.parse(new Date()),
              days = Math.floor(gen/(1000*60*60*24)),
              hours = Math.floor(gen/(1000*60*60)%24),
              minutes = Math.floor((gen/(1000*60))%60),
              seconds = Math.floor((gen/(1000))%60);
            
        return {
            'total': gen,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function zeroNumber(number){
        if(number<10){
            return number=`0${number}`
        } else{
            return number=number;
        }
    }

    function startTimer(deadline, daysElement, hoursElement, minutesElement, secondsElement){
        const daysD = document.querySelector(daysElement),
              hoursD = document.querySelector(hoursElement),
              minutesD = document.querySelector(minutesElement),
              secondsD = document.querySelector(secondsElement);

        const obj = counter(deadline);

        daysD.innerHTML = zeroNumber(obj.days);
        hoursD.innerHTML = zeroNumber(obj.hours);
        minutesD.innerHTML = zeroNumber(obj.minutes);
        secondsD.innerHTML = zeroNumber(obj.seconds);

        if(obj.total<=0){
            clearInterval(launcher);
        }
    }
    const launcher = setInterval(()=>startTimer(deadline, daysElement, hoursElement, minutesElement, secondsElement), 1000);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_imagesCash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/imagesCash */ "./js/modules/imagesCash.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/phoneMask */ "./js/modules/phoneMask.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_arrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/arrow */ "./js/modules/arrow.js");
/* harmony import */ var _modules_phoneNavigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/phoneNavigator */ "./js/modules/phoneNavigator.js");
/* harmony import */ var _modules_convertor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/convertor */ "./js/modules/convertor.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/catalog */ "./js/modules/catalog.js");














window.addEventListener("DOMContentLoaded",()=>{
    
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__.default)(
        '.slide1__inner', '.slide1__slide', '.slide1__carousel', '.slide1__next-btn-wrapper', '.slide1__prev-btn-wrapper'
    );
    (0,_modules_imagesCash__WEBPACK_IMPORTED_MODULE_1__.default)(
        '.slide1__hidden-div', ["images/shot1.jpg", "images/shot2.jpg", "images/shot3.jpg", "images/shot4.jpg"]
    );
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__.default)(
        ['.tabs__content-electro', '.tabs__menu-list-electro', '.tabs__list-btn-electro', '.tabs__content-img-electro', '.tabs__spot-text-electro'], ['.tabs__content-acoustic', '.tabs__menu-list-acoustic', '.tabs__list-btn-acoustic', '.tabs__content-img-acoustic', '.tabs__spot-text-acoustic'], '.tabs__guitar-form', '.tabs__switcher', '.tabs__switcher-both'
    );
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.default)(
        '.header__btnWrapper-btn', '.fixed__basket', '[data-close]', '.modal__wrapper', '.modal__consultation', '.modal__basket', '.modal__thanks', '.modal__error', 'body'
    );
    (0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_4__.default)('[type="phone"]');
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__.default)(
        '2021-04-15T00:00:00', '.discount__timer-numbers-days', '.discount__timer-numbers-hours', '.discount__timer-numbers-minutes', '.discount__timer-numbers-seconds'
    );
    (0,_modules_arrow__WEBPACK_IMPORTED_MODULE_6__.default)(
        '.fixed__arrow'
    );
    (0,_modules_phoneNavigator__WEBPACK_IMPORTED_MODULE_7__.default)(
        '.header__spans', '.header__spans-line', '.header__nav', '.header__nav-link'
    );
    (0,_modules_convertor__WEBPACK_IMPORTED_MODULE_8__.default)('.convertor__usd-input', '.convertor__uah-input');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_9__.default)('[data-formConsult]', '[data-formBasket]', '.modal__thanks', '.modal__error', '.modal__consultation', '.modal__basket', 'body', '.modal__wrapper');
    (0,_modules_catalog__WEBPACK_IMPORTED_MODULE_10__.default)();


    
});




/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => /* binding */ getResource,
/* harmony export */   "postData": () => /* binding */ postData
/* harmony export */ });
const getResource = async (url)=>{
    const result =  await fetch(url);

    if(!result.ok){
        throw new Error(`Fetch failed ${url}, status: ${result.status}`);
    }

    return await result.json();
}


const postData = async (url, data)=>{
    const res = await fetch(url, {
        method: 'POST',
        body:data
    });
    return await res; 
};





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map
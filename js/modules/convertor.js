import {getResource} from '../services/services';

function convertor(usdInputElement, uahInputElement) {

    const usdInput = document.querySelector(usdInputElement),
        uahInput = document.querySelector(uahInputElement);


    getResource('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
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

export default convertor;
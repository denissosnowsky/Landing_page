import {postData} from '../services/services';
import {basketStore} from './basketStore';

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

            
            postData(url, formData)
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
                        
                        document.querySelector('.hidden-input').value = basketStore.splice(0, basketStore.length);
                        document.querySelector('.fixed__basket-quantity').innerHTML = 0;
                        document.querySelector('.fixed__basket').style.display = "none";
                        document.querySelectorAll('.modal__basket-list-item').forEach(item => item.remove());
                    }

                });
        })
    }
};

export default forms;
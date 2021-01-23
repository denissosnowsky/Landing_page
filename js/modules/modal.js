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

export default modal;
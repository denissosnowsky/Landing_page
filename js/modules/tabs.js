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

export default tabs;
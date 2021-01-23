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

export default imagesCash;
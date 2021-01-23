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

export default arrow;
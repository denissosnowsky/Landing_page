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

export default slider;
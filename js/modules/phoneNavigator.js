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

export default phoneNavigator;
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

export default phoneMask;
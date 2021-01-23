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

export default timer;
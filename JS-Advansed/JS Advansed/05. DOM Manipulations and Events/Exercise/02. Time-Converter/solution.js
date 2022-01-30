function attachEventsListeners() {
    let allBtnElements = document.querySelectorAll('input[type="button"]');
    let units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }
    let onClick = (e) => {
        let input = e.target.parentElement.querySelector('input[type="text"]');
        let currentUnit = input.id;
        let inDays = Number(input.value) / units[currentUnit]
        Object.keys(units).forEach(unit => {
           document.getElementById(unit).value = inDays * units[unit];
        });

    }
    for (const btn of allBtnElements) {
        btn.addEventListener('click', onClick);
    }

}
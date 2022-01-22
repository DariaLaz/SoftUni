function colorize() {
    let elToColorize = document.querySelectorAll('tr:nth-of-type(2n)');
    let elemArr = Array.from(elToColorize);
    for (const el of elemArr) {
        el.style.backgroundColor = 'Teal';
    }
}
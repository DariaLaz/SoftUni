function sumTable() {
    let priceElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let arrOfPrices = Array.from(priceElements);
    let sum = arrOfPrices.reduce((s, el) => {
                 let currentValue = Number(el.textContent) || 0;
                 return s + currentValue;
             }, 0);
    let res = document.getElementById('sum');
    res.textContent = sum;
}

function calculator() {
    let num1, num2, result
    return {
        init(n1, n2, res) {
            num1 = (document.querySelector(n1));
            num2 = (document.querySelector(n2));
            result = document.querySelector(res);
        },
        add() {
            result.value = Number(num1.value) + Number(num2.value);
        },
        subtract() {
            result.value = Number(num1.value) - Number(num2.value);
        }
    }
}
const calculate  = calculator()
calculate.init('#num1', '#num2', '#result'); 
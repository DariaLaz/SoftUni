function focused() {
    let inputElements = document.getElementsByTagName('input');
    const focusHandler = (e) => {
        e.target.parentNode.className = 'focused';
    };
    const blurHandler = (e) => {
        e.target.parentNode.className = '';
    };
    for (const input of inputElements) {
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }
}
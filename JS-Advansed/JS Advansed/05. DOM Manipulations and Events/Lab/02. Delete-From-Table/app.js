function deleteByEmail() {
    let emailGivenElement = document.querySelector('input[name="email"]');
    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let emailElementsAsArr = Array.from(emailElements);
    let targetElement = emailElementsAsArr.find(x => x.textContent == emailGivenElement.value)

    if (targetElement) {
        targetElement.parentElement.remove();
        document.querySelector("#result").textContent = 'Deleted.';
    } else {
        document.querySelector("#result").textContent = 'Not found.';
    }
}
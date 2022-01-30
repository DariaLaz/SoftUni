function addItem() {
    let dropDownElements = document.querySelector('#menu');
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');
    let newOp = document.createElement('option');
    newOp.value = value.value;
    newOp.textContent = text.value;
    dropDownElements.appendChild(newOp);
    text.value = '';
    value.value = ''
}
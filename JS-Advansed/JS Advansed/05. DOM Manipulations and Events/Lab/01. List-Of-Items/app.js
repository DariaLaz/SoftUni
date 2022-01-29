function addItem() {
    let textElement = document.querySelector('#newItemText');
    let itemsElement = document.querySelector('#items');
    
    let liElement = document.createElement('li');
    liElement.textContent = textElement.value;

    itemsElement.appendChild(liElement);
}
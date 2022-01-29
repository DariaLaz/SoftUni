function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let itemsElement = document.querySelector('#items');
    
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    let deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#'
    deleteElement.addEventListener('click', (e) =>{
        e.currentTarget.parentElement.remove();
    })

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);
}
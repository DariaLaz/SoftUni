function attachEvents() {
    let loadBtn = document.querySelector('#btnLoad');
    let createBtn = document.querySelector('#btnCreate');

    loadBtn.addEventListener('click', load);
    createBtn.addEventListener('click', create)
}

async function load(){
    let url = 'http://localhost:3030/jsonstore/phonebook'
    let phoneBookList = document.querySelector('#phonebook');

    phoneBookList.innerHTML = '';

    let response = await fetch(url);
    let result = await response.json();
    
    for (const record in result) {
        let listItem = document.createElement('li');
        listItem.textContent = `${result[record].person}: ${result[record].phone}`;
        listItem.id = record;

        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', delFunc);
        listItem.appendChild(delBtn);

        phoneBookList.appendChild(listItem);
    }
}
async function delFunc(e){
    e.preventDefault();
    let url = `http://localhost:3030/jsonstore/phonebook/${e.currentTarget.parentElement.id}`;
    await fetch(url, {
        method: 'delete',
        headers:{
            'Content-type': 'application/json'
        }
    })
    load();
}
async function create(e){
    e.preventDefault();

    let personEl = document.querySelector('#person');
    let phoneEl = document.querySelector('#phone');

    let newPerson = {
        person: personEl.value,
        phone: phoneEl.value,
    }

    let url = 'http://localhost:3030/jsonstore/phonebook'

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson)
    })
    load();
    personEl.value = '';
    phoneEl.value = '';
}
attachEvents();
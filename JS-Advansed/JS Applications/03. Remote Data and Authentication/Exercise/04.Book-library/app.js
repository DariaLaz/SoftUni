window.onload = attachEvents;

function attachEvents() {
    let loadBtn = document.querySelector('#loadBooks');
    loadBtn.addEventListener('click', load)
    let submitBtn = document.querySelector('form button');
    submitBtn.addEventListener('click', saveOrSubmit)
    let currentId = '';
    let url = 'http://localhost:3030/jsonstore/collections/books';


    async function load(){
        let tableBodyResultElement = document.querySelector('tbody');
    
        tableBodyResultElement.innerHTML = '';
        let response = await fetch(url);
        let result = await response.json();
        
        for (const record in result) {
            let tableRow = document.createElement('tr');
    
            let title = document.createElement('td');
            title.textContent = result[record].title;
            tableRow.appendChild(title);
    
            let author = document.createElement('td');
            author.textContent = result[record].author;
            tableRow.appendChild(author);
    
            let action = document.createElement('td');
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', edit)
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteFunc)
            action.appendChild(editBtn);
            action.appendChild(deleteBtn);
            tableRow.appendChild(action);
            tableRow.id = record;
            tableBodyResultElement.appendChild(tableRow);
            
        }
    }
    
    async function saveOrSubmit(e){
        e.preventDefault();
    
        let form = document.querySelector('form');
        let formData = new FormData(form);
    
        let title = formData.get('title');
        let author = formData.get('author');
    
        if(e.currentTarget.textContent == "Save"){
            e.currentTarget.textContent = "Submit";
            document.querySelector('form h3').textContent = "FORM"
            let editedBook = {
                author,
                title            
            }
            await fetch(`${url}/${currentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedBook)
            })
        }
        else{
            let newBook = {
                author,
                title            
            }
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBook)
            })
        }
        load();
    }
    
    async function edit(e){
        submitBtn.textContent = 'Save'
        document.querySelector('form h3').textContent = "Edit FORM"
        currentId =  e.currentTarget.parentElement.parentElement.id;
    }

    async function deleteFunc(e){
        currentId =  e.currentTarget.parentElement.parentElement.id;
        await fetch(`${url}/${currentId}`, {
            method: 'DELETE'
        })
        load();
    }
}


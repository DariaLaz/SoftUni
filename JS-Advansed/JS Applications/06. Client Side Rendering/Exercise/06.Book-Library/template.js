import {html} from '../node_modules/lit-html/lit-html.js';

export let template = (books) => html`
    ${Object.entries(books).map(([k, v]) => html`
    <tr id="${k}">
        <td>${v.title}</td>
        <td>${v.author}</td>
        <td>
            <button @click=${edit}>Edit</button>
            <button @click=${del}>Delete</button>
        </td>
    </tr>`)}`;

async function edit(e){
    let currentTitle = e.currentTarget.parentElement.parentElement.children[0].textContent;
    let currentAuthor = e.currentTarget.parentElement.parentElement.children[1].textContent;
    let currentId = e.currentTarget.parentElement.parentElement.id;
   
    let addForm = document.querySelector('#add-form')
    addForm.classList.add('hide');
    let editForm = document.querySelector('#edit-form');
    editForm.classList.remove('hide')

    editForm.querySelectorAll('input')[0].value = currentTitle;
    editForm.querySelectorAll('input')[1].value = currentAuthor;

    editForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let title = editForm.querySelectorAll('input')[0].value;
        let author = editForm.querySelectorAll('input')[1].value;
        e.preventDefault();
        await fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author })
        })
        addForm.classList.remove('hide');
        editForm.classList.add('hide')
    })
}
async function del(e){
    let currentId = e.currentTarget.parentElement.parentElement.id;

    await fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}`, {
        method: 'DELETE'
    })
}
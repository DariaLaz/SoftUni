import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'
import { deleteById, getFurnitureDetailsById } from '../api/data.js';

let userId = null;
if(localStorage.user){
    userId = JSON.parse(localStorage.user)._id
}

const detailsTemplate = (furniture, id) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${furniture.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            <p>Material: <span>${furniture.material}</span></p>
            <div id="${furniture._id}" class='${furniture._ownerId != userId ? 'hide' : ''}'>
                <a href='/edit/${id}' class="btn btn-info">Edit</a>
                <a href="#" @click=${e => del(e)} class="btn btn-red">Delete</a>
            </div>
        </div>
    </div>
`;
async function del(e){
    e.preventDefault();
    let id = e.currentTarget.parentElement.id;
    await deleteById(id);
    page.redirect('/dashboard')
    console.log(id)
}


export async function detailsView(id){
    let currentFurn = await getFurnitureDetailsById(id);
    let container = document.querySelector('.container')
    render(detailsTemplate(currentFurn, id), container);
    console.log(userId)
    console.log(currentFurn._id)
}
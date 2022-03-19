import { render, html } from '../node_modules/lit-html/lit-html.js';
import { getMyFurnitures } from '../api/data.js';
import { showFurnituresTemplate } from './showFurnitures.js';

let id = null;

if(localStorage.user){
    id = JSON.parse(localStorage.user)._id;
}

let myFurnituresPromise = await getMyFurnitures(id)
let myFurnitures = Object.entries(myFurnituresPromise).map(([k, v]) => (v));

const baseTemplate = () => html`
    <div class="container">
        <div class="row space-top">
        <div class="col-md-12">
        <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
        </div>
        </div>
    <div class="row space-top" id="info">  
    </div>`;

export async function profileView(){
    let container = document.querySelector('.container')
    render(baseTemplate(), container);
    let profile = document.querySelector('#info')
    render(showFurnituresTemplate(myFurnitures), profile);
}
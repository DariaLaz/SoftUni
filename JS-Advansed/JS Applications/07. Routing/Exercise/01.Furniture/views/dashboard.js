import { render, html } from '../node_modules/lit-html/lit-html.js';
import { getAllFurniture } from '../api/data.js'
import { manageNav } from '../src/manageNav.js';
import { showFurnituresTemplate } from './showFurnitures.js';


const baseTemplate = () => html`
<div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top" id="info">  
    </div>`

export async function dashboardView(){
    let allFurnitures = await getAllFurniture();
    let furnituresInfo = Object.entries(allFurnitures).map(([k, v]) => (v));
    let container = document.querySelector('.container')
    render(baseTemplate(), container);
    let dashboard = document.querySelector('#info')
    render(showFurnituresTemplate(furnituresInfo), dashboard);
    manageNav();
}
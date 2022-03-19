import { render, html } from '../node_modules/lit-html/lit-html.js';
import { detailsView } from './details.js';

export const showFurnituresTemplate = (furnitures) => html`
    ${furnitures.map(f => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                    <img src="${f.img}" />
                    <p>${f.make}</p>
                    <footer>
                        <p>Price: <span>${f.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details" class="btn btn-info" id="${f._id}" @click=${(e) => detailsShowHandler(e)}>Details</a>
                    </div>
            </div>
        </div>
    </div>`)}`

function detailsShowHandler(e){
    e.preventDefault();
    let  id = e.currentTarget.id;
    detailsView(id);
}
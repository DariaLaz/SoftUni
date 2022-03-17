import {html} from '../node_modules/lit-html/lit-html.js';

export let template = (data) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${details} class="detailsBtn">Details</button>
        <div class="details" id=${data.details}>
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>
`

function details(e){
    let detailSect = e.currentTarget.parentElement.querySelector('.details');

    if (detailSect.style.display == 'block') {
        detailSect.style.display = 'none';
    } else {
        detailSect.style.display = 'block';
    }
}
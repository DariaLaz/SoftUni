import {html} from '../node_modules/lit-html/lit-html.js';

export let template = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${showStatus} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="100">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`

function showStatus(e){
    let statusDiv = e.currentTarget.parentElement.querySelector('.status');
    if(statusDiv.style.display == 'none'){
        statusDiv.style.display = 'block'
    } else{
        statusDiv.style.display = 'none'
    }
}
import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../../api/users.js'
import page from '../../node_modules/page/page.mjs'

const homeTemplate = () => html`
    <section id="home">
        <article class="hero layout">
            <img src="./assets/team.png" class="left-col pad-med">
            <div class="pad-med tm-hero-col">
                <h2>Welcome to Team Manager!</h2>
                <p>Want to organize your peers? Create and manage a team for free.</p>
                <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                ${showBtn()}
            </div>
        </article>
    </section>`;

export function homeView(){
    let container = document.querySelector('main')
    render(homeTemplate(), container);
}

function showBtn(){
    if(localStorage.user){
        return html`<a href="/teams" class="action cta">Browse Teams</a>`
    } else {
        return html`<a href="/register" class="action cta">Sign Up Now</a>`
    }                
}
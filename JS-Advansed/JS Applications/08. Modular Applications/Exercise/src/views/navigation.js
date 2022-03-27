import { render, html } from '../../node_modules/lit-html/lit-html.js';


function navigationTemplate(){
    if(localStorage.user){
        return userLinks()
    } else{
        return guestLinks()
    }
}
function guestLinks(){
    return html`
    <a href="/teams" class="action">Browse Teams</a>
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>`;
}
function userLinks(){
    return html`
    <a href="/teams" class="action">Browse Teams</a>
    <a href="/myteam" class="action">My Teams</a>
    <a href="/logout" class="action">Logout</a>`;
}

export function navigationView(ctx, next){
    render(navigationTemplate(), document.querySelector('nav'));
    next()
}
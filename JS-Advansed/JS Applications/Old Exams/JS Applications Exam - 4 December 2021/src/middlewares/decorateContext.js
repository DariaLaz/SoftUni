import { logout } from "../api/api.js";
import { page, render } from "../lib.js";
import { getUserData } from "../util.js";

const root = document.getElementById('main-content')
document.getElementById('logoutBtn').addEventListener('click', onLogout)


export function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav(){
    const userData = getUserData()
    if(userData){
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'inline-block')
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'none')
    } else{
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'none')
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'inline-block')
    }
}

function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/');
}
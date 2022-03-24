import { logout } from "../api/api.js";
import { page, render } from "../lib.js";
import { getUserData } from "../util.js";

const root = document.getElementById('site-content')
document.getElementById('logoutBtn').addEventListener('click', onLogout)


export function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav(){
    const userData = getUserData()
    
    if(userData){
        let username = userData.username;
        document.querySelector('#profile').style.display = 'inline-block'
        document.querySelector('#guest').style.display = 'none'
        document.querySelector('#welcome').textContent = `Welcome ${username}`

    } else{
        document.querySelector('#profile').style.display = 'none'
        document.querySelector('#guest').style.display = 'inline-block'
    }
}

function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/');
}
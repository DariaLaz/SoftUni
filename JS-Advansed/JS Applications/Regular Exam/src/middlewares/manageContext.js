import { logoutUser } from "../api/user.js";
import { page, render } from "../library.js";
import { getUserDetails } from "../userData.js";

const root = document.getElementById('content')
document.getElementById('logoutBtn').addEventListener('click', onLogout)


export function manageContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.manageUserNavigation = manageUserNavigation;

    next();
}

export function manageUserNavigation(){
    const userData = getUserDetails()
    if(userData){
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'inline-block')
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'none')
    } else{
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'none')
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'inline-block')
    }
}

function onLogout(){
    logoutUser();
    manageUserNavigation();
    page.redirect('/');
}
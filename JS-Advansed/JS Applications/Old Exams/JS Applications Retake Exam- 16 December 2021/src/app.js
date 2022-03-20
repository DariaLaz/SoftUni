
import { logout } from './api/users.js';
import {page, render}  from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)
updateUserNav()

page(decorateContext);
page('/createEvent', createPage);
page('/', homePage);
page('/login', loginPage);
page('/profile', profilePage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);




page.start();
function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav();
    next()
}

function onLogout(){
    logout();
    page.redirect('/')
}

function updateUserNav(){
    const userData = getUserData();

    if(userData){
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'block')
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'none')
        document.querySelectorAll('.user span').textContent = `Welcome, ${userData.email}`
    } else {
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'none')
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'block')
    }
}
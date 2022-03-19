import { manageNav } from '../src/manageNav.js';
import page from '../node_modules/page/page.mjs'
import { logout } from '../api/users.js';

export async function logoutView(){
    await logout();
    manageNav();
    page.redirect(`/dashboard`)
}
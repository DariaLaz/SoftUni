import page from '../../node_modules/page/page.mjs'
import { logout } from '../../api/users.js';

export async function logoutView(){
    await logout();
    page.redirect(`/home`)
}
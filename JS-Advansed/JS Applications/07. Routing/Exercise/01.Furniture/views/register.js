import { render, html } from '../node_modules/lit-html/lit-html.js';
import { manageNav } from '../src/manageNav.js';
import page from '../node_modules/page/page.mjs'
import { register } from '../api/users.js';


const registerTemplate = () => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => registerHandler(e)}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>`;

async function registerHandler(e){
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let email = formData.get('email')
    let pass = formData.get('password')
    let rePass = formData.get('rePass')

    if(pass != rePass){
        alert('Passwords dont match')
    } else(
        await register(email, pass)
    )
    manageNav();
    page.redirect(`/dashboard`)
}

export function registerView(){
    let container = document.querySelector('.container')
    render(registerTemplate(), container);
}
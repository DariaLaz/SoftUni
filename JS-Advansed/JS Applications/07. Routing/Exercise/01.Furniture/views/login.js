import { render, html } from '../node_modules/lit-html/lit-html.js';
import { login } from '../api/users.js'
import { manageNav } from '../src/manageNav.js';
import page from '../node_modules/page/page.mjs'


const loginTemplate = () => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => loginHandler(e)}>
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
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

async function loginHandler(e){
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let email = formData.get('email')
    let pass = formData.get('password')

    await login(email, pass)
    manageNav();
    page.redirect(`/dashboard`)
}

export function loginView(){
    let container = document.querySelector('.container')
    render(loginTemplate(), container);
}
import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../../api/users.js'
import page from '../../node_modules/page/page.mjs'

const loginTemplate = () => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form id="login-form" class="main-form pad-large" @submit=${(e) => loginHandler(e)}>
                <div class="error" style="display:none">Error message.</div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>`;

async function loginHandler(e){
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let email = formData.get('email')
    let pass = formData.get('password')

    try{
        await login(email, pass)
        page.redirect(`/home`)
    } catch(err){
        document.querySelector('.error').style.display = 'block'
    }
}


export function loginView(){
    let container = document.querySelector('main')
    render(loginTemplate(), container);
}
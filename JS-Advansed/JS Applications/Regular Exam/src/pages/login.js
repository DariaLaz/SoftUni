import { loginUser } from '../api/user.js';
import {html} from '../library.js'

const loginTemplate = (onSubmit) => html`
<!--Login Page-->
<section id="loginPage">
            <form class="loginForm" @submit=${onSubmit}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>`

export async function loginPage(ctx){
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const email= formData.get('email')
        const password= formData.get('password')
        if(email == '' || password == ''){
            return alert('Please fill both fields')
        }

        await loginUser(email, password);
        ctx.manageUserNavigation();
        ctx.page.redirect('/')
    }
}
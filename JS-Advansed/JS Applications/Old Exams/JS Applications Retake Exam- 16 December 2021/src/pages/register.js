import { registerUser } from '../api/user.js';
import {html} from '../library.js'

const registerTemplate = (onSubmit) => html`
<!--Register Page-->
<section id="registerPage">
            <form class="registerForm" @submit=${onSubmit}>
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>`

export async function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const email= formData.get('email')
        const password= formData.get('password')
        const confirmPass= formData.get('repeatPassword')

        if(email == '' || password == ''){
            return alert('Pleasse fill both fields')
        } else if(password != confirmPass){
            return alert('Passwords dont match')
        }

        await registerUser(email, password);
        ctx.manageUserNavigation();
        ctx.page.redirect('/')
    }
}

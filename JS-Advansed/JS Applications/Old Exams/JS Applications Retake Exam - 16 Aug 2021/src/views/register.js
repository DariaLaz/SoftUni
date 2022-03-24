import { register } from '../api/data.js';
import {html} from '../lib.js'

const registerTemplate = (onSubmit) => html`
<!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" class="content auth">
            <form id="register" @submit=${onSubmit}>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>`

export async function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const email= formData.get('email')
        const password= formData.get('password')
        const confirmPass= formData.get('confirm-password')

        if(email == '' || password == ''){
            return alert('Pleasse fill both fields')
        } else if(password != confirmPass){
            return alert('Passwords dont match')
        }

        await register(email, password);
        ctx.updateUserNav();
        ctx.page.redirect('/')
    }
}
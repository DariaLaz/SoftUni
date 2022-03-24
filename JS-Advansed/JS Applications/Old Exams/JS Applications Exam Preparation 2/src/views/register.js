import { register } from '../api/data.js';
import {html} from '../lib.js'

const registerTemplate = (onSubmit) => html`
<!-- Register Page -->
        <section id="register">
            <div class="container">
                <form id="register-form" @submit=${onSubmit}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="#">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>`

export async function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const username= formData.get('username')
        const password= formData.get('password')
        const repeatPass= formData.get('repeatPass')

        if(username == '' || password == '' || repeatPass == ''){
            return alert('Pleasse fill both fields')
        } else if(password != repeatPass){
            return alert('Passwords dont match')
        }

        await register(username, password);
        ctx.updateUserNav();
        ctx.page.redirect('/')
    }
}
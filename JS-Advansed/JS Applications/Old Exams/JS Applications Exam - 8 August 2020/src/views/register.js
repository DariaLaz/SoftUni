import { register } from '../api/data.js';
import {html} from '../lib.js'

const registerTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <div class="form-group">
                <label for="repeatPassword">Repeat Password</label>
                <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
            </div>
        
            <button type="submit" class="btn btn-primary">Register</button>
        </form> `

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

        await register(email, password);
        ctx.updateUserNav();
        ctx.page.redirect('/')
    }
}
import { login } from '../api/data.js';
import {html} from '../lib.js'

const loginTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="" method="">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>
        
            <button type="submit" class="btn btn-primary">Login</button>
        </form>`

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

        await login(email, password);
        ctx.updateUserNav();
        ctx.page.redirect('/')
    }
}
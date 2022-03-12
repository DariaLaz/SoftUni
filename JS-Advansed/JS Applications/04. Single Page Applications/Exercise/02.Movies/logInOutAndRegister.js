import {showHomePage} from './view.js'

export const register = async function(){
    let registerSection = document.querySelector('#form-sign-up');
    registerSection.classList.remove('hide');

    let form = registerSection.children[0];
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let formData = new FormData(form);

        let email = formData.get('email')
        let password = formData.get('password')
        let repeatPassword = formData.get('repeatPassword')

        try{
            if(email == ''){
                throw new Error('Email is required')
            } else if(password.length < 6){
                throw new Error('Password should be at least 6 symbols')
            } else if(password != repeatPassword){
                throw new Error('Password and repeat password do not match')
            } 
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            if(response.ok != true){
                const err = await response.json();
                throw new Error(err.message)
            }
            const data = await response.json();
            let newUser = {
                email: data.email,
                token: data.accessToken,
                id: data._id
            }
            sessionStorage.setItem('userData', JSON.stringify(newUser))
            registerSection.classList.add('hide');
            showHomePage()
        } catch(err){
            alert(err.message)
        }
    })
    
}

export const login = async function(){
    let loginSection = document.querySelector('#form-login');
    loginSection.classList.remove('hide')

    let form = loginSection.children[0];
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let formData = new FormData(form);

        let email = formData.get('email')
        let password = formData.get('password')

        try{
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            if(response.ok != true){
                const err = await response.json();
                throw new Error('Wrong username or password')
            }
    
            const data = await response.json();
    
            let userData = {
                email: data.email,
                id: data._id,
                token: data.accessToken
            }
            sessionStorage.setItem('userData', JSON.stringify(userData));
            showHomePage()
            loginSection.classList.add('hide')

        } catch(err){
            alert(err.message)
        }
    })
}

export const logout = async function(){
    sessionStorage.clear();
    showHomePage();
}



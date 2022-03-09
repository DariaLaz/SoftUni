window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', onLogin);

});

async function onLogin(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

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
            throw new Error(err.message)
        }

        const data = await response.json();

        let userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = ('./index.html')

    } catch(err){
        alert(err.message)
    }
}
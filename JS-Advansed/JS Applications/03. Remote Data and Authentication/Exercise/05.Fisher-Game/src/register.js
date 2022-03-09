function register(){
    let registerForm = document.querySelector('form');
    registerForm.addEventListener('submit', reg)
    document.querySelector('#user').style.display = 'none'
}

async function reg(e){
    e.preventDefault();
    let registerForm = document.querySelector('form');

    const formData = new FormData(registerForm);

    const email = formData.get('email');
    const password = formData.get('password');  
    const repeat = formData.get('rePass');

    console.log(1)

    try{
        if(password != repeat){
            throw new Error('Wrong pass')
        }
    console.log(2)
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
        console.log(3)
        let newUser = {
            email: data.email,
            token: data.accessToken,
            id: data._id
        }
    console.log(4)
        
        sessionStorage.setItem('userData', JSON.stringify(newUser));
        window.location = ('index.html')   
    } catch(err){
        alert(err.message)
    }
}

register();
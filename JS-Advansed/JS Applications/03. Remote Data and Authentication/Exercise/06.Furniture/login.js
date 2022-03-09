function solve() {
    //Log In
    let logInForm = document.querySelector('#logInForm')
    logInForm.addEventListener('submit', login)
    //Register
    let registerForm = document.querySelector('#registerForm')
    registerForm.addEventListener('submit', register)
}

solve()

async function login(e){
  e.preventDefault();
  let logInForm = document.querySelector('#logInForm')

  const formData = new FormData(logInForm);

  const email = formData.get('email');
  const password = formData.get('password');
  try{
      const response = await fetch('http://localhost:3030/users/login', {
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
      sessionStorage.setItem('userData', JSON.stringify(data));
      window.location = ('homeLogged.html')      
  } catch(err){
      alert(err.message)
  }
}

async function register(e){
    e.preventDefault();
    let registerForm = document.querySelector('#registerForm')

    const formData = new FormData(registerForm);

    const email = formData.get('email');
    const password = formData.get('password');  
    const repeat = formData.get('rePass');
    
    try{
        if(password != repeat){
            throw new Error('Wrong pass')
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
        sessionStorage.setItem('userData', JSON.stringify(data));
        window.location = ('homeLogged.html')   

    } catch(err){
        alert(err.message)
    }
}


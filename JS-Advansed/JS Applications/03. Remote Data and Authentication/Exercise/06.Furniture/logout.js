function solve(){
    let logOutBtn = document.querySelector('#logoutBtn')
    logOutBtn.addEventListener('click', logout)
}

solve()

async function logout(e){
    console.log('sfsd')
    const userData = JSON.parse(sessionStorage.userData);
    const res = await fetch(`http://localhost:3030/users/logout`, {
        headers: {
            "X-Authorization": userData.accessToken
        }
    });
    if (res.ok) {
        sessionStorage.clear();
        window.location = 'home.html'
    }
}
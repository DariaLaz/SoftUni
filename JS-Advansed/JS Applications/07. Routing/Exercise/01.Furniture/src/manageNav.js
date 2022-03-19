export function manageNav(){
    const user = localStorage.getItem('user');
    if(user){
        document.querySelector('#user').style.display = 'inline-block'
        document.querySelector('#guest').style.display = 'none'
    } else{
        document.querySelector('#user').style.display = 'none'
        document.querySelector('#guest').style.display = 'inline-block'
    }
}
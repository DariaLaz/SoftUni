import {register, login, logout} from './logInOutAndRegister.js'
import {addMovie} from './addMovie.js'
import {showHomePage, hideItems} from './view.js'

hideItems()
showHomePage()

let navigation = document.querySelectorAll('.nav-item');

navigation[0].addEventListener('click', welcomeFunc)
navigation[1].addEventListener('click', logoutEventHandler)
navigation[2].addEventListener('click', loginEventHandler)
navigation[3].addEventListener('click', registerEventHandler)

let addMovieBtn = document.querySelector('#add-movie-button');
addMovieBtn.addEventListener('click', addNewMovieEventHandler)

function welcomeFunc(e){
    e.preventDefault();
    showHomePage()
}

function logoutEventHandler(e){
    e.preventDefault();
    
    logout();  
    hideItems()
    showHomePage() 
}

async function loginEventHandler(e){
    e.preventDefault();
    hideItems();
    login();
}

function registerEventHandler(e){
    e.preventDefault();
    hideItems();
    register();
    hideItems()
    showHomePage()
}

function addNewMovieEventHandler(e){
    e.preventDefault();
    hideItems();
    addMovie();
}
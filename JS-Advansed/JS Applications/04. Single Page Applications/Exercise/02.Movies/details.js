export async function seeDetails(id){
    let url = 'http://localhost:3030/data/movies'

    let response = await fetch(url);
    let result = await response.json();

    let currentMovie = result.find(x => x._id == id);
    let loggedInUser = JSON.parse(sessionStorage.userData).id;


    let movieContainer = document.querySelector('#movie-example');
    
    movieContainer.classList.remove('hide')

    movieContainer.innerHTML = 
    `<div class="row bg-light text-dark">
    <h1>Movie title: Black Widow</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
             alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy
            with ties to her past arises. Comes on the screens 2020.</p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 1</span>
    </div>
    </div>`
    let deleteBtn = movieContainer.querySelector('.btn-danger');
    let editBtn = movieContainer.querySelector('.btn-warning');
    let likeBtn = movieContainer.querySelector('.btn-primary');
    let likesSpan = movieContainer.querySelector('.enrolled-span')

    deleteBtn.addEventListener('click', deleteEventHandler)
    editBtn.addEventListener('click', editEventHandler)
    likeBtn.addEventListener('click', likeEventHandler)



    if(currentMovie._ownerId != loggedInUser){
        deleteBtn.className = 'hide'
        editBtn.className = 'hide'
        likesSpan.className = 'hide'
    }

}

function deleteEventHandler(e){

}
function editEventHandler(e){
    
}
function likeEventHandler(e){
    
}
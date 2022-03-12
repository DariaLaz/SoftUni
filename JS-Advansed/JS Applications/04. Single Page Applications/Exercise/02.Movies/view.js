
export function showHomePage(){
    hideItems();
    document.querySelector('#home-page').classList.remove('hide')
    document.querySelector('#movie').classList.remove('hide')

    if(sessionStorage.length != 0){
        let addMovieBtn = document.querySelector('#add-movie-button');
        addMovieBtn.classList.remove('hide');
    }
    navigationManage();
    loadAllMovies();
}

export function hideItems(){
    let sections = Array.from(document.querySelectorAll('section'));
    sections.forEach(section => {
        section.classList.add('hide');
    });
}

function navigationManage(){
    let isLoggedIn = sessionStorage.length != 0;
    let navigation = document.querySelectorAll('.nav-item');

    if(isLoggedIn){ //loged
        Array.from(navigation).forEach(navLi => {
            navLi.classList.add('hide')
        })
        navigation[0].classList.remove('hide')
        navigation[1].classList.remove('hide')
        navigation[0].querySelector('a').textContent = `Welcome, ${JSON.parse(sessionStorage.userData).email}`
    } else{ 
        Array.from(navigation).forEach(navLi => {
            navLi.classList.add('hide')
        })
        navigation[2].classList.remove('hide')
        navigation[3].classList.remove('hide')
    }
}

async function loadAllMovies(){
    let movieContainer = document.querySelector('.card-deck');

    let url = 'http://localhost:3030/data/movies'

    let response = await fetch(url);
    let result = await response.json();
    movieContainer.innerHTML = ''
    for (const movie in result) {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add("card");
        movieDiv.innerHTML = 
        `<div class="card mb-4">
        <img class="card-img-top" src="${result[movie].img}"
             alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${result[movie].title}</h4>
        </div>
        <div class="card-footer">
            <a href="#/details/6lOxMFSMkML09wux6sAF">
                <button type="button" class="btn btn-info" id="${result[movie]._id}">Details</button>
            </a>
        </div>`

        movieDiv.querySelector('.card-footer a button').addEventListener('click', (e) => {
            e.preventDefault();
            if(sessionStorage.length == 0){
                alert('You should log in in order to see details');
            } else{
                hideItems();
                seeDetails(e.currentTarget.id)
            }
        })
        movieContainer.appendChild(movieDiv)
    }
}


async function seeDetails(id){
    let url = 'http://localhost:3030/data/movies'

    let response = await fetch(url);
    let result = await response.json();

    let currentMovie = result.find(x => x._id == id);

    let loggedInUser = JSON.parse(sessionStorage.userData).id;

    let token = JSON.parse(sessionStorage.userData).token;

    let movieContainer = document.querySelector('#movie-example');
    
    movieContainer.classList.remove('hide')
    movieContainer.innerHTML = 
    `<div class="row bg-light text-dark">
    <h1>Movie title: ${currentMovie.title}</h1>
    <div class="col-md-8">
    <img class="img-thumbnail" src="${currentMovie.img}"
    alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${currentMovie.description}</p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 0</span>
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
    } else{
        likeBtn.disabled = true;
    }

    function deleteEventHandler(e){
        e.preventDefault()
        
        fetch(`http://localhost:3030/data/movies/${currentMovie._id}`, {
            method: 'DELETE',
            headers: { 'X-Authorization': token }
        });

        showHomePage();
    }
    function editEventHandler(e){
        e.preventDefault()
        hideItems();
        document.querySelector('#edit-movie').classList.remove('hide');
        let form = document.querySelector('#edit-movie form');

        let [title, imageUrl] = form.querySelectorAll('input');
        let description = form.querySelector('textarea');

        title.value = currentMovie.title;
        description.textContent = currentMovie.description;
        imageUrl.value = currentMovie.img;

        form.addEventListener('submit', async(e) => {
            e.preventDefault();
            
            let formData = new FormData(form);
    
            let title = formData.get('title')
            let description = formData.get('description')
            let imageUrl = formData.get('imageUrl')

            let updatedMovie = {
                title,
                description,
                img: `${imageUrl}`,
            }

            try{
                if(title == '' || description == '' || imageUrl == ''){
                    throw new Error('All fields are required')
                }
                const res = await fetch(`http://localhost:3030/data/movies/${currentMovie._id}`, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': token
                    },
                    body: JSON.stringify(updatedMovie)
                });
                if(!res.ok){
                    const err = await res.json();
                    throw new Error(err.message)
                }
                seeDetails(currentMovie._id)
                document.querySelector('#edit-movie').classList.add('hide');
            } catch(err){
                alert(err.message);
            }

        })
    }
    async function likeEventHandler(e){
        e.preventDefault()
        let token = JSON.parse(sessionStorage.userData).token;

        await fetch(`http://localhost:3030/data/likes`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({movieId: currentMovie._id})
        });

        likeBtn.className = ('hide')
        showLikes(currentMovie._id);
    }
    async function showLikes(movieId){
    
        likesSpan.classList.remove('hide');
        
        let response = await fetch(`http://localhost:3030/data/likes`)
        let result = await response.json();
    
        let currentMovieLikes = result.filter(x => x.movieId == movieId);
    
        likesSpan.textContent = `Liked ${currentMovieLikes.length}`
    }
}



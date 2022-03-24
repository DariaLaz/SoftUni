import { deleteMovie, getLikes, getMovieById, likeMovie } from '../api/data.js';
import {html} from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (movie, isOwner, onDelete, onLike, likes) => html`
        <div class="container">
            <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>
                <div class="col-md-8">
                    <img class="img-thumbnail" src="${movie.img}" alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${movie.description}</p>
                    ${isOwner ? html`
                    <a class="btn btn-danger" @click=${onDelete} href="javascript:void(0)">Delete</a>
                    <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>`
                    : html`
                    <a class="btn btn-primary" @click=${onLike} href="javascript:void(0)">Like</a>
                    <span class="enrolled-span">Liked ${likes}</span>`}
                </div>
            </div>
        </div>`

export async function detailsPage(ctx){
    let id = ctx.params.id;
    let currentMovie = await getMovieById(id);
    let likes = await getLikes(id);
    const userData = getUserData();
    const isOwner = userData && userData.id == currentMovie._ownerId;
    let successBox = document.querySelector('#successBox')

    ctx.render(detailsTemplate(currentMovie, isOwner, onDelete, onLike,  likes))

    async function onLike(){
        await likeMovie({movieId: id});
        successBox.parentElement.style.display = 'block'
        successBox.textContent = 'Liked successfully'
        ctx.page.redirect('/')
        setTimeout(() =>  {
            successBox.parentElement.style.display = 'none'
        }, 2000)
        ctx.page.redirect(`/details/${id}`)
    }

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete.')

        if(choice){
            await deleteMovie(ctx.params.id)
            successBox.parentElement.style.display = 'block'
            successBox.textContent = 'Deleted successfully'
            ctx.page.redirect('/')

            setTimeout(() =>  {
                successBox.parentElement.style.display = 'none'
            }, 5000)
        }
    }
}

import { deleteTheater, getLikes, getLikesFromUser, getTheaterById, likeEvent } from '../api/user.js';
import {html} from '../library.js'
import { getUserDetails } from '../userData.js';

const detailsTemplate = (event, isOwner, onDelete, onLike, likes, hasLike) => html`
<!--Details Page-->
<section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${event.title}</h1>
                    <div>
                        <img src="./images/Moulin-Rouge!-The-Musical.jpg" />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${event.description}</p>
                    <h4>Date: ${event.date}</h4>
                    <h4>Author: ${event.author}</h4>

                    ${Boolean(getUserDetails()) ?
                    html`
                    <div class="buttons">
                        ${isOwner ?
                        html`
                        <a class="btn-delete" @click=${onDelete} href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/edit/${event._id}">Edit</a>`
                        : html`${hasLike ?
                        null : html`<a class="btn-like" @click=${onLike} href="javascript:void(0)">Like</a>`}`}
                    </div>` : null}
                    <p class="likes">Likes: ${likes}</p>
                </div>
            </div>
        </section>`

export async function detailsPage(ctx){
    let id = ctx.params.id;
    const userData = getUserDetails();

    const [currentTheater, likes, hasLike] = await Promise.all([
        getTheaterById(id),
        getLikes(id),
        userData ? getLikesFromUser(id, userData.id) : 0
    ])
    
    const isOwner = userData && userData.id == currentTheater._ownerId;
    
    ctx.render(detailsTemplate(currentTheater, isOwner, onDelete, onLike, likes, hasLike)) 

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete.')
        if(choice){
            await deleteTheater(ctx.params.id)
            ctx.page.redirect('/')
        }
    }
    async function onLike(){
        likeEvent(id)
        ctx.page.redirect(`/details/${id}`)
    }
}


import { deleteById, getEventById } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplete = (event, isCreator, isLoggedIn, onDel) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${event.title}</h1>
                    <div>
                        <img src="${event.imageUrl}" />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${event.description}</p>
                    <h4>Date: ${event.date}</h4>
                    <h4>Author: ${event.author}</h4>
                    
                    ${isLoggedIn() ? 
                    html`
                    <div class="buttons">
                        ${isCreator() ? 
                        html`<a class="btn-delete" href="#" @click=${onDel}>Delete</a>
                             <a class="btn-edit" href="/edit/${event._id}">Edit</a>`
                        : html`<a class="btn-like" href="" @click=${like}>Like</a>`}
                    </div>` : null}
                    <p class="likes">Likes: 0</p>
                </div>
            </div>
        </section>`;

export async function detailsPage(ctx){
    const currentEvent = await getEventById(ctx.params.id);
    
    let user = getUserData();

    ctx.render(detailsTemplete(currentEvent, isCreator, isLoggedIn, onDelete))
    function isCreator(){
        return Boolean(user && currentEvent._ownerId == user._id)
    }
    function isLoggedIn(){
        return localStorage.length != 0
    }
    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this event forever')
        if(choice){
            await deleteById(ctx.params.id);
            ctx.page.redirect('/')
        }
    }
}

function like(e){
    e.preventDefault()
    e.currentTarget.style.display = 'none'
    let likesEl = document.querySelector('.likes');
    likesEl.textContent = `Likes: ${currentLikes+1}`
}
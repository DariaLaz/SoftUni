import { comment, deleteGame, getCommentsById, getGameById } from '../api/data.js';
import {html} from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete, comments, isLoggedIn, onComment) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${game.imageUrl}" />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text"> ${game.summary} </p>

                <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length == 0
                ? html`<p class="no-comment">No comments.</p>`
                : html`
                <ul>
                    ${comments.map(commentTemplate)} 
                </ul>`}
                </div>

                ${isOwner 
                ? html`
                <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0) class="button">Delete</a>
                </div>` : null}

            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${isOwner ? null
            : isLoggedIn ?
            html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onComment}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
            : null}
            

        </section>`

let commentTemplate = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>`

export async function detailsPage(ctx){
    let currentGame = await getGameById(ctx.params.id);
    let comments = await getCommentsById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && userData.id == currentGame._ownerId;
    const isLoggedIn = Boolean(userData);

    ctx.render(detailsTemplate(currentGame, isOwner, onDelete, comments, isLoggedIn, onComment))


    async function onDelete(){
        const choice = confirm('Are you sure you want to delete.')
        if(choice){
            await deleteGame(ctx.params.id)
            ctx.page.redirect('/')
        }
    }

    async function onComment(e){
        e.preventDefault();
        let formData = new FormData(e.target);

        let content = formData.get('comment');

        let commentRes = {
            gameId: ctx.params.id,
            comment: content
        }

        await comment(commentRes)

        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
}
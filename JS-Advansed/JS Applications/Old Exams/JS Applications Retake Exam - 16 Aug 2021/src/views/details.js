import { allCommentdByGameId, createComment, deleteGame, getGameById } from '../api/data.js';
import {html} from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete, comments, addComment) => html`
<!--Details Page-->
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${game.imageUrl}" />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">${game.summary}</p>

                <!-- Bonus ( for Guests and Users ) -->
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
                ? html`<div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>`
                : null}

            </div>

            ${(getUserData() && !isOwner)
            ? html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${addComment}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>` : null}
        </section>`

let commentTemplate = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>`

export async function detailsPage(ctx){
    let id = ctx.params.id;
    let currentGame = await getGameById(id);
    let comments = await allCommentdByGameId(id)
    const userData = getUserData();
    const isOwner = userData && userData.id == currentGame._ownerId;

    ctx.render(detailsTemplate(currentGame, isOwner, onDelete, comments, addComment))
    async function onDelete(){
        const choice = confirm('Are you sure you want to delete.')
        if(choice){
            await deleteGame(ctx.params.id)
            ctx.page.redirect('/games')
        }
    }

    async function addComment(e){
        e.preventDefault();
        let formData = new FormData(e.target)
        let content = formData.get('comment');

        if(content == ''){
            return alert('The comment field is required.')
        }

        let newComment = {
            gameId: id,
            comment: content
        }

        await createComment(newComment)
        e.target.reset()
        ctx.page.redirect(`/details/${id}`)
    }
}

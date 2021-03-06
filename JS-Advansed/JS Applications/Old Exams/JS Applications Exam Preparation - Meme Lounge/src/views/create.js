import { createMeme } from '../api/data.js';
import {html, page} from '../lib.js'
import { getUserData } from '../util.js';
import { notify } from './notify.js';

const createTemplete = (onSubmit) => html`
    <section id="create-meme">
        <form id="create-form" @submit=${onSubmit}>
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`;

export function createPage(ctx){
    ctx.render(createTemplete(onSubmit))
    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);

        const title = formData.get('title')
        const description = formData.get('description')
        const imageUrl = formData.get('imageUrl')

        if(title == '' || description == '' || imageUrl == ''){
            notify('All fields are required');
            return;
        }

        await createMeme({
            title,
            description,
            imageUrl
        })
        ctx.page.redirect('/memes')
    }
}
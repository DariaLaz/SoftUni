
import { editEvent, getEventById } from '../api/data.js';
import { html } from '../lib.js'

const editTemplete = (ev, onSubmit) => html`
    <section id="editPage">
        <form class="theater-form" @submit=${onSubmit}>
            <h1>Edit Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" value="${ev.title}">
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${ev.date}">
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author"
                    value="${ev.author}">
            </div>
            <div>
                <label for="description">Theater Description:</label>
                <textarea id="description" name="description"
                    placeholder="Description">${ev.description}</textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                    value="${ev.imageUrl}">
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>`;

export async function editPage(ctx){
    let id = ctx.params.id;
    const currentEvent = await getEventById(id);
    ctx.render(editTemplete(currentEvent, onSubmit));

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);

        const title = formData.get('title')
        const date = formData.get('date')
        const author = formData.get('author')
        const description = formData.get('description')
        const imageUrl = formData.get('imageUrl')


        if(title == '' || description == '' || imageUrl == '' || date == '' || author == ''){
            alert('All fields are required');
            return;
        }

        await editEvent(ctx.params.id, {
            title,
            date,
            author,
            description,
            imageUrl
        })
        ctx.page.redirect('/')
    }
}
import { editTheater, getTheaterById } from '../api/user.js';
import {html} from '../library.js'

const editTemplate = (event, onSubmit) => html`
<!--Edit Page-->
        <section id="editPage">
            <form class="theater-form" @submit=${onSubmit}>
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="${event.title}">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${event.date}">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder=""
                        value="${event.author}">
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${event.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        value="${event.imageUrl}">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>`

export async function editPage(ctx){
    const id = ctx.params.id;
    const currentEvent = await getTheaterById(id)

    ctx.render(editTemplate(currentEvent, onSubmit))

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const title= formData.get('title')
        const date= formData.get('date')
        const author= formData.get('author')
        const imageUrl= formData.get('imageUrl')
        const description= formData.get('description')

        if(title == '' || date == '' || author == '' || 
        imageUrl == '' || description == ''){
            return alert('Please fill all fields')
        } 
        
        await editTheater( id, {
            title,
            date,
            author,
            imageUrl,
            description
        })
       
        ctx.page.redirect(`/details/${id}`)
    }
}

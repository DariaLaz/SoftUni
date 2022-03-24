import { editMovie, getMovieById } from '../api/data.js'
import {html} from '../lib.js'

const editTemplate = (onSubmit, movie) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
            <h1>Edit Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Movie Title" value="${movie.title}" name="title">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Movie Description..." name="description">${movie.description}</textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" value="${movie.imageUrl}" name="imageUrl">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`

export async function editPage(ctx){
    let id = ctx.params.id
    const movie = await getMovieById(id)
    ctx.render(editTemplate(onSubmit, movie))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target)
        const title= formData.get('title')
        const description= formData.get('description')
        const imageUrl= formData.get('imageUrl')

        if(title == '' || description == '' || imageUrl == ''){
            let errorBox = document.querySelector('#errorBox')
            errorBox.parentElement.style.display = 'block';
            errorBox.textContent = 'Invalid inputs!'
            setTimeout(() => errorBox.parentElement.style.display = 'none', 5000)
            return 
        }
        
        await editMovie( id, {
            title,
            description,
            imageUrl
        })
       
        let successBox = document.querySelector('#successBox')
        successBox.parentElement.style.display = 'block'
        successBox.textContent = 'Edited successfully'
        ctx.page.redirect(`/details/${id}`)

        setTimeout(() =>  {
            successBox.parentElement.style.display = 'none'
        }, 5000)
    }
}

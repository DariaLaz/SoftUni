import { createMovie } from '../api/data.js';
import {html} from '../lib.js'

const createTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`

export async function createPage(ctx){
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        
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
        
        await createMovie( {
            title,
            description,
            imageUrl
        })
       
        let successBox = document.querySelector('#successBox')
        successBox.parentElement.style.display = 'block'
        successBox.textContent = 'Created successfully'
        ctx.page.redirect('/')

        setTimeout(() =>  {
            successBox.parentElement.style.display = 'none'
        }, 5000)
    }
}

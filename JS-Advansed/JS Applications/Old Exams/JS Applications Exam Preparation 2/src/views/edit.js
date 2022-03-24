import { editCar, getCarById } from '../api/data.js';
import {html} from '../lib.js'

const editTemplate = (car, onSubmit) => html`
<!-- Edit Listing Page -->
        <section id="edit-listing">
            <div class="container">

                <form id="edit-form" @submit=${onSubmit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>`

export async function editPage(ctx){
    let id = ctx.params.id;
    let currentCar = await getCarById(id);

    ctx.render(editTemplate(currentCar, onSubmit))

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const brand= formData.get('brand')
        const model= formData.get('model')
        const description= formData.get('description')
        const year= formData.get('year')
        const imageUrl= formData.get('imageUrl')
        const price= formData.get('price')

        if(brand == '' || model == '' || description == '' || 
        year == '' || imageUrl == '' || price == ''){
            return alert('Pleasse fill all fields')
        }else if(isNaN(Number(price)) || isNaN(Number(year))){
            return alert('Price and year should be positive numbers')
        }
        
        await editCar( id, {
            brand,
            model,
            description,
            year: Number(year),
            imageUrl,
            price: Number(price)
        })
       
       ctx.page.redirect(`/details/${id}`)
    }
}
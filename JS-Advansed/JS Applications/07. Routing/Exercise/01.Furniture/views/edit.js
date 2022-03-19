import { getFurnitureDetailsById, updateFurnitureDetailsById } from '../api/data.js';
import { render, html } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'


const editTemplate = (furniture) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => edit(furniture._id ,e)}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${furniture.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="${furniture.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${furniture.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${furniture.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${furniture.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${furniture.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${furniture.material || ''}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    </div>
`;

async function edit(id, e){
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);

    let make = formData.get('make');
    let model = formData.get('model');
    let year = formData.get('year');
    let description = formData.get('description');
    let price = formData.get('price');
    let img = formData.get('img');
    let material = formData.get('material');

    if(make.length < 4 || model.length < 4 || year < 1950 || year > 2050 || 
        description.length < 10 || price < 0 || img == ''){
            alert('invalid input')
        } else{
            let furniture = {
                make,
                model,
                year,
                description,
                price,
                img,
                material
            }
           await updateFurnitureDetailsById(id, furniture);
           page.redirect(`/dashboard`)
        }
}

export async function editView(ctx){
    let id = ctx.params.id;
    let currentFurn = await getFurnitureDetailsById(id);
    let container = document.querySelector('.container')
    render(editTemplate(currentFurn), container);
}
import { getAllPets } from '../api/user.js'
import {html} from '../library.js'

const dashboardTemplate = (pets) => html`
<!--Dashboard-->
<section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${pets.length == 0 ?
                html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`
                : pets.map(petsTemplate)}
            </div>
        </section>`

let petsTemplate = (pet) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="${pet.image}">
        </article>
        <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${pet._id}">Details</a>
        </div>
    </div>`

export async function dashboardPage(ctx){
    let pets = await getAllPets();

    ctx.render(dashboardTemplate(pets))
}
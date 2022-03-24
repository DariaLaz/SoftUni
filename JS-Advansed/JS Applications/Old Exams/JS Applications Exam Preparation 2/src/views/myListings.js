import { getMyCars } from '../api/data.js'
import {html} from '../lib.js'
import { getUserData } from '../util.js'
import { carTemplate } from './car.js';

const myListingsTemplate = (cars) => html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">

            ${cars.length == 0
            ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`
            : cars.map(carTemplate)}
            
            </div>
        </section>`

export async function myListingsPage(ctx){
    let userData = getUserData();
    let cars = await getMyCars(userData.id)
    
    ctx.render(myListingsTemplate(cars))
}
import { searchCar } from '../api/data.js';
import {html, render} from '../lib.js'
import { carTemplate } from './car.js';

const searchTemplate = (onClick) => html`
<!-- Search Page -->
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${onClick}>Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">
                
            </div>
        </section>`

export async function searchPage(ctx){
    ctx.render(searchTemplate(onClick))

    async function onClick(){
        let query = document.querySelector('#search-input').value;
       
        if(isNaN(Number(query))){
            alert('The input should be number')
        } else {
            let cars = await searchCar(query);
            
            let root = document.querySelector('.listings')
            if(cars.length == 0){
                render(noMatchTemplate(), root) 
            } else{
                render(albumTemplate(cars), root) 
            }
        }
    }
}

function noMatchTemplate(){
    return html`<p class="no-cars"> No results.</p>`
}

function albumTemplate(cars){
    return cars.map(carTemplate)
}
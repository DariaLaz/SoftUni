import { searchAlbum } from '../api/data.js'
import {html, render} from '../lib.js'
import { albumTemplate } from './album.js'

const searchTemplate = (onClick) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${onClick} class="button-list">Search</button>
        </div>
        <h2>Results:</h2>
        <div class="search-result">
           
        </div>
    </section>`
let nomatchTemplate = () =>  html`<p class="no-result">No result.</p>`;
let matchTemlate = (albums) => html`${albums.map(albumTemplate)}`

export async function searchPage(ctx){
    ctx.render(searchTemplate(onClick))
    async function onClick(){
        let searchText = document.querySelector('#search-input')
        let albums = await searchAlbum(searchText.value);
        
        let searchResult = document.querySelector('.search-result');
        if(albums.length == 0){
            render(nomatchTemplate(), searchResult) 
        } else{
            render(matchTemlate(albums), searchResult) 
        }
    }
}
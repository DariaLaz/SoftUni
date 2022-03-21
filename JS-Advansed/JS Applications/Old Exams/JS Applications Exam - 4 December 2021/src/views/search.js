import { searchAlbum } from '../api/data.js'
import {html, render} from '../lib.js'
import { getUserData } from '../util.js';

let user = await getUserData();
let isUser = Boolean(user);

const searchTemplate = (onClick) => html`
<!--Search Page-->
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click=${onClick}>Search</button>
    </div>
    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        
    </div>
</section>`
let noMatchTemplate = () => html`<p class="no-result">No result.</p>`
//let albumTemplate = () => html`<p class="no-result">here</p>`


// let albumTemplate = () =>html`<div class="card-box" style="display:none">
//     <img src="./images/BrandiCarlile.png">
//     <div>
//         <div class="text-center">
//             <p class="name">Name: </p>
//             <p class="artist">Artist: }</p>
//             <p class="genre">Genre: </p>
//             <p class="price">Price: $</p>
//             <p class="date">Release Date: </p>
//         </div>
//         <div class="btn-group">
//             <a href="/details/" id="details">Details</a>
//         </div>
//     </div>`

function albumTemplate(albums){ 
    return html`${albums.map(album => 
        html`<div class="card-box">
        <img src="./images/BrandiCarlile.png">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${isUser ?
        html`<div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>`
        : null}
            
        </div>`)}`}
    

export async function searchPage(ctx){
    ctx.render(searchTemplate(onClick))

    async function onClick(){
        let quary = document.querySelector('#search-input').value;
        let albums = await searchAlbum(quary);
        let root = document.querySelector('.search-result')
        if(albums.length == 0){
            render(noMatchTemplate(), root) 
        } else{
            render(albumTemplate(albums), root) 
            // console.log(Array.from(albums))
            // console.log(Array.from(albums).map(x => x))
        }
    }
}
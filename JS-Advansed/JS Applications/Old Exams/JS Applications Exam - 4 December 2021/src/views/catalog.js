import { getAllAlbums } from '../api/data.js'
import {html} from '../lib.js'
import { getUserData } from '../util.js';




const catalogTemplate = (allAlbums) => html`
<!--Catalog-->
<section id="catalogPage">
    <h1>All Albums</h1>
    ${allAlbums.length == 0 ? html`<p>No Albums in Catalog!</p>`
    : allAlbums.map(albumPreview)}
    
    
</section>`

let albumPreview = (album, isUser) =>html`
<div class="card-box">
    <img src="${album.imgUrl}">
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
        
    </div>
</div>` 


export async function catalogPage(ctx){
    let allAlbums = await getAllAlbums();
    let user = await getUserData();
    let isUser = Boolean(user);
    ctx.render(catalogTemplate(allAlbums, isUser))
}
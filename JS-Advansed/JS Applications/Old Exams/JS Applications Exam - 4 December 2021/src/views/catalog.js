import { getAllAlbums } from '../api/data.js'
import {html} from '../lib.js'
import { getUserData } from '../util.js';
import { albumTemplate } from './album.js';

const catalogTemplate = (albums) => html`
<!--Catalog-->
        <section id="catalogPage">
            <h1>All Albums</h1>

            ${albums.length == 0
            ? html`<p>No Albums in Catalog!</p>`
            : albums.map(albumTemplate)}
            
        </section>`



export async function catalogPage(ctx){
    let albums = await getAllAlbums();
    ctx.render(catalogTemplate(albums))
}
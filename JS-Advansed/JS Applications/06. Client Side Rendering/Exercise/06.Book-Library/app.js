import { books } from "./books.js";
import {render} from '../node_modules/lit-html/lit-html.js';
import {template} from './template.js';
import {renderPage} from './renderPage.js';
import {create} from './createBook.js'

renderPage();

document.querySelector('#loadBooks').addEventListener('click', loadBooks)
document.querySelector('#add-form').addEventListener('submit', (e) => {
    e.preventDefault();
    create()
})

async function loadBooks(){
    let allBooks = await books();
    let tableBody = document.querySelector('tbody')
    render(template(allBooks), tableBody);
 }
// let allBooks = await books();
// let bks = Object.entries(allBooks).map(([k, v]) => `${k} -> ${v.title}`);
// console.log(bks)

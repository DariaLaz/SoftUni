import { render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js'
import { template } from './template.js'

let catsList = document.querySelector('#catsList');
let templatedCats = cats.map(template);

render(templatedCats, catsList)





import { render } from '../node_modules/lit-html/lit-html.js';
import { template } from './template.js'
import { towns } from './towns.js'
import { search } from './search.js'

let townList = document.querySelector('#townList');
let templatedTowns = towns.map(template);

render(templatedTowns, townList)

document.querySelector('button').addEventListener('click', search);
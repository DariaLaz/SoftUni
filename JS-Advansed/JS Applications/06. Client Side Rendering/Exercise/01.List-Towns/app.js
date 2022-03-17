import { render } from '../node_modules/lit-html/lit-html.js';
import { template } from './template.js'

let container = document.querySelector('#root');
let containerList = document.createElement('ul');
container.appendChild(containerList);

let allTowns = document.querySelector('#towns');

let loadBtn =  document.querySelector('#btnLoadTowns');

loadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let templatedTowns = allTowns.value.split(', ').map(template);
    render(templatedTowns, containerList)
    allTowns.value = '';
})





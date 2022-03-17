import {items} from './items.js';
import {template} from './template.js';
import {render} from '../node_modules/lit-html/lit-html.js';
import {addItem} from './dropdown.js';

loadOptions()

let addBtn = document.querySelector('input[value="Add"]');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let textInput = e.currentTarget.parentElement.querySelector('#itemText');
    addItem(textInput.value);
    loadOptions();
    textInput.value = '';
})

async function loadOptions(){
    let menuElement = document.querySelector('#menu');
    let allItems = await items();
    render(template(Object.values(allItems)), menuElement);
}
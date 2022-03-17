import { render } from '../node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js'
import { template } from './template.js'

let container = document.querySelector('#contacts');
let templatedContacts = contacts.map(template);

render(templatedContacts, container)


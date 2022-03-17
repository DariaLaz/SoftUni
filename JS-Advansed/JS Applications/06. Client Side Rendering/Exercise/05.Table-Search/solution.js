import {students} from './students.js'
import {render} from '../node_modules/lit-html/lit-html.js';
import {template} from './template.js';
import { search } from './search.js';

loadStudents();
document.querySelector('#searchBtn').addEventListener('click', search)

async function loadStudents(){
   let allStudents = await students();
   let tableBody = document.querySelector('tbody')
   render(template(Object.values(allStudents)), tableBody);
}
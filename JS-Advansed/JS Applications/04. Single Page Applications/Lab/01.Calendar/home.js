import {years} from './openYears.js'
import {month} from './openMonth.js'


hideElements();
document.querySelector('#years').style.display = 'block';

let yearsTable = Array.from(document.querySelectorAll('#years .date'));
yearsTable.map(x => x.addEventListener('click', x.addEventListener('click', showYear)))

let monthTables = Array.from(document.querySelectorAll('.monthCalendar .date'));
monthTables.map(x => x.addEventListener('click', x.addEventListener('click', showMonth)))

function hideElements(){
    let allSections = document.querySelectorAll('section');
    Array.from(allSections).forEach(section => {
        section.style.display = 'none';
    });
}

function showYear(e){
    hideElements()
    years(e.currentTarget.textContent)
}

function showMonth(e){
    hideElements()
    //get the year from the table caption
    let year = e.currentTarget.parentElement.parentElement.parentElement.parentElement.children[0].textContent;
    let monthTExt = e.currentTarget.textContent
    month(year, monthTExt)

}

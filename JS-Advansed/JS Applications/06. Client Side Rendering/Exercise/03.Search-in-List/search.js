import { towns } from './towns.js'

export function search() {
   let input = document.querySelector('input');
   let searchText = input.value;
   let allListItems = document.querySelectorAll('li');
   let matchesCount = 0;

   Object.values(allListItems).forEach(li => {
      li.classList = '';
      if (li.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         li.classList = 'active';
         matchesCount++;
     }
   })
   document.querySelector('#result').textContent = `${matchesCount} matches found`;
   input.value = '';
}
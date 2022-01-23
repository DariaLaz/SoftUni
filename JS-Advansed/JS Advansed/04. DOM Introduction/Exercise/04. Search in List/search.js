function search() {
   let townsElement = document.getElementsByTagName('li');
   let searchText = document.getElementById('searchText').value;
   let towns = Array.from(townsElement);
   let matches = 0;
   for (const town of towns) {
      if(town.textContent.includes(searchText)){
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches++;
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`
}

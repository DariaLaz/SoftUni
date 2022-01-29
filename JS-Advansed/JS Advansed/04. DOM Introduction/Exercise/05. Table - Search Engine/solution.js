function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField');
      let rows = document.querySelectorAll('tbody tr')
      let infoArr = Array.from(rows);
      infoArr.forEach(x => {
         x.classList.remove('select');
         if(x.textContent.includes(searchText.value)){
            x.classList.add('select')
         }
      });
      searchText = ''
   }
}
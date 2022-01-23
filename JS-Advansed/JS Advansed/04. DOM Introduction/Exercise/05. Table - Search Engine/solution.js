function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById('searchField').value.toLocaleLowerCase();
      let cellElements = document.querySelectorAll('tbody tr')
      let infoArr = Array.from(cellElements);
      infoArr.forEach(x => {
         if(x.textContent.toLocaleLowerCase().includes(searchText)){
            x.classList.add('select')
         }
      });
   }
}
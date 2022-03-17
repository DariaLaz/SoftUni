export function search(text){
    let input = document.querySelector('#searchField');
    let searchText = input.value;
    let allTableRows = document.querySelectorAll('tr');
 
    Object.values(allTableRows).forEach(tr => {
        tr.classList.remove('select');
        if (searchText != '' && tr.textContent.toLowerCase().includes(searchText.toLowerCase())) {
            tr.classList.add('select');
        }
    })
    input.value = '';
}
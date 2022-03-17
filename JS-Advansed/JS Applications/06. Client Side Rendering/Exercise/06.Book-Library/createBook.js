export async function create(){
    const addForm = document.querySelector('#add-form');
    let titleInput = addForm.querySelectorAll('input')[0];
    let authorInput = addForm.querySelectorAll('input')[1];

    if(titleInput.value != '' && authorInput.value != ''){
        let newBook = {
            author: authorInput.value,
            title: titleInput.value
        }
        
        await fetch(`http://localhost:3030/jsonstore/collections/books/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook)})

        titleInput.value = ''
        authorInput.value = ''
    } else{
        alert('All fields mush be filled')
    }
}

export function renderPage(){
    const body = document.querySelector('body');

    //Btn
    const loadBtn = document.createElement('button');
    loadBtn.id = "loadBooks";
    loadBtn.textContent = 'LOAD ALL BOOKS';
    body.appendChild(loadBtn);

    //Table
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableRow = document.createElement('tr');

    const titleHead = document.createElement('th');
    titleHead.textContent = 'Title';
    tableRow.appendChild(titleHead);

    const authorHead = document.createElement('th');
    authorHead.textContent = 'Author';
    tableRow.appendChild(authorHead);

    const actionHead = document.createElement('th');
    actionHead.textContent = 'Action';
    tableRow.appendChild(actionHead);

    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    body.appendChild(table);

    //Add form
    const addForm = document.createElement('form');
    addForm.id = "add-form";

    const addHeading = document.createElement('h3');
    addHeading.textContent = 'Add book';
    addForm.appendChild(addHeading);

    const addLableTitle = document.createElement('label');
    addLableTitle.textContent = 'TITLE';
    addForm.appendChild(addLableTitle)
    const addInputTitle = document.createElement('input');
    addInputTitle.type = "text";
    addInputTitle.name = "title";
    addInputTitle.placeholder = "Title...";
    addForm.appendChild(addInputTitle)

    const addLableAuthor = document.createElement('label');
    addLableAuthor.textContent = 'AUTHOR';
    addForm.appendChild(addLableAuthor)
    const addInputAuthor = document.createElement('input');
    addInputAuthor.type = "text";
    addInputAuthor.name = "author";
    addInputAuthor.placeholder = "Author...";
    addForm.appendChild(addInputAuthor)

    const submitBtn = document.createElement('input');
    submitBtn.type = "submit";
    submitBtn.value = "Submit";
    addForm.appendChild(submitBtn)

    body.appendChild(addForm);

    //Edit form
    const editForm = document.createElement('form');
    editForm.classList.add('hide')
    editForm.id = "edit-form";

    const editHeading = document.createElement('h3');
    editHeading.textContent = 'Edit book';
    editForm.appendChild(editHeading);

    const editLableTitle = document.createElement('label');
    editLableTitle.textContent = 'TITLE';
    editForm.appendChild(editLableTitle)
    const editInputTitle = document.createElement('input');
    editInputTitle.type = "text";
    editInputTitle.name = "title";
    editInputTitle.placeholder = "Title...";
    editForm.appendChild(editInputTitle)

    const editLableAuthor = document.createElement('label');
    editLableAuthor.textContent = 'AUTHOR';
    editForm.appendChild(editLableAuthor)
    const editInputAuthor = document.createElement('input');
    editInputAuthor.type = "text";
    editInputAuthor.name = "author";
    editInputAuthor.placeholder = "Author...";
    editForm.appendChild(editInputAuthor)

    const saveBtn = document.createElement('input');
    saveBtn.type = "submit";
    saveBtn.value = "Save";
    editForm.appendChild(saveBtn)

    body.appendChild(editForm);
}

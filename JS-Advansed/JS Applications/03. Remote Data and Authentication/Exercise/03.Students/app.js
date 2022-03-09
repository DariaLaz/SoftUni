window.onload = attachEvents;
reload();

function attachEvents() {
    let form = document.querySelector('form');

    let submitBtn = document.querySelector('#submit');

    submitBtn.addEventListener('click', submit);

    async function submit(e){
        e.preventDefault();

        let formData = new FormData(form);

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let facultyNumber = formData.get('facultyNumber');
        let grade = formData.get('grade');

        if(firstName && lastName && Number(facultyNumber) && Number(grade)){
            let newPerson = {
                firstName,
                lastName,
                facultyNumber,
                grade
            }

            let url = 'http://localhost:3030/jsonstore/collections/students';

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPerson)
            })
            reload();
       }
    }
}

async function reload(){
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let tableBodyResultElement = document.querySelector('tbody');

    tableBodyResultElement.innerHTML = '';
    let response = await fetch(url);
    let result = await response.json();
    
    for (const record in result) {
        let tableRow = document.createElement('tr');

        let dataFirstName = document.createElement('td');
        dataFirstName.textContent = result[record].firstName;
        tableRow.appendChild(dataFirstName);

        let dataLastName = document.createElement('td');
        dataLastName.textContent = result[record].lastName;
        tableRow.appendChild(dataLastName);

        let dataFacultyNum = document.createElement('td');
        dataFacultyNum.textContent = result[record].facultyNumber;
        tableRow.appendChild(dataFacultyNum);

        let dataGrade = document.createElement('td');
        dataGrade.textContent = result[record].grade;
        tableRow.appendChild(dataGrade);

        tableBodyResultElement.appendChild(tableRow);
    }
}

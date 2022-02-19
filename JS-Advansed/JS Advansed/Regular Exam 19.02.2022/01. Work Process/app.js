function solve() {
    let [fNameInputEl, lNameInputEl, emailInputEl, birthdateInputEl, positionInputEl, salaryInputEl] = document.querySelectorAll('form div input');
    let hireBtnEl = document.querySelector('#add-worker');
    hireBtnEl.addEventListener('click', hire)
    let bugetSumMessage = document.querySelector('#sum');

    let hiredTableEl = document.querySelector('#tbody')

    function hire(e){
        e.preventDefault();
        if(fNameInputEl.value && lNameInputEl.value && emailInputEl.value && 
            birthdateInputEl.value && positionInputEl.value && salaryInputEl.value){

                let currTableRow = document.createElement('tr')

                let fNameTd = document.createElement('td');
                fNameTd.textContent = fNameInputEl.value;
                currTableRow.appendChild(fNameTd);

                let lNameTd = document.createElement('td');
                lNameTd.textContent = lNameInputEl.value;
                currTableRow.appendChild(lNameTd);

                let emailTd = document.createElement('td');
                emailTd.textContent = emailInputEl.value;
                currTableRow.appendChild(emailTd);

                let bdayTd = document.createElement('td');
                bdayTd.textContent = birthdateInputEl.value;
                currTableRow.appendChild(bdayTd);

                let possitionTd = document.createElement('td');
                possitionTd.textContent = positionInputEl.value;
                currTableRow.appendChild(possitionTd);

                let salaryTd = document.createElement('td');
                salaryTd.textContent = salaryInputEl.value;
                currTableRow.appendChild(salaryTd);

                let btnsTd = document.createElement('td');
                
                let firedBtn = document.createElement('button');
                firedBtn.classList.add('fired');
                firedBtn.textContent = 'Fired';
                firedBtn.addEventListener('click', fire);
                btnsTd.appendChild(firedBtn);

                let editBtn = document.createElement('button');
                editBtn.classList.add('edit');
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', edit);
                btnsTd.appendChild(editBtn);

                currTableRow.appendChild(btnsTd);

                hiredTableEl.appendChild(currTableRow);

                bugetSumMessage.textContent = (Number(bugetSumMessage.textContent) + Number(salaryInputEl.value)).toFixed(2);

                fNameInputEl.value = '';
                lNameInputEl.value = '';
                emailInputEl.value = '';
                birthdateInputEl.value = '';
                positionInputEl.value = '';
                salaryInputEl.value = '';
            }
    }

    function edit(e){
        let currentTableRow = e.currentTarget.parentElement.parentElement;

        fNameInputEl.value = currentTableRow.children[0].textContent;
        lNameInputEl.value = currentTableRow.children[1].textContent;
        emailInputEl.value = currentTableRow.children[2].textContent;
        birthdateInputEl.value = currentTableRow.children[3].textContent;
        positionInputEl.value = currentTableRow.children[4].textContent;
        salaryInputEl.value = currentTableRow.children[5].textContent;

        bugetSumMessage.textContent = (Number(bugetSumMessage.textContent) - Number(currentTableRow.children[5].textContent)).toFixed(2);

        currentTableRow.remove();
    }
    function fire(e){
        let currentTableRow = e.currentTarget.parentElement.parentElement;
        
        bugetSumMessage.textContent = (Number(bugetSumMessage.textContent) - Number(currentTableRow.children[5].textContent)).toFixed(2);
        currentTableRow.remove();

    }
}
solve()
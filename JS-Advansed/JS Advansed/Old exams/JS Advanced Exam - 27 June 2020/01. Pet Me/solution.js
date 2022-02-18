function solve() {
    let [nameInputEl, ageInputEl, kindInputEl, currOwnerInputEl] = document.querySelectorAll('#container input')
    let [adoptionSectionListEl, adoptedSectionListEl] =  document.querySelectorAll('section ul')

    let addBtn = document.querySelectorAll('button')[0];

    addBtn.addEventListener('click', add)

    function add(e){
        e.preventDefault()
        if(nameInputEl.value && Number(ageInputEl.value) &&
        kindInputEl.value && currOwnerInputEl.value){

            let listItem = document.createElement('li');

            let infoPar = document.createElement('p');
            infoPar.innerHTML = `<strong>${nameInputEl.value}</strong> is a <strong>${ageInputEl.value}</strong> year old <strong>${kindInputEl.value}</strong>`
            listItem.appendChild(infoPar);

            let ownerSpan = document.createElement('span');
            ownerSpan.textContent = `Owner: ${currOwnerInputEl.value}`;
            listItem.appendChild(ownerSpan);

            let contactBtn = document.createElement('button');
            contactBtn.textContent = 'Contact with owner';
            contactBtn.addEventListener('click', contact)
            listItem.appendChild(contactBtn);

            adoptionSectionListEl.appendChild(listItem)

            nameInputEl.value = '';
            ageInputEl.value = '';
            kindInputEl.value = '';
            currOwnerInputEl.value = '';
        }
    }
    function contact(e){
        let currentListItem = e.currentTarget.parentElement;
        e.currentTarget.remove();
        let adoptDiv = document.createElement('div');

        let enterNamesInput= document.createElement('input');
        enterNamesInput.placeholder = "Enter your names"
        adoptDiv.appendChild(enterNamesInput)

        let adoptBtn = document.createElement('button');
        adoptBtn.textContent = 'Yes! I take it!';
        adoptBtn.addEventListener('click', adopt)
        adoptDiv.appendChild(adoptBtn);

        currentListItem.appendChild(adoptDiv);
    }

    function adopt(e){
        let adopterNameEl = e.currentTarget.parentElement.children[0];

        if(adopterNameEl.value){
            let currentListItem = e.currentTarget.parentElement.parentElement;
            e.currentTarget.parentElement.remove();
            currentListItem.querySelector('span').textContent = `New Owner: ${adopterNameEl.value}`
            
            let checkedBtn = document.createElement('button');
            checkedBtn.textContent = 'Checked';
            checkedBtn.addEventListener('click', check)
            currentListItem.appendChild(checkedBtn);

            adoptedSectionListEl.appendChild(currentListItem)
        }
    }
    function check(e){
        e.currentTarget.parentElement.remove();
    }
}


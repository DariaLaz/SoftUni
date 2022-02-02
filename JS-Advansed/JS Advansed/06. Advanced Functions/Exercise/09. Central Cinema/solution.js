function solve() {
    let [onScreenBtn, clearBtn] = document.querySelectorAll('button')
    let movieList = document.querySelector('#movies ul');
    let archiveList = document.querySelector('#archive ul');

    let onScreen = (e) => {
        let [name, hall, ticketPrice] = document.querySelectorAll('#container input')
        e.preventDefault();
        if(name.value && hall.value && parseInt(ticketPrice.value)){
            let newListItemElement = document.createElement('li');
            let nameSpan = document.createElement('span')
            nameSpan.textContent = `${name.value}`
            let hallStrongEl = document.createElement('strong')
            hallStrongEl.textContent = `Hall: ${hall.value}`
            let divElement = document.createElement('div');
            let strDivEl = document.createElement('strong');
            strDivEl.textContent = parseInt(ticketPrice.value).toFixed(2);
            let inputDivEl = document.createElement('input');
            inputDivEl.placeholder = "Tickets Sold"
            let btnDivEl = document.createElement('button');
            btnDivEl.textContent = 'Archive'

            btnDivEl.addEventListener('click', archive)

            divElement.appendChild(strDivEl);
            divElement.appendChild(inputDivEl);
            divElement.appendChild(btnDivEl);

            newListItemElement.appendChild(nameSpan);
            newListItemElement.appendChild(hallStrongEl)
            newListItemElement.appendChild(divElement)
            movieList.appendChild(newListItemElement)
        }
        name.value = ''
        hall.value = ''
        ticketPrice.value = ''
    }
    let archive = (e) => {
        e.preventDefault();

        let archivedLiElement = document.createElement('li');
        let liToArchive = e.currentTarget.parentElement.parentElement;
        
        if(liToArchive.querySelector('div input').value && Number(liToArchive.querySelector('div input').value) >= 0){
            let name = liToArchive.querySelector('span');
            let quantity = Number(liToArchive.querySelector('input').value);
            let price = Number(liToArchive.querySelector('div strong').textContent);
            let total = (quantity * price).toFixed(2);
            let totalAmount = document.createElement('strong');
            totalAmount.textContent = `Total amount: ${total}`;
            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';

            delBtn.addEventListener('click', deleteFunc)

            archivedLiElement.appendChild(name);
            archivedLiElement.appendChild(totalAmount);
            archivedLiElement.appendChild(delBtn);

            liToArchive.remove();
            archiveList.appendChild(archivedLiElement)
        }
    }
    let clear = (e) => {
        let archiveLiArr = Array.from(document.querySelectorAll('#archive ul li'))
        for (const li of archiveLiArr) {
            li.remove()
        }
    }
    let deleteFunc = (e) => {
        e.currentTarget.parentElement.remove();
    }
    onScreenBtn.addEventListener('click', onScreen)
    clearBtn.addEventListener('click', clear)
}
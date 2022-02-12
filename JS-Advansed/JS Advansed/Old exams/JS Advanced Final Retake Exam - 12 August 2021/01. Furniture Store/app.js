window.addEventListener('load', solve);

function solve() {
    let addBtn = document.querySelector('#add');
    let furnitureListEl = document.querySelector('#furniture-list');
    let [modelInputEl, yearInputEl, priceInputEl] = document.querySelectorAll('.store form input');
    let descroptionInputEl = document.querySelector('textarea')
    let add = (e) => {
        e.preventDefault();
        if(modelInputEl.value && descroptionInputEl.value && Number(yearInputEl.value) > 0 && Number(priceInputEl.value) > 0){
            let infoTr = document.createElement('tr');
            infoTr.classList.add('info');

            let modelTd = document.createElement('td');
            modelTd.textContent = modelInputEl.value;
            infoTr.appendChild(modelTd)

            let priceTd = document.createElement('td');
            priceTd.textContent = Number(priceInputEl.value).toFixed(2)
            infoTr.appendChild(priceTd)

            let buttonsTd = document.createElement('td');

            let moreInfoBtn = document.createElement('button');
            moreInfoBtn.className = 'moreBtn';
            moreInfoBtn.textContent = 'More Info'
            moreInfoBtn.addEventListener('click', moreLessInfo)
            buttonsTd.appendChild(moreInfoBtn)

            let buyBtn = document.createElement('button');
            buyBtn.className = 'buyBtn';
            buyBtn.textContent = 'Buy it'
            buyBtn.addEventListener('click', buy)
            buttonsTd.appendChild(buyBtn)

            infoTr.appendChild(buttonsTd)
            
            let hideTr = document.createElement('tr');
            hideTr.className = 'hide';

            let yearTd = document.createElement('td');
            yearTd.textContent = `Year: ${yearInputEl.value}`
            hideTr.appendChild(yearTd)

            let descriptionTd = document.createElement('td');
            descriptionTd.textContent = `Description: ${descroptionInputEl.value}`
            descriptionTd.colSpan = '3'
            hideTr.appendChild(descriptionTd)

            furnitureListEl.appendChild(infoTr);
            furnitureListEl.appendChild(hideTr);


            modelInputEl.value = '';
            descroptionInputEl.value = '';
            yearInputEl.value = '';
            priceInputEl.value = '';
        }
    }
    let moreLessInfo = (e) => {
        if(e.currentTarget.textContent == 'More Info'){
            e.currentTarget.textContent = 'Less Info'
            document.querySelector('.hide').style.display  = 'contents'
        } else{
            e.currentTarget.textContent = 'More Info'
            document.querySelector('.hide').style.display  = 'none'
        }
    }

    let buy = (e) => {
        let price = Number(e.currentTarget.parentElement.parentElement.children[1].textContent)
        
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
        e.currentTarget.parentElement.parentElement.remove()
    }
    addBtn.addEventListener('click', add)
}

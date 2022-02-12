window.addEventListener('load', solve);

function solve() {
    let [modelInputEl, yearInputEl, priceInputEl] = document.querySelectorAll('input');
    let descriptionInputEl = document.querySelector('textarea')

    let addBtn = document.querySelector('#add')
    let furnitureListEl = document.querySelector('#furniture-list')

    let addClickHandler = (e) =>{
        e.preventDefault()
        if(modelInputEl.value && descriptionInputEl.value && 
            Number(yearInputEl.value) > 0 && Number(priceInputEl.value)){
                let infoTr = document.createElement('tr');
                infoTr.className = 'info';

                let modelTd = document.createElement('td');
                modelTd.textContent = modelInputEl.value;
                infoTr.appendChild(modelTd);

                let priceTd = document.createElement('td');
                priceTd.textContent = Number(priceInputEl.value).toFixed(2);
                infoTr.appendChild(priceTd);

                let btnsTd = document.createElement('td');

                let moreinfoBtn = document.createElement('button');
                moreinfoBtn.className = 'moreBtn';
                moreinfoBtn.textContent = 'More Info'
                moreinfoBtn.addEventListener('click', moreInfoBtnHandler)
                btnsTd.appendChild(moreinfoBtn);

                let buyBtn = document.createElement('button');
                buyBtn.className = 'buyBtn';
                buyBtn.textContent = 'Buy it';
                buyBtn.addEventListener('click', buyItBtnHandler)
                btnsTd.appendChild(buyBtn);

                infoTr.appendChild(btnsTd);


                let hideTr = document.createElement('tr');
                hideTr.className = 'hide';

                let yearTd = document.createElement('td');
                yearTd.textContent = `Year: ${yearInputEl.value}`;
                hideTr.appendChild(yearTd);

                let descriptionTd = document.createElement('td');
                descriptionTd.colSpan = '3';
                descriptionTd.textContent = `Description: ${descriptionInputEl.value}`;
                hideTr.appendChild(descriptionTd);

                furnitureListEl.appendChild(infoTr)
                furnitureListEl.appendChild(hideTr)

                modelInputEl.value = ''
                yearInputEl.value = ''
                descriptionInputEl.value = ''
                priceInputEl.value = ''
            }        
    }
    let moreInfoBtnHandler = (e) => {
        if(e.currentTarget.textContent == 'More Info'){
            e.currentTarget.textContent = 'Less Info';
            document.querySelector('.hide').style.display = 'contents'
        } else {
            e.currentTarget.textContent = 'More Info';
            document.querySelector('.hide').style.display = 'none'
        }
    }
    let buyItBtnHandler = (e) => {
        let totalPriceEl = document.querySelector('.total-price');
        let currentModelPriceEl = e.currentTarget.parentElement.parentElement.children[1];
        totalPriceEl.textContent = (Number(totalPriceEl.textContent) + Number(currentModelPriceEl.textContent)).toFixed(2);
        e.currentTarget.parentElement.parentElement.remove();
    }
    addBtn.addEventListener('click', addClickHandler)
}

async function load(){
    let tableBody = document.querySelector('tbody');
    const resp = await fetch('http://localhost:3030/data/furniture');
    const data  = await resp.json();
    tableBody.innerHTML = ''
    for (const furniture in data) {
        let currentFurniture = data[furniture];
        let currTr = document.createElement('tr');

        let imgData = document.createElement('td');
        let img = document.createElement('img');
        img.src = currentFurniture.img;
        imgData.appendChild(img);
        currTr.appendChild(imgData);

        let name = document.createElement('td');
        let namePar = document.createElement('p');
        namePar.textContent = currentFurniture.name;
        name.appendChild(namePar);
        currTr.appendChild(name);

        let price = document.createElement('td');
        let pricePar = document.createElement('p');
        pricePar.textContent = currentFurniture.price;
        price.appendChild(pricePar);
        currTr.appendChild(price);

        let factor = document.createElement('td');
        let factorPar = document.createElement('p');
        factorPar.textContent = currentFurniture.factor;
        factor.appendChild(factorPar);
        currTr.appendChild(factor);

        let checkBoxData = document.createElement('td');
        let checkBoxInput = document.createElement('input');
        checkBoxInput.type = 'checkbox';
        checkBoxInput.disabled = sessionStorage.userData ? false : true
        checkBoxData.appendChild(checkBoxInput);
        checkBoxInput.id = currentFurniture._id;
        currTr.appendChild(checkBoxData);

        tableBody.appendChild(currTr);
    }
}

function solution(){
    let form = document.querySelector('form')
    let buyBtn = document.querySelector('#buyBtn')
    let showOrders = document.querySelector('#showOrders');

    form.addEventListener('submit', create);
    buyBtn.addEventListener('click', buy)
    showOrders.addEventListener('click', showAllOrders)

    load()
}

async function create(e){
    e.preventDefault()
    let form = document.querySelector('form')
    const formData = new FormData(form);

    const name = formData.get('name');
    const price = formData.get('price');  
    const factor = formData.get('factor');
    const img = formData.get('img');
    
    let product = {
        name, 
        price, 
        factor,
        img
    }

    try{
        let token = JSON.parse(sessionStorage.userData).accessToken;
        const response = await fetch('http://localhost:3030/data/furniture', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                "X-Authorization": token
            },
            body: JSON.stringify(product)
        })
        if(response.ok != true){
            const err = await response.json();
            throw new Error(err.message)
        }
        e.target.reset()
        load();
    } catch(err){
        alert(err.message)
    }
}

async function buy(){
    let allCheckedProducts = Array.from(document.querySelectorAll('tbody tr td input')).filter(x => x.checked);

    const response = await fetch('http://localhost:3030/data/furniture');
    const result = await response.json();

    for (const product of allCheckedProducts) {
        let currentFurniture = result.find(x => x._id === product.id);
        let name = currentFurniture.name;
        let price = currentFurniture.price;
        let factor = currentFurniture.factor;
        let img = currentFurniture.img;

        let currProduct = {
            name,
            price,
            factor,
            img
        }
        let token = JSON.parse(sessionStorage.userData).accessToken
        await fetch('http://localhost:3030/data/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token
            },
            body: JSON.stringify(currProduct)
        })
    }
    load();
}

async function showAllOrders(){
    let allBoughtFurnituresResponse = await fetch(`http://localhost:3030/data/orders`);
    let allBoughtFurnituresResult = await allBoughtFurnituresResponse.json();
 
    let allBoughtFurnituresSpan = document.querySelector('#allBoughtFurnitures');
    let allBoughtFurnituresSumSpan = document.querySelector('#allBoughtFurnituresSum');
    allBoughtFurnituresSpan.textContent = allBoughtFurnituresResult.map(x => x.name).join(', ');
    allBoughtFurnituresSumSpan.textContent = `${allBoughtFurnituresResult.reduce((a, b) => a + Number(b.price), 0)}`;
 
}
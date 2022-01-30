function solve() {
  let table = document.querySelector('table tbody');
  let inputAsJson = document.querySelectorAll('textarea')[0];
  let output = document.querySelectorAll('textarea')[1];
  let boughtProductNames = [];
  let totalPrice = 0;
  let totalDecFact = 0;

  const generate = (е) => {
    let input = JSON.parse(inputAsJson.value);
    for (const el of input) {
      let inputRow = document.createElement('tr');
      let inputImg = document.createElement('td');
      let inputName = document.createElement('td');
      let inputPrice = document.createElement('td');
      let inputDecFactory = document.createElement('td');
      let inputCheck = document.createElement('td');

      let img = document.createElement('img');
      img.src = el.img;
      inputImg.appendChild(img);
      let name = document.createElement('p');
      name.textContent = el.name;
      inputName.appendChild(name);
      let price = document.createElement('p');
      price.textContent = el.price;
      inputPrice.appendChild(price);
      let decFactor = document.createElement('p');
      inputDecFactory.textContent = el.decFactor;
      inputDecFactory.appendChild(decFactor);
      let check = document.createElement('input')
      check.type = 'checkbox';
      inputCheck.appendChild(check)

      inputRow.appendChild(inputImg);
      inputRow.appendChild(inputName);
      inputRow.appendChild(inputPrice);
      inputRow.appendChild(inputDecFactory);
      inputRow.appendChild(inputCheck);
      table.appendChild(inputRow)
    }
    console.log('sdfsdf')
  }

  const buy = (е) =>{
    let activeCheckBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (const prod of activeCheckBoxes) {
      let name = prod.parentElement.parentElement.querySelectorAll('td')[1].textContent;
      let price = prod.parentElement.parentElement.querySelectorAll('td')[2].textContent;
      let decFactor = prod.parentElement.parentElement.querySelectorAll('td')[3].textContent;
      boughtProductNames.push(name);
      totalPrice += Number(price)
      totalDecFact += Number(decFactor)
    }
    output.textContent += `Bought furniture: ${boughtProductNames.join(', ')}\n`
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
    output.textContent += `Average decoration factor: ${totalDecFact / boughtProductNames.length}`

  }
  document.querySelectorAll('button')[0].addEventListener('click', generate);
  document.querySelectorAll('button')[1].addEventListener('click', buy);
}
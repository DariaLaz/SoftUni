window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.querySelector('#submitBTN');
  let editBtn = document.querySelector('#editBTN');
  let contBtn = document.querySelector('#continueBTN');

  let [fullNameEl, emailEl, phoneNumEl, addressEl, postalCodeEl] = document.querySelectorAll('input');
  let infoPreviewEl = document.querySelector('#infoPreview');

  let addReservationToList = (e) => {
    e.preventDefault();
    if(fullNameEl.value && emailEl.value){
      let fullNameListItem = document.createElement('li');
    fullNameListItem.textContent = `Full Name: ${fullNameEl.value}`;
    infoPreviewEl.appendChild(fullNameListItem);

    let emailListItem = document.createElement('li');
    emailListItem.textContent = `Email: ${emailEl.value}`;
    infoPreviewEl.appendChild(emailListItem);

    let phoneNumListItem = document.createElement('li');
    phoneNumListItem.textContent = `Phone Number: ${phoneNumEl.value}`;
    infoPreviewEl.appendChild(phoneNumListItem);

    let addressListItem = document.createElement('li');
    addressListItem.textContent = `Address: ${addressEl.value}`;
    infoPreviewEl.appendChild(addressListItem);

    let postalCodeListItem = document.createElement('li');
    postalCodeListItem.textContent = `Postal Code: ${postalCodeEl.value}`;
    infoPreviewEl.appendChild(postalCodeListItem);


    fullNameEl.value = '';
    emailEl.value = '';
    phoneNumEl.value = '';
    addressEl.value = '';
    postalCodeEl.value = '';

    submitBtn.disabled = true;
    contBtn.disabled = false;
    editBtn.disabled = false;
    }
  }
  let editReservation = (e) => {
    let allListItems = document.querySelectorAll('#infoPreview li');
    let allInputs = document.querySelectorAll('#form div input');
    
    for (let i = 0; i < allListItems.length; i++) {
      let content = allListItems[i].textContent.split(': ')[1];
      allInputs[i].value = content
    }
    infoPreviewEl.innerHTML = '';
    submitBtn.disabled = false;
    contBtn.disabled = true;
    editBtn.disabled = true;
  }
  let continueReservation = (e) => {
    let blockEl = document.querySelector('#block');
    blockEl.innerHTML = '';
    let messageH3 = document.createElement('h3');
    messageH3.textContent = 'Thank you for your reservation!';
    blockEl.appendChild(messageH3);
  }
  editBtn.addEventListener('click', editReservation)
  contBtn.addEventListener('click', continueReservation)
  submitBtn.addEventListener('click', addReservationToList)
}

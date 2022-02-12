window.addEventListener('load', solution);

function solution() {
  let [fullNameEl, emailEl, phoneNumEl, addressEl, postalCodeEl] = document.querySelectorAll('input')
  let submitBtnEl = document.querySelector('#submitBTN')
  let editBtnEl = document.querySelector('#editBTN')
  let continueBtnEl = document.querySelector('#continueBTN')

  

  let submit = (e) => {
    if(fullNameEl.value && emailEl.value && phoneNumEl.value && addressEl.value && postalCodeEl.value){
       let fullNamePreviewEl = document.createElement('li');
       fullNamePreviewEl.textContent = `Full Name: ${fullNameEl.value}`

       let emailPreviewEl = document.createElement('li');
       emailPreviewEl.textContent = `Email: ${emailEl.value}`

       let phNumPreviewEl = document.createElement('li');
       phNumPreviewEl.textContent = `Phone Number: ${phoneNumEl.value}`

       let addressPreviewEl = document.createElement('li');
       addressPreviewEl.textContent = `Address: ${addressEl.value}`

       let postalCodePreviewEl = document.createElement('li');
       postalCodePreviewEl.textContent = `Postal Code: ${postalCodeEl.value}`

       document.querySelector('ul').appendChild(fullNamePreviewEl);
       document.querySelector('ul').appendChild(emailPreviewEl);
       document.querySelector('ul').appendChild(phNumPreviewEl);
       document.querySelector('ul').appendChild(addressPreviewEl);
       document.querySelector('ul').appendChild(postalCodePreviewEl);

       editBtnEl.disabled = false;
       continueBtnEl.disabled = false;
       submitBtnEl.disabled = true;

       fullNameEl.value = '';
       emailEl.value = '';
       phoneNumEl.value = '';
       addressEl.value = '';
       postalCodeEl.value = '';
    }
  }
  let edit = (e) => {
    let infoArr = Array.from(document.getElementsByTagName('li'))
    let inputArr = Array.from(document.getElementsByTagName('input'))
    
    for (let i = 0; i < infoArr.length; i++) {

      inputArr[i].value = infoArr[i].textContent.split(': ')[1];
    }

    document.querySelector('ul').innerHTML = ""

    editBtnEl.disabled = true;
    continueBtnEl.disabled = true;
    submitBtnEl.disabled = false;

  }
  let continueFunc = (e) => {
    document.querySelector('#block').innerHTML =
     "<h3>Thank you for your reservation!</h3>"
     editBtnEl.disabled = true;
     continueBtnEl.disabled = true;
     submitBtnEl.disabled = false;

  }

  submitBtnEl.addEventListener('click', submit)
  editBtnEl.addEventListener('click', edit)
  continueBtnEl.addEventListener('click', continueFunc)
}



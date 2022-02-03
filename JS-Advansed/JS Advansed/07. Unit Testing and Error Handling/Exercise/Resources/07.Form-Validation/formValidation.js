function validate() {
    let usernameReg = /^[A-Za-z0-9]{3,20}$/;
    let passReg =  /^[a-z0-9_]{5,15}$/;
    let emailReg = /^[^@.]+@[^@]*\.[^@]*$/;
    let [usernameEl, emailEl, passwordEl, confirmPasswordEl, isCompanyEl] = document.querySelectorAll('#userInfo div input');

    isCompanyEl.addEventListener("change", (e) => {
        if (isCompanyEl.checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    let validateFields = (e) => {
        e.preventDefault();

        let invalidFields = [];

        if(!usernameReg.test(usernameEl.value)){
            usernameEl.style.borderColor = 'red';
            invalidFields.push(false);
        } else{
            usernameEl.style.border = 'none';
        }
        if(!emailReg.test(emailEl.value)){
            emailEl.style.borderColor = 'red';
            invalidFields.push(false);
        } else{
            emailEl.style.border = 'none';
        }
        if(passwordEl.value != confirmPasswordEl.value || !passReg.test(passwordEl.value)){
            confirmPasswordEl.style.borderColor = 'red';
            passwordEl.style.borderColor = 'red';
            invalidFields.push(false);
        } else{
            confirmPasswordEl.style.border = 'none';
            passwordEl.style.border = 'none';
        }        
        
        if(isCompanyEl.checked){
            document.querySelector('#companyInfo').style.display = 'block'

            let companyNumElement = document.querySelector('#companyInfo input')
            let num = Number(companyNumElement.value);
            if(num >= 1000 && num <= 9999){
                companyNumElement.style.border = 'none'
            } else{
                companyNumElement.style.borderColor = 'red'
                invalidFields.push(false);
            }
        } else{
            document.querySelector('#companyInfo').style.display = 'none'
        }

        if(!invalidFields.some(x => x == false)){
            document.querySelector('#valid').style.display = 'block'
        } else{
            document.querySelector('#valid').style.display = 'none'
        }
    }
    document.querySelector('#submit').addEventListener('click', validateFields)
}

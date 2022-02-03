function validate() {
    let emailElement = document.querySelector('#email');
    let pattern = /\w+@\w+\.\w+/;
    const validator = (e) =>{
        if(!pattern.test(emailElement.value)){
            e.target.classList.add('error');
        }
        else{
            e.target.classList.remove('error');
        }
    }
    emailElement.addEventListener('change', validator)
}
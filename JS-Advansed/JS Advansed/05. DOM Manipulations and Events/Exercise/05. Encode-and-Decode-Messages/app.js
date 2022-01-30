function encodeAndDecodeMessages() {
    const encode = (e) => {
        let message = e.currentTarget.parentElement.querySelector('textarea').value;
        let result = '';
        message = message.split('')
        message.forEach(x => {
            result += String.fromCharCode(x.charCodeAt(0) + 1)
        });
        document.querySelectorAll('textarea')[1].textContent = result
        e.currentTarget.parentElement.querySelector('textarea').value = ''
    }
    const decode = (e) => {
        let message = e.currentTarget.parentElement.querySelector('textarea').value;
        let result = '';
        message = message.split('')
        message.forEach(x => {
            result += String.fromCharCode(x.charCodeAt(0) -1)
        });
        document.querySelectorAll('textarea')[1].textContent = result
    }
    document.querySelectorAll('button')[0].addEventListener('click', encode)
    document.querySelectorAll('button')[1].addEventListener('click', decode)
}
function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/messenger';
    let sentBtnEl = document.querySelector('#submit');
    let refreshBtnEl = document.querySelector('#refresh');

    let messagesTextArea = document.querySelector('#messages');

    let nameEl = document.querySelector('[name="author"]');
    let messageEl = document.querySelector('[name="content"]');

    sentBtnEl.addEventListener('click', sent)
    async function sent(e){
        e.preventDefault();
        let newMessage = {
            author: nameEl.value,
            content: messageEl.value
        }
        
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        })

        nameEl.value = '';
        messageEl.value = '';
    }

    refreshBtnEl.addEventListener('click', refresh)
    async function refresh(e){
        e.preventDefault();
        messagesTextArea.textContent = '';

        let resMess = await fetch(url);
        let allMessages = await resMess.json();

        for (const message in allMessages) {
            messagesTextArea.textContent += `${allMessages[message].author}: ${allMessages[message].content}\n`;
        }

    }
}

attachEvents();
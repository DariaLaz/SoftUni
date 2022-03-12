let form = document.querySelector('form')
export function createC(){
    let formData = new FormData(form);
    let url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    let content = formData.get('postText')
    let username = formData.get('username')
    let selectedTopicId = JSON.parse(sessionStorage.currentId).id;

    let newComment = {
        content,
        username,
        time: `${new Date().toLocaleString()}`,
        topicId: selectedTopicId
    }

    fetch(url, {
        method: 'POST',
        headers: { 
            'content-type': 'application/json' 
        },
        body: JSON.stringify(newComment)
    });
    form.reset()
}

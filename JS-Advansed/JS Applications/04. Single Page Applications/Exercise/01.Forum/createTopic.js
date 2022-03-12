export function createP(formData){
    let title = formData.get('topicName')
    let username = formData.get('username')
    let post = formData.get('postText')
    if(title == '' && username == '' && post == ''){
        alert('All fields are requared')
    } else{
        createPost(title, username, post)
    }
}

function createPost(title, username, post){
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    let newPostObj = {
        title,
        content: post,
        username,
        id: getNewId(),
        time: `${new Date().toLocaleString()}`
    }

    fetch(url, {
        method: 'post',
        headers:{ 
            'content-type': 'application/json' 
        },
        body: JSON.stringify(newPostObj)
    })
}

function getNewId(){
    return Date.now().toString(36);
}


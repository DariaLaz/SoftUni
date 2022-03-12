import { createC } from "./createComment.js";

loadPostAndComments()

let form = document.querySelector('form');
form.addEventListener('submit', postComment);


function postComment(e){
    e.preventDefault();
    createC();
    loadPostAndComments();
}

async function loadPostAndComments(){
    let id = JSON.parse(sessionStorage.currentId).id;
    let topicAndCommentsContainer = document.querySelector('.comment');
    topicAndCommentsContainer.textContent = 'fsd'

    let commentURL = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    let postURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    let commentResponse = await fetch(commentURL);
    let commentResult = await commentResponse.json();


    let postResponse = await fetch(postURL);
    let postResult = await postResponse.json();

    topicAndCommentsContainer.innerHTML = '';

    topicAndCommentsContainer.innerHTML = `<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${postResult[id].username}</span> posted on <time>${postResult[id].time}</time></p>
    <p class="post-content">${postResult[id].content}</p>
    </div>`

    for (const comment in commentResult) {
        if(commentResult[comment].topicId == id){
            let currentComment = commentResult[comment];
            topicAndCommentsContainer.innerHTML += 
            `<div id="user-comment">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <p><strong>${currentComment.username}</strong> commented on <time>${currentComment.time}</time></p>
                    <div class="post-content">
                        <p>${currentComment.content}</p>
                    </div>
                </div>
            </div>
        </div>`
        }
    }
}


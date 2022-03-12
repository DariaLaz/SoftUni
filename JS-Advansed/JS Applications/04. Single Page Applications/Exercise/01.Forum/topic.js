import { createP } from "./createTopic.js";

let form = document.querySelector('form');
printAllTopics()

let postBtn = document.querySelector('.public');
postBtn.addEventListener('click', createTopic);

let cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', cancelComment);

function cancelComment(e){
    e.preventDefault();
    form.reset();
}

function createTopic(e){
    e.preventDefault();
    let formData = new FormData(form);
    createP(formData)
    printAllTopics()
    form.reset();
}

async function printAllTopics(){
    let url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    let topicsContainer = document.querySelector('.topic-container');
    topicsContainer.innerHTML = '';

    let response = await fetch(url);
    let result = await response.json();

    for (const topic in result) {
        let topicDiv = document.createElement('div');
        topicDiv.classList.add('topic-name-wrapper');
        
        topicDiv.innerHTML = 
        `<div class="topic-name" id="${result[topic]._id}">
        <a href="#" class="normal">
            <h2>${result[topic].title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${new Date().toLocaleString()}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${result[topic].username}</span></p>
                </div>
            </div>
        </div>
        </div>`

        topicDiv.addEventListener('click', comment);

        topicsContainer.appendChild(topicDiv)
    }
}

function comment(e){
    e.preventDefault();
    let id = (e.currentTarget.children[0].id)
    sessionStorage.setItem('currentId', JSON.stringify({id}));
    window.location = 'theme-content.html'
}
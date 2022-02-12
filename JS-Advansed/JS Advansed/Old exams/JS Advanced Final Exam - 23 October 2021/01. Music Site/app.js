window.addEventListener('load', solve);

function solve() {
    let [genreInputEl, songNameInputEl, songAuthorInputEl, creationDateInputEl] = document.querySelectorAll('.container-text form input')
    let collectionSongsDiv = document.querySelector('.all-hits-container')
    let savedSongsDiv = document.querySelector('.saved-container')

    let addBtnEl = document.querySelector('#add-btn');
    
    let addSong = (e) => {
        e.preventDefault()
        if(genreInputEl.value && songNameInputEl.value && songAuthorInputEl.value && creationDateInputEl){
            let collectSongDiv = document.createElement('div');
            collectSongDiv.className = "hits-info";

            let imgEl = document.createElement('img');
            imgEl.src = "./static/img/img.png";

            let genreH2El = document.createElement('h2');
            genreH2El.textContent = `Genre: ${genreInputEl.value}`;

            let nameH2El = document.createElement('h2');
            nameH2El.textContent = `Name: ${songNameInputEl.value}`;

            let authourH2El = document.createElement('h2');
            authourH2El.textContent = `Author: ${songAuthorInputEl.value}`;

            let dateH3El = document.createElement('h3');
            dateH3El.textContent = `Date: ${creationDateInputEl.value}`;

            let saveBtn = document.createElement('button');
            saveBtn.className = "save-btn";
            saveBtn.textContent = 'Save song';
            saveBtn.addEventListener('click', save)

            let likeBtn = document.createElement('button');
            likeBtn.className = "like-btn";
            likeBtn.textContent = 'Like song';
            likeBtn.addEventListener('click', like)


            let delBtn = document.createElement('button');
            delBtn.className = "delete-btn";
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', del)


            collectSongDiv.appendChild(imgEl);
            collectSongDiv.appendChild(genreH2El);
            collectSongDiv.appendChild(nameH2El);
            collectSongDiv.appendChild(authourH2El);
            collectSongDiv.appendChild(dateH3El);
            collectSongDiv.appendChild(saveBtn);
            collectSongDiv.appendChild(likeBtn);
            collectSongDiv.appendChild(delBtn);

            collectionSongsDiv.appendChild(collectSongDiv)

            genreInputEl.value = '';
            songNameInputEl.value = '';
            songAuthorInputEl.value = '';
            creationDateInputEl.value = '';
        }
    }
    let save = (e) => {
        savedSongsDiv.appendChild(e.currentTarget.parentElement);
        e.currentTarget.parentElement.children[6].remove();
        e.currentTarget.parentElement.children[5].remove();

    }
    let like = (e) => {
        let likesParagraph = document.querySelector('.likes p')
        let addLike = Number(likesParagraph.textContent.split(' ')[2]) + 1;
        likesParagraph.textContent = `Total Likes: ${addLike}`;
        e.currentTarget.disabled = true;
    }
    let del = (e) => {
        e.currentTarget.parentElement.remove();
    }

    addBtnEl.addEventListener('click', addSong)
}
function attachEvents() {
    let btnLoadPosts = document.querySelector('#btnLoadPosts');
    let btnViewPost = document.querySelector('#btnViewPost');

    let urlPosts = `http://localhost:3030/jsonstore/blog/posts`;
    let urlComments = `http://localhost:3030/jsonstore/blog/comments`;

    let postsSectionEl = document.querySelector('#posts');

    let postCommentsEl = document.querySelector('#post-comments');

    btnLoadPosts.addEventListener('click', () => {
        fetch(urlPosts)
		.then(res =>{
			if(res.ok == false){
				throw new Error();
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);
    })
    
    function handleResponse(posts){
        for (const key in posts) {
            let optionEl = document.createElement('option');
            optionEl.value = key;
            optionEl.textContent = posts[key].title;
            postsSectionEl.appendChild(optionEl)
        }
    }
    function handleError(err){
        console.log(err)
    }

   btnViewPost.addEventListener('click', viewPost);

    function viewPost(){
        fetch(`${urlComments}`)
		.then(res =>{
			if(res.ok == false){
				throw new Error();
			}
			return res.json();
		})
		.then(handleComments)
		.catch(handleError);
    }

    function handleComments(comments){
        postCommentsEl.innerHTML = '';
        
        for (const comment in comments) {
            if(comments[comment].postId == postsSectionEl.value){
                let listItem = document.createElement('li');
                listItem.id = comment;
                listItem.textContent = comments[comment].text;
                postCommentsEl.appendChild(listItem);
            }
        }
    }
 }

attachEvents();
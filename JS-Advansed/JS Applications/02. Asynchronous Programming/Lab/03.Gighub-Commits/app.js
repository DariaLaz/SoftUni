function loadCommits() {
    let username = document.querySelector('#username').value;
    let repo = document.querySelector('#repo').value;

    let commitsListElement = document.querySelector('#commits');
    
    let url = `https://api.github.com/repos/${username}/${repo}/commits`

    fetch(url)
		.then(res =>{
			if(res.ok == false){
				throw new Error(`${res.status}`);
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);
    function handleResponse(res){
        commitsListElement.innerHTML = '';
		for (const commit of res) {
			let listItem = document.createElement('li');
			listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
			commitsListElement.appendChild(listItem);
		}
    }
    function handleError(err){
        commitsListElement.innerHTML = '';
		let listItem = document.createElement('li');
		listItem.textContent = `Error: ${err.message} (Not Found)`;
		commitsListElement.appendChild(listItem);
    }
}
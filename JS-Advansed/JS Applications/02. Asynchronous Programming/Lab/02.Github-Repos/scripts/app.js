function loadRepos() {
	let repoListEl = document.querySelector('#repos');
	let name = document.querySelector('#username').value;
	let url = `https://api.github.com/users/${name}/repos`

	fetch(url)
		.then(res =>{
			if(res.ok == false){
				throw new Error(`${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);
    function handleResponse(res){
		repoListEl.innerHTML = '';
		for (const repo of res) {
			let listItem = document.createElement('li');

			let aElement = document.createElement('a');
			aElement.textContent = repo.full_name;
			aElement.href = repo.html_url;

			listItem.appendChild(aElement);
			repoListEl.appendChild(listItem);
		}
	}
	function handleError(err){
		repoListEl.innerHTML = '';
		let listItem = document.createElement('li');
		listItem.textContent = err.message;
		repoListEl.appendChild(listItem);
	}
}
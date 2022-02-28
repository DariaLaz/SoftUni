function lockedProfile() {
    let main = document.querySelector('#main');
    let url = `http://localhost:3030/jsonstore/advanced/profiles`
    fetch(url)
		.then(res =>{
			if(res.ok == false){
				throw new Error();
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);
    
    function handleResponse(res){
        for (const key in res) {
            let username = res[key].username;
            let email = res[key].email;
            let age = res[key].age

            let profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');

            let img = document.createElement('img');
            img.src = "./iconProfile2.png";
            img.classList.add('userIcon');
            profileDiv.appendChild(img);

            let lockLabel = document.createElement('label');
            lockLabel.textContent = 'Lock';
            profileDiv.appendChild(lockLabel);
        
            let inputLock = document.createElement('input');
            inputLock.type = 'radio';
            inputLock.name = 'user1Locked';
            inputLock.value = 'lock';
            inputLock.checked = true;
            profileDiv.appendChild(inputLock);

            let unlockLabel = document.createElement('label');
            unlockLabel.textContent = 'Unlock';
            profileDiv.appendChild(unlockLabel);

            let inputUnlock = document.createElement('input');
            inputUnlock.type = 'radio';
            inputUnlock.name = 'user1Locked';
            inputUnlock.value = 'unlock';
            profileDiv.appendChild(inputUnlock);

            profileDiv.appendChild(document.createElement('hr'));

            let usernameLabel = document.createElement('label');
            usernameLabel.textContent = 'Username';
            profileDiv.appendChild(usernameLabel);

            let inputUsername = document.createElement('input');
            inputUsername.type = 'text';
            inputUsername.name = 'user1Locked';
            inputUsername.value = username;
            inputUsername.disabled = true;
            inputUsername.readOnly = true;
            profileDiv.appendChild(inputUsername);

            let hiddenElementsDiv = document.createElement('div');
            hiddenElementsDiv.className = "hiddenInfo";

            hiddenElementsDiv.appendChild(document.createElement('hr'));

            let emailLabel = document.createElement('label');
            emailLabel.textContent = 'Email:';
            hiddenElementsDiv.appendChild(emailLabel);

            let inputEmail = document.createElement('input');
            inputEmail.type = 'text';
            inputEmail.name = 'user1Locked';
            inputEmail.value = email;
            inputEmail.disabled = true;
            inputEmail.readOnly = true;
            hiddenElementsDiv.appendChild(inputEmail);

            let ageLabel = document.createElement('label');
            ageLabel.textContent = 'Age:';
            hiddenElementsDiv.appendChild(ageLabel);

            let inputAge = document.createElement('input');
            inputAge.type = 'text';
            inputAge.name = 'user1Locked';
            inputAge.value = age;
            inputAge.disabled = true;
            inputAge.readOnly = true;
            hiddenElementsDiv.appendChild(inputAge);

            profileDiv.appendChild(hiddenElementsDiv);

            let btnEl = document.createElement('button');
            btnEl.textContent = 'Show more';
            btnEl.addEventListener('click', showMore);
            profileDiv.appendChild(btnEl);

            main.appendChild(profileDiv);
        }
    }
    function showMore(e){
        let hiddenDiv = e.currentTarget.parentElement.children[8];
        if(e.currentTarget.parentElement.children[2].checked){
            return
        }
        if(hiddenDiv.classList.contains('hiddenInfo')){
            hiddenDiv.classList.remove('hiddenInfo');
            e.currentTarget.textContent = "Hide it";
        }else{
            hiddenDiv.classList.add('hiddenInfo');
            e.currentTarget.textContent = 'Show More';
        }
    }
    function handleError(err){

    }
}
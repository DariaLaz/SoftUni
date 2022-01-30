function lockedProfile() {
    let buttonElements = document.querySelectorAll('button');
    let onClick = (e) =>{
        let profile = e.currentTarget.parentElement;
        let isUnlocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        
        if(isUnlocked){
            let currentInfo = profile.querySelector('div');
            if(e.currentTarget.textContent == 'Show more'){
                e.currentTarget.textContent = 'Hide it';
                currentInfo.style.display = 'block'
            } else{
                e.currentTarget.textContent = 'Show more'
                currentInfo.style.display = 'none'
            }
            
        } else{
            profile.querySelector('button').disable = true;
        }
    }
    for (const btn of buttonElements) {
        btn.addEventListener('click', onClick);
    }
}
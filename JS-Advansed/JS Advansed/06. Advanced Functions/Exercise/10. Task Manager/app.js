function solve() {
    let [taskEL, dueDateEl] = document.querySelectorAll('form input')
    let descriptionEl = document.querySelector('textarea')
    let addBtn = document.querySelector('#add')

    let [addTaskSection, openSection, inProgressSection, completeSection] = document.querySelectorAll('section div:nth-of-type(2)')
    
    let add = (e) => {
        e.preventDefault();
        if(taskEL.value && dueDateEl.value && descriptionEl.value){
            let newArticle = document.createElement('article');
    
            let headingEl = document.createElement('h3');
            headingEl.textContent = taskEL.value;
            newArticle.appendChild(headingEl)
    
            let newDesrEl = document.createElement('p');
            newDesrEl.textContent = `Description: ${descriptionEl.value}`;
            newArticle.appendChild(newDesrEl)
    
            let newDueDateEl = document.createElement('p');
            newDueDateEl.textContent = `Due Date: ${dueDateEl.value}`;
            newArticle.appendChild(newDueDateEl)
            
            let btnsDiv = document.createElement('div');
            btnsDiv.classList.add('flex')

            let startBtn = document.createElement('button');
            startBtn.classList.add('green')
            startBtn.textContent = 'Start'
            startBtn.addEventListener('click', start)
            btnsDiv.appendChild(startBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red')
            deleteBtn.textContent = 'Delete'
            deleteBtn.addEventListener('click', del)
            btnsDiv.appendChild(deleteBtn);

            newArticle.appendChild(btnsDiv)

            openSection.appendChild(newArticle)

            taskEL.value = ''
            dueDateEl.value = ''
            descriptionEl.value = ''
        }
    }
    let start = (e) => {
        let articleToMove = e.currentTarget.parentElement.parentElement

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('orange')
        finishBtn.textContent = 'Finish'
        finishBtn.addEventListener('click', finish)
        e.currentTarget.parentElement.appendChild(finishBtn);

        e.currentTarget.remove()

        inProgressSection.appendChild(articleToMove)
    }
    let del = (e) => {
        e.currentTarget.parentElement.parentElement.remove()
    }
    let finish = (e) => {
        let articleToMove = e.currentTarget.parentElement.parentElement
        e.currentTarget.parentElement.remove();
        completeSection.appendChild(articleToMove)
    }


    addBtn.addEventListener('click', add)
}
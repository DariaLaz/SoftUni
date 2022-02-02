function solve() {
    let [addTaskSectionEl, openSectionElement, inProgressSectionElement, completeSectionElement] = document.querySelectorAll('section');

    let addFunc = (e) => {
        e.preventDefault();
        let [task, dueDate] = addTaskSectionEl.querySelectorAll('input');
        let description = addTaskSectionEl.querySelector('textarea')
        if(task.value && description.value && dueDate.value){
            let newArticle = document.createElement('article');
            let newH3 = document.createElement('h3');
            newH3.textContent = task.value
            let newPDescr = document.createElement('p');
            newPDescr.textContent = `Description: ${description.value}`
            let newPDuedate = document.createElement('p');
            newPDuedate.textContent = `Due Date: ${dueDate.value}`
            let newDiv = document.createElement('div');
            newDiv.classList.add('flex');

            let startBtn = document.createElement('button');
            startBtn.textContent = 'Start'
            startBtn.classList.add('green')
            newDiv.appendChild(startBtn)
            startBtn.addEventListener('click', start)

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete'
            deleteBtn.classList.add('red')
            newDiv.appendChild(deleteBtn)
            deleteBtn.addEventListener('click', deleteFunc)

            newArticle.appendChild(newH3)
            newArticle.appendChild(newPDescr)
            newArticle.appendChild(newPDuedate)
            newArticle.appendChild(newDiv)

            openSectionElement.querySelectorAll('div')[1].appendChild(newArticle)
            task.value = ''
            description.value = ''
            dueDate.value = ''

        }
    }
    let start = (e) => {
        let articleToMove = e.currentTarget.parentElement.parentElement;
        articleToMove.querySelector('div').remove()
        let btnDivEl = document.createElement('div');

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add('red')
        deleteBtn.addEventListener('click', deleteFunc)
        btnDivEl.appendChild(deleteBtn)

        let finishBtb = document.createElement('button');
        finishBtb.textContent = 'Finish'
        finishBtb.classList.add('orange')
        finishBtb.addEventListener('click', finish)
        btnDivEl.appendChild(finishBtb)

        articleToMove.appendChild(btnDivEl)

        inProgressSectionElement.querySelectorAll('div')[1].appendChild(articleToMove)
    }
    let deleteFunc = (e) => {
        e.currentTarget.parentElement.parentElement.remove()
    }
    let finish = (e) => {
        let articleToComplete = e.currentTarget.parentElement.parentElement;
        articleToComplete.querySelector('div').remove()
        
        completeSectionElement.querySelectorAll('div')[1].appendChild(articleToComplete)
    }
    document.querySelector('#add').addEventListener('click', addFunc)
}
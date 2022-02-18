function solve() {
    let [addTaskSectionEl, openSectionEl, inProgressSectionEl, completeSectionEl] = document.querySelectorAll('section div:nth-of-type(2)');
    
    let [taskInputEl, dateInputEl] = document.querySelectorAll('input');
    let descriptionTextareaEl = document.querySelector('textarea');

    let addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', add);

    function add(e){
        e.preventDefault();
        if(taskInputEl.value && dateInputEl.value && descriptionTextareaEl.value){
            let article = document.createElement('article');

            let heading = document.createElement('h3');
            heading.textContent = taskInputEl.value;
            article.appendChild(heading);

            let description = document.createElement('p');
            description.textContent = `Description: ${descriptionTextareaEl.value}`;
            article.appendChild(description);

            let date = document.createElement('p');
            date.textContent = `Due Date: ${dateInputEl.value}`;
            article.appendChild(date);

            let btnsDiv = document.createElement('div');
            btnsDiv.classList.add('flex');

            let startBtn = document.createElement('button');
            startBtn.classList.add('green');
            startBtn.textContent = 'Start';
            startBtn.addEventListener('click', start)
            btnsDiv.appendChild(startBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', del)
            btnsDiv.appendChild(deleteBtn);

            article.appendChild(btnsDiv);

            openSectionEl.appendChild(article);

            taskInputEl.value = '';
            dateInputEl.value = '';
            descriptionTextareaEl.value = '';
        } 
    }
    function start(e){
        let article = e.currentTarget.parentElement.parentElement;
        e.currentTarget.remove();

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('orange');
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', finish)

        article.querySelector('.flex').appendChild(finishBtn);

        inProgressSectionEl.appendChild(article)
    }
    function del(e){
        e.currentTarget.parentElement.parentElement.remove();
    }
    function finish(e){
        let article = e.currentTarget.parentElement.parentElement;
        e.currentTarget.parentElement.remove();

        completeSectionEl.appendChild(article)
    }
}
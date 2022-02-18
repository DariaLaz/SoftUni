window.addEventListener('load', solve);

function solve() {
    let typeSectionElement = document.querySelector('#type-product');
    let descriptionTextareaElement = document.querySelector('#description');
    let clientNameInputElement = document.querySelector('#client-name');
    let clientPhoneInputElement = document.querySelector('#client-phone');

    let [receivedOrdersSectionElement, completedOrdersSectionElement] = document.querySelectorAll('#wrapper section')

    let sentBtn = document.querySelector('button[type="submit"]');
    sentBtn.addEventListener('click', sent);

    let clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', clear)

    console.log(`typeSectionElement - ${typeSectionElement}`)
    console.log(`descriptionTextareaElement - ${descriptionTextareaElement}`)
    console.log(`clientNameInputElement - ${clientNameInputElement}`)
    console.log(`clientPhoneInputElement - ${clientPhoneInputElement}`)

    function sent(e){
        e.preventDefault();
        if(descriptionTextareaElement.value && clientNameInputElement.value && clientPhoneInputElement.value){
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('container')

            let productH2 = document.createElement('h2');
            productH2.textContent = `Product type for repair: ${typeSectionElement.value}`;
            containerDiv.appendChild(productH2);

            let clientH3 = document.createElement('h3');
            clientH3.textContent = `Client information: ${clientNameInputElement.value}, ${clientPhoneInputElement.value}`;
            containerDiv.appendChild(clientH3);

            let descrH4 = document.createElement('h4');
            descrH4.textContent = `Description of the problem: ${descriptionTextareaElement.value}`;
            containerDiv.appendChild(descrH4);

            let startBtn = document.createElement('button');
            startBtn.classList.add('start-btn');
            startBtn.textContent = 'Start repаir';
            startBtn.addEventListener('click', start);
            containerDiv.appendChild(startBtn);

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('finish-btn');
            finishBtn.disabled = true;
            finishBtn.textContent = 'Finish repаir';
            finishBtn.addEventListener('click', finish);
            containerDiv.appendChild(finishBtn);

            receivedOrdersSectionElement.appendChild(containerDiv);

            descriptionTextareaElement.value = '';
            clientNameInputElement.value = '';
            clientPhoneInputElement.value = '';
        }
    }
    function start(e){
        e.currentTarget.disabled = true;
        e.currentTarget.parentElement.children[4].disabled = false;
    }
    function finish(e){
        let containerToMove = e.currentTarget.parentElement;

        containerToMove.children[4].remove();
        containerToMove.children[3].remove();

        completedOrdersSectionElement.appendChild(containerToMove);
    }
    function clear(e){
        for (const div of completedOrdersSectionElement.querySelectorAll('div')) {
            div.remove();
        }
    }
}
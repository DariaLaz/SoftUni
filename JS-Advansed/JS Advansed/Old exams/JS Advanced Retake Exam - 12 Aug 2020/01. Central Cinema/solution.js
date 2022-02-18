function solve() {
    let [nameInputEl, hallInputEl, ticketPriceInputEl] = document.querySelectorAll('#container input');
    let onScreenBtn = document.querySelector('#add-new #container button');
    let clearBtn = document.querySelector('#archive button');

    let [moviesSectionListEl, archiveListEl] = document.querySelectorAll('section ul');

    onScreenBtn.addEventListener('click', onScreen)
    clearBtn.addEventListener('click', clear)

    function onScreen(e){
        e.preventDefault()
        if(nameInputEl.value && hallInputEl.value && Number(ticketPriceInputEl.value)){
            let movieListItem = document.createElement('li');

            let movie = document.createElement('span');
            movie.textContent = nameInputEl.value;
            movieListItem.appendChild(movie);

            let hall = document.createElement('strong');
            hall.textContent = `Hall: ${hallInputEl.value}`;
            movieListItem.appendChild(hall);

            let div = document.createElement('div');

            let priceStrong = document.createElement('strong');
            priceStrong.textContent = ticketPriceInputEl.value;
            div.appendChild(priceStrong);

            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            div.appendChild(input);

            let archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', archive)
            div.appendChild(archiveBtn);

            movieListItem.appendChild(div);

            moviesSectionListEl.appendChild(movieListItem);

            nameInputEl.value = '';
            hallInputEl.value = '';
            ticketPriceInputEl.value = '';
        }
    }
    function archive(e){
        let ticketsSold = e.currentTarget.parentElement.children[1].value;
        let ticketsPrice = e.currentTarget.parentElement.children[0].textContent;
        let listItem = e.currentTarget.parentElement.parentElement;
        
        if(Number(ticketsSold)){
            let totalPrice = Number(ticketsSold) * Number(ticketsPrice)
            listItem.children[2].remove();
            listItem.children[1].textContent = `Total amount: ${totalPrice.toFixed(2)}`

            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', del)
            listItem.appendChild(delBtn);

            archiveListEl.appendChild(listItem)
        }
    }
    function del(e){
        e.currentTarget.parentElement.remove()
    }
    function clear(e){
        archiveListEl.innerHTML = ''
    }
}
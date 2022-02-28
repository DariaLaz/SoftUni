function solution() {
    let main = document.querySelector('#main');
    let url = `http://localhost:3030/jsonstore/advanced/articles/list`
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
        for (const item of res) {
            let id = item._id;
            let title = item.title;

            let accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');

            let headDiv = document.createElement('div');
            headDiv.classList.add('head');

            let span = document.createElement('span');
            span.textContent = title;
            headDiv.appendChild(span);

            let btn = document.createElement('button');
            btn.classList.add('button');
            btn.id = id;
            btn.textContent = 'More';
            btn.addEventListener('click', show)
            headDiv.appendChild(btn);

            accordionDiv.appendChild(headDiv);
            
            let extraDiv = document.createElement('div');
            extraDiv.classList.add('extra')
            let info = document.createElement('p');

            extraDiv.appendChild(info)
            accordionDiv.appendChild(extraDiv);

            main.appendChild(accordionDiv);
        }
    }
    function show(e){
        let id = e.currentTarget.id;
        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
		        .then(res =>{
		        	if(res.ok == false){
		        		throw new Error();
		        	}
		        	return res.json();
		        })
		        .then(details => {
                    if(document.getElementById(id).textContent == 'More'){
                        document.getElementById(id).parentElement.parentElement.children[1].children[0].textContent = details.content;
                        document.getElementById(id).parentElement.parentElement.children[1].classList.remove('extra')
                        document.getElementById(id).textContent = 'Less'
                    } else{
                        document.getElementById(id).parentElement.parentElement.children[1].classList.add('extra')
                        document.getElementById(id).textContent = 'More'
                    }
                })
		        .catch(handleError);
    }
    function handleError(err){
        console.log(err)
    }
}
solution()
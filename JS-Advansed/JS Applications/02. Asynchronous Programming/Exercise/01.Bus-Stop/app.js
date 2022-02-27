function getInfo() {
    let stopId = document.querySelector('#stopId').value;
    let stopNameDiv = document.querySelector(`#stopName`);
    let bussesList = document.querySelector('#buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
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
        bussesList.innerHTML = '';
        stopNameDiv.textContent = res.name;
		for (const key in res.buses) {
            let listItem = document.createElement('li');
            listItem.textContent = `Bus ${key} arrives in ${res.buses[key]} minutes`;

            bussesList.appendChild(listItem);
		}
    }

    function handleError(err){
        stopNameDiv.textContent = "Error";
        bussesList.innerHTML = '';
    }
}
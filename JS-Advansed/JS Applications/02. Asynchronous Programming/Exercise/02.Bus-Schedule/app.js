function solve() {
    let baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart'); 

    let infoBox = document.querySelector('.info')

    let arrivingInfo = '';

    function depart() {
        fetch(`${baseUrl}/depot`)
		.then(res =>{
			if(res.ok == false){
				throw new Error();
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);

        function handleResponse(res){
            infoBox.textContent = `Next stop ${res.name}`;
            arrivingInfo = `Arriving at ${res.name}`
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

    function arrive() {
        infoBox.textContent = arrivingInfo;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();
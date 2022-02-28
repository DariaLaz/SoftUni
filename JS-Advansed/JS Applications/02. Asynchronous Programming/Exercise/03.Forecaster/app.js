function attachEvents() {
    let location = document.getElementById('location');
    let btn = document.querySelector('#submit');

    let currDiv = document.querySelector('#current');
    let upcomingDiv = document.querySelector('#upcoming');


    btn.addEventListener("click", submit);

    function submit(){
        let urlLocations = `http://localhost:3030/jsonstore/forecaster/locations`;
        
        let locationCode = ''
        
        fetch(urlLocations)
		.then(res =>{
			if(res.ok == false){
				throw new Error();
			}
			return res.json();
		})
		.then(handleResponse)
		.catch(handleError);

        function handleResponse(res){
            locationCode = res.find(x => x.name == location.value).code;
            //get current
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
		    .then(res =>{
		    	if(res.ok == false){
		    		throw new Error();
		    	}
		    	return res.json();
		    })
		    .then(handleCurrent)
		    .catch(handleError);
            //get forecast
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
		    .then(res =>{
		    	if(res.ok == false){
		    		throw new Error();
		    	}
		    	return res.json();
		    })
		    .then(handleForecast)
		    .catch(handleError);
        }

        function handleError(err){
            console.log(err)
        }

        function handleCurrent(res){
            let condition = res.forecast.condition;
            let high = res.forecast.high;
            let low = res.forecast.low;
            let name = res.name;
            let symbol = '';
            switch(condition){
                case 'Sunny': symbol = `&#x2600;`; break;
                case 'Partly sunny': symbol = `&#x26C5;`; break;
                case 'Overcast': symbol = `&#x2601;`; break;
                case 'Rain': symbol = `&#x2614;`; break;
                case 'Degrees': symbol = `&#176;`; break;
            }

            let forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecast');

            let conditionSymSpan = document.createElement('span');
            conditionSymSpan.classList.add('symbol');
            conditionSymSpan.innerHTML = symbol;
            forecastDiv.appendChild(conditionSymSpan);

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');

            let spanCity = document.createElement('span');
            spanCity.classList.add('forecast-data');
            spanCity.textContent = name;
            conditionSpan.appendChild(spanCity);

            let spanDegs = document.createElement('span');
            spanDegs.classList.add('forecast-data');
            spanDegs.textContent = `${low}° /${high}°`;
            conditionSpan.appendChild(spanDegs);

            let spanCond = document.createElement('span');
            spanCond.classList.add('forecast-data');
            spanCond.textContent = condition;
            conditionSpan.appendChild(spanCond);

            forecastDiv.appendChild(conditionSpan);

            document.querySelector('#forecast').style.display = 'block'
            currDiv.appendChild(forecastDiv);
        }

        function handleForecast(res){
            let forecasts = res.forecast;

            let forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecast-info');
            for (const forecast of forecasts) {
                let upcomingSpan = document.createElement('span');
                upcomingSpan.classList.add('upcoming');

                let condition = forecast.condition;
                let high = forecast.high;
                let low = forecast.low;
                let symbol = '';
                switch(condition){
                    case 'Sunny': symbol = `&#x2600;`; break;
                    case 'Partly sunny': symbol = `&#x26C5;`; break;
                    case 'Overcast': symbol = `&#x2601;`; break;
                    case 'Rain': symbol = `&#x2614;`; break;
                    case 'Degrees': symbol = `&#176;`; break;
                }

                let symbolSpan = document.createElement('span');
                symbolSpan.classList.add('symbol');
                symbolSpan.innerHTML = symbol;
                upcomingSpan.appendChild(symbolSpan);

                let spanDegs = document.createElement('span');
                spanDegs.classList.add('forecast-data');
                spanDegs.textContent = `${low}° /${high}°`;
                upcomingSpan.appendChild(spanDegs);

                let spanCond = document.createElement('span');
                spanCond.classList.add('forecast-data');
                spanCond.textContent = condition;
                upcomingSpan.appendChild(spanCond);

                forecastDiv.appendChild(upcomingSpan);
            }
            upcomingDiv.appendChild(forecastDiv)
        }
    }
}

attachEvents();
function attachEventsListeners() {
    let fromTextElement = document.querySelector('#inputDistance');
    let toTextElement = document.querySelector('#outputDistance');
    let btnElement = document.querySelector('#convert');
    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254 
    }
    let onClick = () =>{
        let selectedUnitFrom  = document.getElementById('inputUnits').value;
        let distanceInM = Number(fromTextElement.value) * units[selectedUnitFrom];
        let selectedUnitTo  = document.getElementById('outputUnits').value;

        let result = distanceInM / units[selectedUnitTo]
        toTextElement.value = result
    }
    btnElement.addEventListener('click', onClick)    
}
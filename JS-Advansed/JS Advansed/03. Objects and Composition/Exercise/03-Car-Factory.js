function carFactory(car){
    if(car.wheelsize % 2 == 0){
        car.wheelsize--;
    }
    let weels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    let volume;

    if(car.power <= 90){
        car.power = 90
        volume = 1800
    } else if(car.power <= 120){
        car.power = 120
        volume = 2400
    } else {
        car.power = 200
        volume = 3500
    }
    let engine = {
        power: car.power,
        volume: volume
    }
    let carriage = {
        type: car.carriage, 
        color: car.color,
    }
    let result = {
        model: car.model,
        engine: engine,
        carriage: carriage,
        wheels: weels
    }
    return(result)
}
carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14})
carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 })

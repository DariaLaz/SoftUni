function solve(inputArray){
    let cars = new Map();
    let modelsAndProducedCars = new Map();

    for (const carInfo of inputArray) {
        let [brand, model, carProduced] = carInfo.split(' | ');

        if(!cars.has(brand)){
            cars.set(brand, {});
        }
        if(!cars.get(brand)[model]){
            cars.get(brand)[model] = 0
        }
        cars.get(brand)[model] += Number(carProduced)
    }

    for (const [brand, models] of cars) {
        console.log(brand)

        for (const model in models) {
            console.log(`###${model} -> ${models[model]}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'])
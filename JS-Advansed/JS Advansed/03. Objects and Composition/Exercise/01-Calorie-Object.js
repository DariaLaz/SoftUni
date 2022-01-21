function calorieObj(input){
    let obj = {}
    while(input.length > 0){
        obj[input.shift()] = Number(input.shift());
    }
    console.log(obj)
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
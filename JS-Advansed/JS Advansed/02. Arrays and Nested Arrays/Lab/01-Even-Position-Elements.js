function evenPositionElement(arr){
    let result = arr.filter(x => arr.indexOf(x) % 2 == 0);

    console.log(result.join(' '))
}
evenPositionElement(['20', '30', '40', '50', '60'])
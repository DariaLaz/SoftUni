function fruits(typeOfFruit, weightInGrams, pricePerKg){
    let money = weightInGrams/1000*pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${(weightInGrams/1000).toFixed(2)} kilograms ${typeOfFruit}.`)
}
fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);
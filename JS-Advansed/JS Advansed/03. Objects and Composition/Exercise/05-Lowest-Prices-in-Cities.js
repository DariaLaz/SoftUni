function lowestPricesInCities(input){
    let products = []
    for (const line of input) {
        let [townName, productName, productPrice] = line.split(' | ');
        let prod = {
            product: productName,
            price: Number(productPrice),
            town: townName
        };
        if(!products.some(x => x.product == productName)) {
            products.push(prod);
        } else{
            let check = products.find(p => p.product === productName);
            if(productPrice < check.price){
                check.price = productPrice;
                check.town = townName;
            }
        }
    }
    for(let product of products) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}

// lowestPricesInCities(['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10']
// )

lowestPricesInCities([
'Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000',
])
function storeCatalogue(input){
    let result = []
    for (const productInfo of input) {
        let [productName, productPrice] = productInfo.split(' : ');
        productPrice = Number(productPrice);
        result.push({
            product: productName,
            price: productPrice
        });
    }
    let lastLetter = '';
    result = result.sort((a, b) => (a.product).localeCompare(b.product));
    for (const product of result) {
        let currentLetter = product.product[0];
        if(lastLetter != currentLetter){
            lastLetter = currentLetter;
            console.log(currentLetter);
        }
        console.log(` ${product.product}: ${product.price}`);
    }
}
storeCatalogue(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
                'Boiler : 300','Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
storeCatalogue(['Banana : 2','Rubics Cube : 5','Raspberry P : 4999','Rolex : 100000',
            'Rollon : 10','Rali Car : 2000000','Pesho : 0.000001','Barrel : 10'])
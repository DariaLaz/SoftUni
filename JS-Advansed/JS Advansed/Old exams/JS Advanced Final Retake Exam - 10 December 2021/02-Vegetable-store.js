class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            let currentProduct = this.availableProducts.find(x => x.type == type)

            if(!currentProduct){
                let newProduct = {
                    type, 
                    quantity: Number(quantity), 
                    price: Number(price)
                }
                this.availableProducts.push(newProduct)
            } else{
                currentProduct.quantity += Number(quantity);

                if(currentProduct.price < Number(price)){
                    currentProduct.price = Number(price);
                }
            }
            
        }
        let availableProductsSet = new Set();
        for (const product of this.availableProducts) {
            availableProductsSet.add(product.type)
        }
        return `Successfully added ${Array.from(availableProductsSet).join(', ')}`
    }
    buyingVegetables(selectedProducts){
        let currentCustomerPurchrasesTotalPrice = 0;
        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            let currentProduct = this.availableProducts.find(x => x.type == type);
            if(!currentProduct){
                throw new Error(`${type} is not available in the store, your current bill is $${currentCustomerPurchrasesTotalPrice.toFixed(2)}.`)
            } else if(Number(currentProduct.quantity) < Number(quantity)){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currentCustomerPurchrasesTotalPrice.toFixed(2)}.`)
            }
            let price = currentProduct.price * Number(quantity);
            currentCustomerPurchrasesTotalPrice += price;

            currentProduct.quantity -= Number(quantity);
        }
        return `Great choice! You must pay the following amount $${currentCustomerPurchrasesTotalPrice.toFixed(2)}.`
    }
    rottingVegetable (type, quantity){
        let currentProduct = this.availableProducts.find(x => x.type == type);
        if(!currentProduct){
            throw new Error(`${type} is not available in the store.`)
        } else if(quantity > currentProduct.quantity){
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        currentProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }
    revision(){
        let result = [];
        result.push("Available vegetables:");
        for (const vegetable of this.availableProducts.sort((a, b) => a.price - b.price)) {
            result.push(`${vegetable.type}-${vegetable.quantity}-$${vegetable.price}`)
        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n')
    }
}


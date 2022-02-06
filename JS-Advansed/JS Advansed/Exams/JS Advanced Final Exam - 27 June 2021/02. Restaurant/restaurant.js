class Restaurant{
    constructor(budget){
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products){ //string arr
        for (const product of products) {
            let [prodName, prodQuantityText, prodTotalPriceText] = product.split(' ');
            let prodQuantity = Number(prodQuantityText);
            let prodTotalPrice = Number(prodTotalPriceText);

            if(prodTotalPrice <= this.budgetMoney){
                if(!this.stockProducts[prodName]){
                    this.stockProducts[prodName] = 0;
                }
                this.stockProducts[prodName] += prodQuantity;
                this.budgetMoney -= prodTotalPrice;
                this.history.push(`Successfully loaded ${prodQuantity} ${prodName}`)
            } else{
                this.history.push(`There was not enough money to load ${prodQuantity} ${prodName}`)
            }
        }
        return this.history.join('\n')
    }

    addToMenu(meal, neededProds, price){ //string - string Array - number
        if(!this.menu[meal]){
            this.menu[meal] = {
                products: neededProds,
                price
            }
            if(Object.keys(this.menu).length == 1){
                return  `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        }
        return `The ${meal} is already in the our menu, try something different.`
    }

    showTheMenu(){
        let result = [];
        if(Object.keys(this.menu).length == 0){
            return "Our menu is not ready yet, please come later...";
        }
        for (const meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        return result.join('\n')
    }

    makeTheOrder(meal){
        if(!Object.keys(this.menu).includes(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let areALlAvailable = true;
        for (const product of this.menu[meal].products) {
            let [pr, qu] = product.split(' ');
            if(!Object.keys(this.stockProducts).includes(pr) || this.stockProducts[pr] < qu){
                areALlAvailable = false
            }
        }
        if(!areALlAvailable){
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }

        for (const product of this.menu[meal].products) {
            let [pr, qu] = product.split(' ');
            this.stockProducts[pr] -= Number(qu);
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

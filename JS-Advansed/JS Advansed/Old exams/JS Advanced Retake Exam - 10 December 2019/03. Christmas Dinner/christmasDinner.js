class ChristmasDinner {
    dishes = [];
    products = [];
    guests = {};
    constructor(budget){
        if(budget < 0){
            throw new Error("The budget cannot be a negative number")
        }
        this.budget = budget;
    }
    shopping(product){
        if(this.budget >= Number(product[1])){
            this.budget -= Number(product[1]);
            this.products.push(product[0]);
            return `You have successfully bought ${product[0]}!`;
        }
        throw new Error("Not enough money to buy this product")
    }
    recipes(recipe){
        if(recipe.productsList.every(x => this.products.includes(x))){
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`
        }
        throw new Error("We do not have this product")
    }
    inviteGuests(name, dish){
        if(!this.dishes.find(x => x.recipeName == dish)){
            throw new Error("We do not have this dish")
        } else if(Object.keys(this.guests).includes(name)){
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance(){
        let result = [];
        for (const [guestName, dish] of Object.entries(this.guests)) {
            result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(x => x.recipeName == dish).productsList.join(', ')}`)
        }
        return result.join('\n')
    }
}

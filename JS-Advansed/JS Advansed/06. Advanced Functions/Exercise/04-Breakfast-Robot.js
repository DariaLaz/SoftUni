function solution(){
    let recipesLibrary = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            carbohydrate: 10,
            flavour: 10,
            fat: 10,
            protein: 10
        },
    }
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return (info) => {
        let [op, element, quantity] = info.split(' ');
        quantity = Number(quantity)
        if(op == 'report'){
            let result = [];
            for (const micrEl in microelements) {
                result.push(`${micrEl}=${microelements[micrEl]}`)
            }
            return(result.join(' '));
        } else if(op == 'restock'){
            microelements[element] += quantity;
            return('Success')
        } else if(op == 'prepare'){
            let missingElement;
            let recipe = recipesLibrary[element];
            quantity = Number(quantity);
            for (const microelement in recipe) {
                if(microelements[microelement] * quantity < recipe[microelement]){
                    missingElement = microelement;
                    break;
                }
            }
            if(!missingElement){ //succ
                for (const micrEl in recipe) {
                    microelements[micrEl] -= (recipe[micrEl] * quantity)
                }
                return('Success')
            } else{
                return(`Error: not enough ${missingElement} in stock`)
            }
        }
    }
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

let m = solution();
console.log(m('restock carbohydrate 10')) // Success 
console.log(m('restock flavour 10')) // Success 
console.log(m('prepare apple 1')) // Success 
console.log(m('restock fat 10')) // Success 
console.log(m('prepare burger 1')) // Success 
console.log(m('report'))

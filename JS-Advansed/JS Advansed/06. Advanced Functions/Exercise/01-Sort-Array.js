function solve(inputArr, order){
    function descOrder(array){
        return array.sort((a, b) => (b - a))
    }
    function ascOrder(array){
        return array.sort((a, b) => (a - b))
    }
    if(order == 'asc'){
        return (ascOrder.call(this, inputArr)) 
    } else if(order == 'desc'){
        return (descOrder.call(this, inputArr)) 
    }
}

console.log(solve([3, 1, 2, 10], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'asc'));  //[6, 7, 8, 14, 17]
console.log(solve([14, 7, 17, 6, 8], 'desc'));  //[17, 14, 8, 7, 6]


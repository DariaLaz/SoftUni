function biggestElement(matrix){
    let arrOfMaxElements = [];
    for(arr of matrix){
        let max = arr.sort((a, b) => {
            return a - b;
        }).pop();
        arrOfMaxElements.push(max);
    }
    let maxNum = arrOfMaxElements.sort((a, b) => {
        return a - b;
    }).pop();
    console.log(maxNum)
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )
function magicMatrices(matrix){
    let sumToCompareWith = matrix[0].reduce((acc, num) => (acc + num), 0);
    for (arr of matrix){
        let sum = arr.reduce((acc, num) => (acc + num), 0);
        if(sumToCompareWith != sum) {
            return false;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[j][i]
        }
        if(sumToCompareWith !== sum){
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ))
console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ))
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))

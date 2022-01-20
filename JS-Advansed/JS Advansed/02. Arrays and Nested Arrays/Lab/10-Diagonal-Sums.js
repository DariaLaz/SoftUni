function diagonalSums(matrix){
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        d1 += matrix[i][i]; 
        d2 += matrix[i][matrix.length - 1 - i]; 
    }
    console.log(`${d1} ${d2}`)
}

diagonalSums([[20, 40],
    [10, 60]]
   );
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );
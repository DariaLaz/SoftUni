function diagonalAttack(input){
    let matrix = [];
    for(let line of input){
        let row = line.split(' ');
        matrix.push(row);
    }
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        d1 += Number(matrix[i][i]); 
        d2 += Number(matrix[i][matrix.length - 1 - i]); 
    }
    if(d1 == d2){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row != col && col != matrix.length - 1 - row){
                    matrix[row][col] = d1;
                }
            }
        }
    } 
    for(arr of matrix){
        console.log(arr.join(' '));
    }
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']
)
function orbit(input){
    let width = Number(input[0]);
    let height = Number(input[1]);
    let x = Number(input[2]);
    let y = Number(input[3]);
    let matrix = [];
    for(let row = 0; row < height; row++){
        matrix[row] = [];
        for(let col = 0; col < width; col++){
            let var1 = Math.abs(row - x);
            let var2 = Math.abs(col - y);
            matrix[row][col] = Math.max(var1, var2) + 1;
        }
    }
    for(arr of matrix){
         console.log(arr.join(' '));
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);

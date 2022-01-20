function spiralMatrix(rows, cols){
    let matrix = [];
    let nums = [];
    for(let row = 0; row < rows; row++){
        matrix[row] = [];
        for(let col = 0; col < cols; col++){
            matrix[row][col] = '*';
        }
    }
    for (let i = 0; i < (rows * cols); i++) {
         nums[i] = i+1;  
    }
    let loops = 0;
    while(nums.length > 0){
        
        for(let col = loops; col <= cols - loops - 1; col++){
            matrix[loops][col] = nums.shift();
            if(nums.length == 0){break;}
        }
        if(nums.length == 0){break;}
        for(let row = loops + 1; row < rows - loops -1; row++){
            matrix[row][cols - loops-1] = nums.shift();
            if(nums.length == 0){break;}
        }
        if(nums.length == 0){break;}
        for(let col = cols - loops-1; col >= loops; col--){
            matrix[rows - 1- loops][col] = nums.shift();
            if(nums.length == 0){break;}
        }
        if(nums.length == 0){break;}
        for(let row = rows- loops - 2; row > loops ; row--){
            matrix[row][loops] = nums.shift();
            if(nums.length == 0){break;}
        }
        loops++;
    }
    for(arr of matrix){
        console.log(arr.join(' '));
    }
}
spiralMatrix(5, 5)
spiralMatrix(3, 3)
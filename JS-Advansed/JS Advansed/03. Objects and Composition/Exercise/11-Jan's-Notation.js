function jansNotation(arr){
    let nums = [];
    let operations = [];
    
    for (const item of arr) {
        if(item != '+' && item != '-' &&
            item != '*' && item != '/'){
            nums.push(item)
        } else {
            operations.push(item);
        }
    }
    let result = nums.shift();
    while(nums.length > 0 && operations.length > 0){
        let currentOp = operations.shift();
        let nextNum = nums.shift();
        switch(currentOp){
            case '+': result += nextNum; break;
            case '-': result -= nextNum; break;
            case '*': result *= nextNum; break;
            case '/': result /= nextNum; break;
        }
    }
    if(nums.length > 0){
        console.log('Error: too many operands!');
        return;
    } else if(operations.length > 0){
        console.log('Error: not enough operands!');
        return;
    }
    console.log(result);
}
jansNotation([3, 4, '+'])
jansNotation([5, 3, 4, '*', '-'])
jansNotation([31, 2, '+', 11, '/'])
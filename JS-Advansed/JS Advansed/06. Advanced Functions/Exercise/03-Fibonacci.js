function getFibonator(){
    let nums = [];
    return () => {
        if(nums.length == '0' || nums.length == '1'){
            nums.push(1);
            return(1);
        }
        let res = nums[nums.length-1] + nums[nums.length - 2];
        nums.push(res)
        return(res)
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

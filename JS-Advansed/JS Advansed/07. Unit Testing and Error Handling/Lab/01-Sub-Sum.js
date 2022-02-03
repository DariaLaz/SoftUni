function solve(nums, start, end){
    if(!Array.isArray(nums) || nums.some(isNaN)){
        return NaN;
    } 

    let startIndex = Math.max(start, 0)
    let endIndex = Math.min(end, nums.length - 1);

    let sum = nums
        .slice(startIndex, endIndex + 1)
        .reduce((a, num) => {return a + num}, 0);
    
    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300)) //150
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)) //3.3
console.log(solve([10, 'twenty', 30, 40], 0, 2)) //NaN
console.log(solve([], 1, 2)) //0
console.log(solve('text', 0, 2)) //NaN

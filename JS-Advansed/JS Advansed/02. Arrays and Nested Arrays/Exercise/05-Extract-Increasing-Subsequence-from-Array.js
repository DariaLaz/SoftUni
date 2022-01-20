function extractIncreasingSubsetFromArr(arr){
    let max = arr[0];
    let biggestNums = [];
    for(let num of arr){
        if(num >= max){
            max = num;
            biggestNums.push(max);
        }
    }
    return(biggestNums);
}
extractIncreasingSubsetFromArr([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])
extractIncreasingSubsetFromArr([1, 
    2, 
    3,
    4]
    )
extractIncreasingSubsetFromArr([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )
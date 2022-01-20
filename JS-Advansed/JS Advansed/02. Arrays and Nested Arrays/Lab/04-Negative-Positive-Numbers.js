function negativePositiveNums(arr){
    let newArr = [];
    for(let num of arr){
        if(num < 0){
            newArr.unshift(num);
        }else{
            newArr.push(num);
        }
    }
    console.log(newArr.join('\n'))
}
negativePositiveNums([7, -2, 8, 9]);
negativePositiveNums([3, -2, 0, -1]);

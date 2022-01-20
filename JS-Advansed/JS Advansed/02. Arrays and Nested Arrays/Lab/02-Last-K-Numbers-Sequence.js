function lastKNumsSeq(n, k){
    let arr = [1];
    for(let i = 1; i < n; i++){
        let sum = arr.slice(-k).reduce((acc, num) => {
            return acc + num;
        }, 0)
        arr.push(sum);
    }
    return arr;
}

lastKNumsSeq(6, 3)
lastKNumsSeq(8, 2)

function processOddPos(arr){
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i] * 2);
    }
    console.log(result.reverse().join(' '))
}
processOddPos([10, 15, 20, 25])
processOddPos([3, 0, 10, 4, 7, 3, 5])
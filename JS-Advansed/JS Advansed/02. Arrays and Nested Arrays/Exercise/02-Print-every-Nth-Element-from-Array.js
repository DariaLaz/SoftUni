function printEveryNthElFromArr(arr, num){
    let result = [];
    for (let i = 0; i < arr.length; i+=num) {
        result.push(arr[i])
    }
    return (result);
}
printEveryNthElFromArr(['5', 
'20', 
'31', 
'4', 
'20'], 
2)
printEveryNthElFromArr(['dsa',
'asd', 
'test', 
'tset'], 
2)
printEveryNthElFromArr(['1', 
'2',
'3', 
'4', 
'5'], 
6)
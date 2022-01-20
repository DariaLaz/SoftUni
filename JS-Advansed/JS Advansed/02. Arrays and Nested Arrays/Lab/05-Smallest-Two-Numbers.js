function twoSmallest(arrOfNums){
    arrOfNums.sort((a, b) => {
        return a - b;
    });
    let result = arrOfNums.slice(0, 2);
    console.log(result.join(' '));
}

twoSmallest([30, 15, 50, 5])
twoSmallest([3, 0, 10, 4, 7, 3])

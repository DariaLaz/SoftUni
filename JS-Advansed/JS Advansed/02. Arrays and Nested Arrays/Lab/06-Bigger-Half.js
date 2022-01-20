function biggerHalf(arr){
    arr.sort((a, b) => {
        return a - b;
    });
    let result = arr.slice(Math.floor(arr.length/2));
    return (result);
}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])
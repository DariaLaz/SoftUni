function add(num){
    let result = num;
    function addNum(numToAdd){
        result += numToAdd;
        return addNum;
    }
    addNum.toString = () => result;
    return addNum;
}

console.log(add(1).toString()); //1
console.log(add(1)(6)(-3).toString()); //4
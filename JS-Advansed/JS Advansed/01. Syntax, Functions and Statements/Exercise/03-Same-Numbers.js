function sameNumber(num){
    let sum = num.toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);
    let numToCompareWith = num % 10;
    let result = true;
    for(let i = 0; i < num.toString().length; i++){
        if(numToCompareWith != num % 10){
            result = false;
        }
        num = (num - num%10) / 10;
    }
    console.log(result);
    console.log(sum);
 }


sameNumber(22222222)
sameNumber(1234)
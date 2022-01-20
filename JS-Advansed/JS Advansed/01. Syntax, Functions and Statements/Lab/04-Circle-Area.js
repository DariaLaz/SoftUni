function circleArea(input){
    if(typeof(input) == 'number'){
        result = (Math.PI * input * input).toFixed(2);
    } else{
        result = `We can not calculate the circle area, because we receive a ${typeof(input)}.`;
    }
    console.log(result);
} circleArea(5);
  //circleArea('name');
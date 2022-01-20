function cookingByNums(num, op1, op2, op3, op4, op5){
    num = Number(num);
    let operations = [op1, op2, op3, op4, op5];
    operations.forEach(element => {
        switch(element){
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(num);
    });
}
cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
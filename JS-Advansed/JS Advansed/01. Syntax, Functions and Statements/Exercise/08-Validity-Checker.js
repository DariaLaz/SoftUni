function validityChecker(givenx1, giveny1, givenx2, giveny2){
    function check(x1, y1, x2, y2){
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        let isValid = false;
        if(distance == distance.toFixed(0)){
            isValid = true;
        }
        if(isValid){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid` )
        } else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid` )
        }
    }
    check(givenx1, giveny1, 0, 0);
    check(givenx2, giveny2, 0, 0);
    check(givenx1, giveny1, givenx2, giveny2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
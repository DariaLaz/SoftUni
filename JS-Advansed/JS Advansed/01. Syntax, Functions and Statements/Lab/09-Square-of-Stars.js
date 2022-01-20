function squareOfStars(rowsAndCol){
    if(rowsAndCol == undefined) rowsAndCol = 5;

    for(let i = 0; i < rowsAndCol; i++) {
        let line = '';
        for(let i = 0; i < rowsAndCol; i++){
            line+='* ';
        }
        console.log(line);
    }
}
squareOfStars(7)
function pieceOfPie(flavours, targetFl1, targetFl2){
    let result = flavours.slice(
        flavours.indexOf(targetFl1), 
        flavours.indexOf(targetFl2) + 1);
    return (result)
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
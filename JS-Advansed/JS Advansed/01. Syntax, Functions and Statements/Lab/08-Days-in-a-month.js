function daysInMonth(month, year){
    let daysInMonth = new Date(year, month,0).getDate();
    console.log(daysInMonth);
}
daysInMonth(1, 2012);
daysInMonth(2, 2021);
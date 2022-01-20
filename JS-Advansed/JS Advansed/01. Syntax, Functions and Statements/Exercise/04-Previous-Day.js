function previosDay(year, month, day){
    let date = new Date(year, month+1, day);
    date.setDate(date.getDate()-1);
    let result = `${date.getFullYear()}-${date.getMonth()-1}-${date.getDate()}`;
    console.log(result);
}
previosDay(2016, 9, 30);
previosDay(2016, 10, 1);

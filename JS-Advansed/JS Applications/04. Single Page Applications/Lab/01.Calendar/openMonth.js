export const month = function(year, month){
    document.querySelector(`#month-${year}-${renderMonth[month]}`).style.display = 'block';
}


let renderMonth = {
    'Jan': '1',
    'Feb': '2',
    'Mar': '3',
    'Apr': '4',
    'May': '5',
    'Jun': '6',
    'Jul': '7',
    'Aug': '8',
    'Sept': '9',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12',
}
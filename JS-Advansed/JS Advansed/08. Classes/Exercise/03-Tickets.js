function solution(inputArr, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let arrayOfTickets = [];

    for (const info of inputArr) {
        let [destination, price, status] = info.split('|');
        arrayOfTickets.push(new Ticket(destination, price, status));
    }
    if(criteria == 'price'){
        arrayOfTickets.sort((a, b) => a.price - b.price);
    }else{
        arrayOfTickets.sort((a,b) => a[criteria].localeCompare(b[criteria]))
    }

    return arrayOfTickets;
}

solution(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')
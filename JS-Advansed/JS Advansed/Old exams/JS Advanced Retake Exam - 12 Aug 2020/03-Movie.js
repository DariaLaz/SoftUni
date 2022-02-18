class Movie {
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
    }
    #totalProfit = 0;
    #totalSoldTickets = 0;
    newScreening(date, hall, description){
        if(this.screenings.some(x => x.date == date && x.hall == hall)){
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }
        this.screenings.push({
            date,
            hall,
            description
        })
        return `New screening of ${this.movieName} is added.`
    }
    endScreening(date, hall, soldTickets){
        let currentScreening = this.screenings.find(x => x.date == date && x.hall == hall);
        if(!currentScreening){
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        let currentProfit = Number(soldTickets) * this.ticketPrice;
        this.#totalProfit += currentProfit;
        this.#totalSoldTickets += Number(soldTickets);
        
        this.screenings.splice(this.screenings.indexOf(currentScreening), 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
    }
    toString(){
        let result = [];
        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this.#totalProfit.toFixed(0)}$`)
        result.push(`Sold Tickets: ${this.#totalSoldTickets}`)
        if(this.screenings.length > 0){
            result.push("Remaining film screenings:")
            for (const screening of this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))) {
                result.push(`${screening.hall} - ${screening.date} - ${screening.description}`)
            }
        } else{
            result.push("No more screenings!")
        }

        return result.join('\n')
    }
}

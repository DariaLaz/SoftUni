class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location
        this.priceForTheCamp = {
            child: 150, 
            student: 300, 
            collegian: 500 }
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if(!Object.keys(this.priceForTheCamp).includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        } else if(this.listOfParticipants.find(x => x.name == name)){
            return `The ${name} is already registered at the camp.`
        } else if(this.priceForTheCamp[condition] > money){
            return `The money is not enough to pay the stay at the camp.`
        } 
        this.listOfParticipants.push({
            name, 
            condition, 
            power: 100,
            wins: 0
        })
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant (name){
        if(!this.listOfParticipants.some(x => x.name == name)){
            throw new Error(`The ${name} is not registered in the camp.`);
        } 
        this.listOfParticipants.splice(this.listOfParticipants.indexOf(this.listOfParticipants.find(x => x.name == name)), 1);
        return  `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2){
        if(!this.listOfParticipants.find(x => x.name == participant1)){
            throw new Error(`Invalid entered name/s.`);
        }
        if(typeOfGame == 'WaterBalloonFights'){ //two players
            if(!this.listOfParticipants.find(x => x.name == participant2)){
                throw new Error(`Invalid entered name/s.`);
            }
            if(this.listOfParticipants.find(x => x.name == participant1).condition != 
                this.listOfParticipants.find(x => x.name == participant2).condition){
                throw new Error(`Choose players with equal condition.`);
            }
            if(this.listOfParticipants.find(x => x.name == participant1).power > this.listOfParticipants.find(x => x.name == participant2).power){
                this.listOfParticipants.find(x => x.name == participant1).wins++;
                return(`The ${participant1} is winner in the game ${typeOfGame}.`)
            } else if(this.listOfParticipants.find(x => x.name == participant1).power < 
                        this.listOfParticipants.find(x => x.name == participant2).power){
                this.listOfParticipants.find(x => x.name == participant2).wins++;
                return(`The ${participant2} is winner in the game ${typeOfGame}.`)
            } else{
                return `There is no winner.`
            }
        } else if(typeOfGame == 'Battleship'){ //one player
            this.listOfParticipants.find(x => x.name == participant1).power += 20;
            return(`The ${participant1} successfully completed the game ${typeOfGame}.`)
        }
        return `There is no winner.`

    }
    toString(){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (const participant of this.listOfParticipants) {
            if(participant){
                result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
            }
        }
        return result.join('\n')
    }
}
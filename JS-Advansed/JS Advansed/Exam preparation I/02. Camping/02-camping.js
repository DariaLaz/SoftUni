class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150, 
            student: 300, 
            collegian: 500
        }
        this.listOfParticipants = []
    }

    registerParticipant (name, condition, money){
        if(!Object.keys(this.priceForTheCamp).includes(condition)){
            throw new Error("Unsuccessful registration at the camp.");
        } else if (this.listOfParticipants.find(x => x.name == name)){
            return `The ${name} is already registered at the camp.`
        } else if(this.priceForTheCamp[condition] > Number(money)){
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant (name){
        let participantToRemove = this.listOfParticipants.find(x => x.name == name)
        if (!participantToRemove){
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants.splice(this.listOfParticipants.indexOf(participantToRemove), 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2){
        let firstParticipant = this.listOfParticipants.find(x => x.name == participant1);

        if(!firstParticipant){
            throw new Error(`Invalid entered name/s.`);
        } else if(typeOfGame == 'WaterBalloonFights'){
            let secondParticipant = this.listOfParticipants.find(x => x.name == participant2);

            if(!secondParticipant){
                throw new Error(`Invalid entered name/s.`);
            } else if(firstParticipant.condition != secondParticipant.condition){
                throw new Error(`Choose players with equal condition.`);
            }

            if(firstParticipant.power > secondParticipant.power){
                this.listOfParticipants.find(x => x.name == participant1).wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if(firstParticipant.power < secondParticipant.power) {
                this.listOfParticipants.find(x => x.name == participant2).wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else{
                return `There is no winner.`
            }
        } else if(typeOfGame == 'Battleship'){
            this.listOfParticipants.find(x => x.name == participant1).power += 20;
            return  `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }
    toString(){
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a,b) => b.wins - a.wins)
        for (const participant of this.listOfParticipants) {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        }

        return result.join('\n')
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

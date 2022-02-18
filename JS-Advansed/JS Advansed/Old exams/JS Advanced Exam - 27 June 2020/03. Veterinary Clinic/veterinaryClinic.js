class VeterinaryClinic {
    constructor (clinicName, capacity){
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
    }
    #currentClients = [];
    #profit = 0;
    newCustomer(ownerName, petName, kind, procedures){
        let currentOwner = this.clients.find(x => x.ownerName == ownerName);
        let currentClient = this.clients.find(x => x.ownerName == ownerName && x.pets.some(p => p.petName == petName))

        if(this.#currentClients.length == this.capacity){
            throw new Error("Sorry, we are not able to accept more patients!");
        }else if(this.clients.some(x => x.ownerName == ownerName && x.pets.some(p => p.petName == petName && p.procedures.length != 0))){
            throw new Error(`This pet is already registered under ${ ownerName } name! ${ petName } is on our lists, waiting for ${currentClient.pets.find(p => p.petName == petName).procedures.join(', ')}.`)
        } else{
            let pet = {
                petName,
                kind: kind.toLowerCase(),
                procedures
            }
            if(currentOwner){
                currentOwner.pets.push(pet);
            }
            else{
                let newClient = {
                    ownerName,
                    pets: [pet]
                }
                this.clients.push(newClient);
            }
            this.#currentClients.push(pet)
        }
        
        return `Welcome ${petName}!`

    }

    onLeaving (ownerName, petName) {
        let currentOwner = this.clients.find(x => x.ownerName == ownerName)
        if(!currentOwner){
            throw new Error("Sorry, there is no such client!"); 
        } 
        let currPet = currentOwner.pets.find(x => x.petName == petName)
        if(this.#currentClients.indexOf(currPet) == -1){
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.#profit += currPet.procedures.length * 500;
        currPet.procedures = [];
        this.#currentClients.splice(this.#currentClients.indexOf(currPet), 1);
        
        return `Goodbye ${petName}. Stay safe!`
    }

    toString (){
        let result = [];
        result.push(`${this.clinicName} is ${(this.#currentClients.length / this.capacity) * 100}% busy today!`)
        result.push(`Total profit: ${this.#profit.toFixed(2)}$`)
        for (const client of this.clients.sort((a,b) => a.ownerName.localeCompare(b.ownerName))) {
            result.push(`${client.ownerName} with:`)
            for (const pet of client.pets.sort((a,b) => a.petName.localeCompare(b.petName))) {
                result.push(`---${pet.petName} - a ${pet.kind} that needs: ${pet.procedures.join(', ')}`)
            }
        }
        return result.join('\n')
    }
}

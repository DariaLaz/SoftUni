class Bank {
    #bankName
    constructor(bankName){
        this.#bankName = bankName;
        this.allCustomers = []
    }
    newCustomer(customer){
        if(this.allCustomers.find(x => x.firstName == customer.firstName &&
            x.lastName == customer.lastName && x.personalId == customer.personalId)){
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
            }
        this.allCustomers.push(customer);
        return customer
    }
    depositMoney(personalId, amount){
        let currentCustomer = this.allCustomers.find(x => x.personalId == personalId);

        if(!currentCustomer){
            throw new Error("We have no customer with this ID!");
        }
        if(!this.allCustomers.find(x => x.personalId == personalId).totalMoney){
            this.allCustomers.find(x => x.personalId == personalId).totalMoney = 0
        }

        this.allCustomers.find(x => x.personalId == personalId).totalMoney += amount;

        if(!this.allCustomers.find(x => x.personalId == personalId).transactions){
            this.allCustomers.find(x => x.personalId == personalId).transactions = [];
        }
        let newAction = {
            action: 'made deposit of',
            amount
        }
        this.allCustomers.find(x => x.personalId == personalId).transactions.push(newAction)
        return `${ this.allCustomers.find(x => x.personalId == personalId).totalMoney}$`
    }
    withdrawMoney(personalId, amount){
        let currentCustomer = this.allCustomers.find(x => x.personalId == personalId);
        if(!currentCustomer){
            throw new Error("We have no customer with this ID!");
        } else if(currentCustomer.totalMoney <amount){
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }
        this.allCustomers.find(x => x.personalId == personalId).totalMoney -=amount;
        if(!this.allCustomers.find(x => x.personalId == personalId).transactions){
            this.allCustomers.find(x => x.personalId == personalId).transactions = [];
        }
        let newAction = {
            action: 'withdrew',
            amount
        }
        this.allCustomers.find(x => x.personalId == personalId).transactions.push(newAction)
        
        return `${ this.allCustomers.find(x => x.personalId == personalId).totalMoney}$`
    }
    customerInfo (personalId){
        let currentCustomer = this.allCustomers.find(x => x.personalId == personalId);
        if(!currentCustomer){
            throw new Error("We have no customer with this ID!");
        }
        let result = [];
        result.push(`Bank name: ${this.#bankName}`)
        result.push(`Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`)
        result.push(`Customer ID: ${personalId}`)
        result.push(`Total Money: ${currentCustomer.totalMoney}$`)
        result.push('Transactions:');
        for (const transaction in (currentCustomer.transactions.reverse())) {
            result.push(`${currentCustomer.transactions.length - Number(transaction)}. ${currentCustomer.firstName} ${currentCustomer.lastName} ${currentCustomer.transactions[transaction].action} ${currentCustomer.transactions[transaction].amount}$!`)
        }
        return result.join('\n')
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

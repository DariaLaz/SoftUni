class Bank {
    constructor (bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer){
        if(this.allCustomers.some(x => x.firstName == customer.firstName && x.lastName == customer.lastName)){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.totalMoney = 0;
        customer.transactions = [];
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney(personalId, amount){
        let currCustomer = this.allCustomers.find(x => x.personalId == personalId);
        if(!currCustomer){
            throw new Error('We have no customer with this ID!');
        }
        currCustomer.transactions.push(`${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`);
        currCustomer.totalMoney += amount;
        return `${currCustomer.totalMoney}$`;
    }
    withdrawMoney(personalId, amount){
        let currCustomer = this.allCustomers.find(x => x.personalId == personalId);
        if(!currCustomer){
            throw new Error('We have no customer with this ID!');
        }
        if(currCustomer.totalMoney < amount){
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`);
        }
        currCustomer.transactions.push(`${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);
        currCustomer.totalMoney -= amount;

        return `${currCustomer.totalMoney}$`
    }
    customerInfo(personalId){
        let currCustomer = this.allCustomers.find(x => x.personalId == personalId);
        if(!currCustomer){
            throw new Error('We have no customer with this ID!');
        }

        let result = [];

        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`);
        result.push(`Customer ID: ${currCustomer.personalId}`);
        result.push(`Total Money: ${currCustomer.totalMoney}$`);
        result.push(`Transactions:`);
        currCustomer.transactions.reverse();
        for (let i = 0; i < currCustomer.transactions.length; i++) {
            result.push(`${currCustomer.transactions.length - i}. ${currCustomer.transactions[i]}`);
        }

        return result.join('\n')
    }
}

const expect = require('chai').expect;
const dealership = require('./dealership');

describe("Dealership", function() {
    describe("newCarCost", function() {
        it("Should have a discount if returning an old car", function() {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equal(10000);
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.equal(16000);
            expect(dealership.newCarCost('Audi TT 8J', 30000.2)).to.equal(16000.2);

        });
        it("Should return the price if not returning an old car", function() {
            expect(dealership.newCarCost('fsd', 30000)).to.equal(30000);
            expect(dealership.newCarCost('fsd', 30000.2)).to.equal(30000.2);

        });
     });
     describe("carEquipment", function() {
        it("Should return all extras", function() {
            expect(dealership.carEquipment(['ex1', 'ex2','ex3','ex4'], [1,3])).to.deep.equal(['ex2','ex4']);
            expect(dealership.carEquipment(['ex1', 'ex2','ex3','ex4','ex5','ex6'], [1, 3, 4])).to.deep.equal(['ex2','ex4','ex5']);
        });
     });
     describe("euroCategory", function() {
        it("Should return the discount and price when category is equal or more than 4", function() {
            expect(dealership.euroCategory(10)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
        it("Should return a message when category is less than 4", function() {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
     });
});

const expect = require('chai').expect;
const numberOperations = require('./03. Number Operations_Resources');

describe("Check Numbert Operations", function() {
    describe("Power Number", function() {
        it("powNum should work properly with integers", function() {
            expect(numberOperations.powNumber(2)).to.equal(4)
            expect(numberOperations.powNumber(5)).to.equal(25)
        });
        it("powNum should work properly with float nums", function() {
            expect(numberOperations.powNumber(2.5)).to.equal(6.25)
            expect(numberOperations.powNumber(5.5)).to.equal(30.25)
        });
        it("powNum should work properly with negative nums", function() {
            expect(numberOperations.powNumber(-2)).to.equal(4)
            expect(numberOperations.powNumber(-5.5)).to.equal(30.25)
        });
     });
     describe("Number Checker", function() {
        it("Num checker should throw exeption if the input is not a Number", function() {
            expect(() => numberOperations.numberChecker('d')).to.throw('The input is not a number!')
        });
        it("Number checker should work properly with input < 100", function() {
            expect(numberOperations.numberChecker(20)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-20)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(2.4)).to.equal('The number is lower than 100!');
        });
        it("Number checker should work properly with input >= 100", function() {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(200)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(150.3)).to.equal('The number is greater or equal to 100!');
        });
     });
     describe("Sum Array", function() {
        it("Sum Array shoud work properly with num arrays", function() {
            //expect(numberOperations.sumArrays([2,3,2,1], [1,2,3,4,5])).to.equal([3, 5, 5, 5, 5]);
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1])).to.deep.equal([2, 2, 1]);
            expect(numberOperations.sumArrays([1.5, 1, 1], [1, 1])).to.deep.equal([2.5, 2, 1]);
            expect(numberOperations.sumArrays([1, 1, 1], [-1, 1])).to.deep.equal([0, 2, 1]);
        });
     });
});


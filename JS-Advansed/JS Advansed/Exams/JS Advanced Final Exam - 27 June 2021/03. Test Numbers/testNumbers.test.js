const expect = require('chai').expect;
const testNumbers = require('./testNumbers');

describe("Test numbers", function() {
    describe("sumNumber", function() {
        it("Should return undefined if the params are not Numbers", function() {
            expect(testNumbers.sumNumbers('2', 5)).to.equal(undefined)
            expect(testNumbers.sumNumbers('2.3', 5.5)).to.equal(undefined)
            expect(testNumbers.sumNumbers({}, 5)).to.equal(undefined)
            expect(testNumbers.sumNumbers(5, '5')).to.equal(undefined)
            expect(testNumbers.sumNumbers(5, 'jdhf')).to.equal(undefined)
        });
        it("Should return the sum rounded to the second num when the params are numbers", function() {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00')
            expect(testNumbers.sumNumbers(1.5, 1)).to.equal("2.50")
            expect(testNumbers.sumNumbers(1, 1.5)).to.equal("2.50")
            expect(testNumbers.sumNumbers(-1, 1.5)).to.equal("0.50")

        });
     });
     describe("numberChecker", function() {
        it("Should throw error if the input can not be parsed to number", function() {
            expect(() => testNumbers.numberChecker('dhfbhd')).to.throw('The input is not a number!')
        });
        it("Should work properly for even nums", function() {
            expect(testNumbers.numberChecker(6)).to.equal('The number is even!')
            expect(testNumbers.numberChecker(-4)).to.equal('The number is even!')
        });
        it("Should work properly for odd nums", function() {
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!')
            expect(testNumbers.numberChecker(-3)).to.equal('The number is odd!')
        });
     });
     describe("averageSumArray", function() {
        it("Should return the average sum of a num array", function() {
            expect(testNumbers.averageSumArray([1, 1, 1])).to.equal(1)
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2)
            expect(testNumbers.averageSumArray([2, 4, 6])).to.equal(4)

        });
     });
});

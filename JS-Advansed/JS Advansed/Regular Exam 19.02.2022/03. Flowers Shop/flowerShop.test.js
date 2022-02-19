const expect = require('chai').expect;
const flowerShop = require('./flowerShop');

describe("Flower Shop", function() {
    describe("calcPriceOfFlowers", function() {
        it("Should throw error if the input is not the correct type", function() {
            expect(() => flowerShop.calcPriceOfFlowers('str', 3.9, 4)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers('str', 3, 4.7)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(2, 3, -4)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(-2, 3, -4)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers([], 3, -4)).to.throw('Invalid input!')
        });
        it("Should work properly with correct input", function() {
            expect(flowerShop.calcPriceOfFlowers('str', 3, 4)).to.equal('You need $12.00 to buy str!')
            expect(flowerShop.calcPriceOfFlowers('str', 3, -4)).to.equal('You need $-12.00 to buy str!')
            expect(flowerShop.calcPriceOfFlowers('str', -3, 4)).to.equal('You need $-12.00 to buy str!')
        });

     });
     describe("checkFlowersAvailable", function() {
        it("Should work return the correct string when the flower is available", function() {
            expect(flowerShop.checkFlowersAvailable('f', ['s', 'j', 'f'])).to.equal('The f are available!')
        });
        it("Should work return the correct string when the flower is not available", function() {
            expect(flowerShop.checkFlowersAvailable('f', ['s', 'j'])).to.equal('The f are sold! You need to purchase more!')
        });
     });
     describe("sellFlowers", function() {
        it("Should throw error if the input is not correct", function() {
            expect(() => flowerShop.sellFlowers('str', 4)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(4 , 4)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(-4 , 4)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers({} , 4)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['s', 'j'] , 3)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['s', 'j'] , -1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['s', 'j'] , 2)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['s', 'j'] , 1.5)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['s', 'j'] , -1.5)).to.throw('Invalid input!')
        });
        it("Should work properly with correct input", function() {
            expect(flowerShop.sellFlowers(['s', 'j', 's', 'j', 's', 'j'], 4)).to.equal('s / j / s / j / j');
        });
     });
});

const expect = require('chai').expect;
const library = require('./library');


describe("Library", function () {
    describe("calcPriceOfBook", function () {
        it("Should throw error if the input is not the correct type", function () {
            expect(() => library.calcPriceOfBook(12, 12)).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(12, '12')).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook(12, '12')).to.throw("Invalid input")
            expect(() => library.calcPriceOfBook('12', '12')).to.throw("Invalid input")
        });
        it("Price should be lower for people born before 1980", function () {
            expect(library.calcPriceOfBook('name', 1970)).to.equal(`Price of name is 10.00`)
            expect(library.calcPriceOfBook('name', 1980)).to.equal(`Price of name is 10.00`)
        });
        it("Should work properly for people born after 1980", function () {
            expect(library.calcPriceOfBook('name', 1981)).to.equal(`Price of name is 20.00`)
            expect(library.calcPriceOfBook('name', 2000)).to.equal(`Price of name is 20.00`)
        });
    });
    describe("findBook", function () {
        it("Should throw error if the book array is empty", function () {
            expect(() => library.findBook([], 'book')).to.throw("No books currently available")
        });
        it("Should return string when the desired book is found", function () {
            expect(library.findBook(['book1', 'book2'], 'book2')).to.equal(`We found the book you want.`)
        });
        it("Should return string when the desired book is not found", function () {
            expect(library.findBook(['book1', 'book2'], 'book3')).to.equal(`The book you are looking for is not here!`)
        });
    });
    describe("arrangeTheBooks", function () {
        it("Should throw error if the count of the book is negative or not int", function () {
            expect(() => library.arrangeTheBooks(-2)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks('2')).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(2.5)).to.throw("Invalid input")
        });
        it("Should return string when the available space is equal or more than books", function () {
            expect(library.arrangeTheBooks(30)).to.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
        });
        it("Should return string when the available space is less than books", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
            expect(library.arrangeTheBooks(60)).to.equal("Insufficient space, more shelves need to be purchased.")
        });
    });
});
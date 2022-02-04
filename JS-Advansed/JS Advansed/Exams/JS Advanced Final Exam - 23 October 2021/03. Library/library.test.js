const expect = require('chai').expect;
const library = require('./library');


describe("Test Library", function() {
    describe("calcPriceOfBook", function() {
        it("Should throw error if the name is not a string", function() {
            expect(() => library.calcPriceOfBook(12, 4)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 4)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook({}, 4)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(12.2, 4)).to.throw('Invalid input');
        });
        it("Should throw error if the year is not a int", function() {
            expect(() => library.calcPriceOfBook('name', 'fsg')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('name', [])).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('name', {})).to.throw('Invalid input');
        });
        it("Should work properly for book from before 1980", () => {
            expect(library.calcPriceOfBook('name', 1980)).to.equal('Price of name is 10.00')
            expect(library.calcPriceOfBook('name', 1960)).to.equal('Price of name is 10.00')
            expect(library.calcPriceOfBook('name', 1976)).to.equal('Price of name is 10.00')
        })
        it("Should work properly for book from after 1980", () => {
            expect(library.calcPriceOfBook('name', 2000)).to.equal('Price of name is 20.00')
        })
     });
     describe("findBook", function() {
        it("Should throw error if the array is empty", function() {
            expect(() => library.findBook([], 'disiredBook')).to.throw('No books currently available');
        });
        it("Should work properly if the desiredBook is found", function() {
            expect(library.findBook(['book1', 'book2', 'book3'], 'book2')).to.equal('We found the book you want.');
        });
        it("Should work properly if the desiredBook is not found", function() {
            expect(library.findBook(['book1', 'book2', 'book3'], 'non-existing book')).to.equal('The book you are looking for is not here!');
        });
     });
     describe("arrangeTheBooks", function() {
        it("Should throw error if the input is not int or less than 0", function() {
            expect(() => library.arrangeTheBooks('fs')).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks(-3)).to.throw('Invalid input')
            expect(() => library.arrangeTheBooks(2.3)).to.throw('Invalid input')
        });
        it("Should return if the available spaces is more than the count of the books", function() {
            expect(library.arrangeTheBooks(45)).to.equal("Insufficient space, more shelves need to be purchased.")
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.")
        });
        it("Should return if the available spaces is less than the count of the books", function() {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(30)).to.equal("Great job, the books are arranged.")
        });
     });
});

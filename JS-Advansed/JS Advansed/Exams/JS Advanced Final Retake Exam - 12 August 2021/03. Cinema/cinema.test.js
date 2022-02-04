const expect = require('chai').expect;
const cinema = require('./cinema');

describe("Cinema", function() {
    describe("showMovies", function() {
        it("Should return string if the length of the array is zero", function() {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("Should return an array of available movies, separated by a comma and space", function() {
            expect(cinema.showMovies(['m1', 'm2', 'm3'])).to.equal('m1, m2, m3');
            expect(cinema.showMovies(['m1', 'm2', 'm3', 'm4'])).to.equal('m1, m2, m3, m4');

        });
     });
     describe("ticketPrice", function() {
        it("Should work properly when the projectionType exists", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it("Should throw error when the projectionType does not exists", function() {
            expect(() => cinema.ticketPrice('gf')).to.throw('Invalid projection type.');
        });
     });
     describe("swapSeatsInHall", function() {
        it("Should be unsuccessful if one of the nums is not int or non-existing", function() {
            expect(cinema.swapSeatsInHall(3.5, 6)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('2', 2.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, "5")).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('gfgf', 3.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('fgdf', 'gffd')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.1, 3)).to.equal('Unsuccessful change of seats in the hall.');
         });
         it("Should be unsuccessful if one of the nums is out of the range (0; 20]", function() {
            expect(cinema.swapSeatsInHall(35, 6)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 25)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, -5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-2, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(4, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(22, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 31)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(4, -3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-4, 3)).to.equal('Unsuccessful change of seats in the hall.');
         });
        it("Should be unsuccessful the nums are equal", function() {
            expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("Should be successful when both args are int and in the range (0; 20]", function() {
            expect(cinema.swapSeatsInHall(3, 6)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });
     });
});

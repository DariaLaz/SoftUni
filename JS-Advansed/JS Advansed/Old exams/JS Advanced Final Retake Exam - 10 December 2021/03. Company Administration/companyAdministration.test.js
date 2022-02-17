const expect = require('chai').expect;
const companyAdministration = require('./companyAdministration');

describe("Company Administration", function() {
    describe("hiringEmployee", function() {
        it("Should throw error if the position is not programmer", function() {
            expect(() => companyAdministration.hiringEmployee('name', 'invalidPosition', 3)).to.throw(`We are not looking for workers for this position.`)
            expect(() => companyAdministration.hiringEmployee('name', 'programmer', 3)).to.throw(`We are not looking for workers for this position.`)
        });
        it("Should work properly for people with more than 3 years experience", function() {
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 3)).to.equal(`name was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 3.6)).to.equal(`name was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 5)).to.equal(`name was successfully hired for the position Programmer.`)
        });
        it("Should work properly for people with less than 3 years experience", function() {
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 2)).to.equal(`name is not approved for this position.`)
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 2.4)).to.equal(`name is not approved for this position.`)
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 0)).to.equal(`name is not approved for this position.`)
        });
     });
     describe("calculateSalary", function() {
        it("Should throw error if the hours are not Number", function() {
            expect(() => companyAdministration.calculateSalary('not-a-num')).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary([])).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary({})).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary('2')).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(-8)).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(true)).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(-8.9)).to.throw("Invalid hours");
        });
        it("Should return the correct text when hours > 160", function() {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(160.5)).to.equal(3407.5);
        });
        it("Should return the correct text when hours <= 160", function() {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(150)).to.equal(2250);
            expect(companyAdministration.calculateSalary(150.5)).to.equal(2257.5);

        });
     });
     describe("firedEmployee", function() {
        it("Should throw error if the arguments are not the correct type", function() {
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -2)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -2.3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -1.3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], '2')).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 2.3)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee('e3', 0)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee({}, 0)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(1, 0)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(-1, 0)).to.throw("Invalid input")
        });
        it("Should throw error if the index is out of the range", function() {
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -2)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], -1)).to.throw("Invalid input")
            expect(() => companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 8)).to.throw("Invalid input")
        });
        it("Should work properly with correct arguments", function() {
            expect(companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 2)).to.equal("e1, e2")
            expect(companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 1)).to.equal("e1, e3")
            expect(companyAdministration.firedEmployee(['e1', 'e2', 'e3'], 0)).to.equal("e2, e3")
        });
     });
});

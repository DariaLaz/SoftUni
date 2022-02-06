const expect = require('chai').expect;
const PaymentPackage = require('./12-Payment-Package');

describe("PaymentPackage", function() {
    it("Should throw error if the name is not a non-empty string ", function() {
        expect(() => new PaymentPackage('', 30)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(2, 30)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], 30)).to.throw('Name must be a non-empty string');
    });
    it("Should throw error if the value is not a positive number or 0", function() {
        expect(() => new PaymentPackage('name', '')).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name', -2)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('name', [])).to.throw('Value must be a non-negative number');
    });
    it("Should work properly with correct input", function() {
        let pp1 = new PaymentPackage('name', 0)
        expect(pp1.name).to.equal('name');
        expect(pp1.value).to.equal(0);
        expect(pp1.VAT).to.equal(20)
        expect(pp1.active).to.equal(true)

        let pp2 = new PaymentPackage('2', 6)
        expect(pp2.name).to.equal('2');
        expect(pp2.value).to.equal(6);
        expect(pp2.VAT).to.equal(20)
        expect(pp2.active).to.equal(true)
    });
    it("Should throw error if the new value of Vat is not a non-negative number", function() {
        let pp1 = new PaymentPackage('name', 3)

        expect(() => pp1.VAT = '').to.throw('VAT must be a non-negative number');
        expect(() => pp1.VAT = -2).to.throw('VAT must be a non-negative number');
        expect(() => pp1.VAT = []).to.throw('VAT must be a non-negative number');
    });
    it("Should set the Vat to  the new value if it is a non-negative num", function() {
        let pp1 = new PaymentPackage('name', 3)
        pp1.VAT = 0
        expect(pp1.VAT).to.equal(0);
        pp1.VAT = 3
        expect(pp1.VAT).to.equal(3);
    });
    it("Should throw error if the new value of active is not a bool", function() {
        let pp1 = new PaymentPackage('name', 3)

        expect(() => pp1.active = '').to.throw('Active status must be a boolean');
        expect(() => pp1.active = -2).to.throw('Active status must be a boolean');
        expect(() => pp1.active = []).to.throw('Active status must be a boolean');
    });
    it("Should set the Active status to  the new value if it is a bool", function() {
        let pp1 = new PaymentPackage('name', 3)
        pp1.active = false
        expect(pp1.active).to.equal(false);
        pp1.active = true
        expect(pp1.active).to.equal(true);
    });
    it("toString should work properly when active is true", function() {
        let pp1 = new PaymentPackage('name', 3)
        let output = [
            `Package: ${pp1.name}`,
            `- Value (excl. VAT): ${pp1.value}`,
            `- Value (VAT ${pp1.VAT}%): ${pp1.value * (1 + pp1.VAT / 100)}`
          ];   
        expect(output.join('\n')).to.equal(pp1.toString())   
    });
    it("toString should work properly when active is false", function() {
        let pp1 = new PaymentPackage('name', 3)
        pp1.active = false
        let output = [
            `Package: ${pp1.name} (inactive)` ,
            `- Value (excl. VAT): ${pp1.value}`,
            `- Value (VAT ${pp1.VAT}%): ${pp1.value * (1 + pp1.VAT / 100)}`
          ];   
        expect(output.join('\n')).to.equal(pp1.toString())   
    });
});

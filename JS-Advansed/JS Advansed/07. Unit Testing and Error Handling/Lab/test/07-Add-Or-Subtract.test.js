const expect = require('chai').expect;
const createCalculator = require('../07-Add-Or-Subtract');


it('Should return the sum of the nums', () => {
    let calcOps = createCalculator();
    expect(calcOps).haveOwnProperty('add')
    expect(calcOps).haveOwnProperty('subtract')
    expect(calcOps).haveOwnProperty('get')
});
it('add should work properly with correct input', () =>{
    let result = createCalculator();
    result.add(2);
    expect(result.get()).to.equal(2);
})
it('subtract should work properly with correct input', () =>{
    let result = createCalculator();
    result.add(2);
    result.subtract(1)
    expect(result.get()).to.equal(1);
})
it('get should work properly with correct input', () =>{
    let result = createCalculator();
    result.add(2);
    result.add(2);
    result.subtract(1)
    expect(result.get()).to.equal(3);
})
it('add should take a number or string containing number', () => {
    let result = createCalculator();
    result.add('text');
    expect(Number.isNaN(result.get())).to.be.true;
})
it('substract should take a number or string containing number', () => {
    let result = createCalculator();
    result.add(4);
    result.subtract('text')
    expect(Number.isNaN(result.get())).to.be.true;
})
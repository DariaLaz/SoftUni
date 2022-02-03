const expect = require('chai').expect;
const isSymmetric = require('../05-Check-for-Symmetry');

it('Should return if the number arr is symmetric when it is', () => {
    let arr = [1, 2, 3, 2, 1];
    let expectedResult = true;

    let actualSum = isSymmetric(arr);

    expect(actualSum).to.equal(expectedResult);
});
it('Should return if the string arr is symmetric when it is', () => {
    let arr = ['1', '2', '3', '2', '1'];
    let expectedResult = true;

    let actualSum = isSymmetric(arr);

    expect(actualSum).to.equal(expectedResult);
});
it('Should return if the number arr is symmetric when it is not', () => {
    let arr = [1, 2, 3, 3, 1];
    let expectedResult = false;

    let actualSum = isSymmetric(arr);

    expect(actualSum).to.equal(expectedResult);
});
it('Should return if the string number arr is symmetric when it is not', () => {
    let arr = ['1', '2', '3', '3', '1'];
    let expectedResult = false;

    let actualSum = isSymmetric(arr);

    expect(actualSum).to.equal(expectedResult);
});
it('Should return if the number-string arr is symmetric when it is not', () => {
    let arr = [1, 2, 3, '2', 1];
    let expectedResult = false;

    let actualSum = isSymmetric(arr);

    expect(actualSum).to.equal(expectedResult);
});
it('Should return false if the input is not array', () => {
   expect(isSymmetric({})).to.equal(false);
   expect(isSymmetric(3)).to.equal(false);
   expect(isSymmetric('')).to.equal(false);
});

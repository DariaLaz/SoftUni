const expect = require('chai').expect;
const rgbToHexColor = require('../06-RGB-to-Hex');

it('Should return undefined if the arguments are not int', () => {
    expect(rgbToHexColor('1', '2', '3')).to.equal(undefined);
});
it('Should return undefined if the arguments are out of range', () =>{
    expect(rgbToHexColor(-1, 2, 2)).to.equal(undefined);
    expect(rgbToHexColor(1, -2, 2)).to.equal(undefined);
    expect(rgbToHexColor(1, 2, -2)).to.equal(undefined);
    expect(rgbToHexColor(256, 2, 2)).to.equal(undefined);
    expect(rgbToHexColor(2, 256, 2)).to.equal(undefined);
    expect(rgbToHexColor(2, 2, 256)).to.equal(undefined);
})
it('Should return correct result if correct arguments given', () =>{
    expect(rgbToHexColor(20, 20, 20)).to.equal('#141414')
    expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
})
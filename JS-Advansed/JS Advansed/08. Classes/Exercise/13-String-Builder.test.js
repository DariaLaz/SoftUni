const expect = require('chai').expect;
const StringBuilder = require('./13-String-Builder');

describe("StringBuilder", function() {
    it("Should throw error if the input is not a string", function() {
        expect(() => new StringBuilder(12)).to.throw('Argument must be a string')
        expect(() => new StringBuilder([])).to.throw('Argument must be a string')
        expect(() => new StringBuilder(2.2)).to.throw('Argument must be a string')
        expect(() => new StringBuilder({})).to.throw('Argument must be a string')
        expect(() => new StringBuilder(true)).to.throw('Argument must be a string')

    });
    it("String arr should be empty when the input is undefined", function() {
        expect((new StringBuilder(undefined)).toString()).to.equal('')
        expect((new StringBuilder())._stringArray).to.deep.equal([])

    });
    it("String arr shoud be array of the input when it is a string", function() {
        expect((new StringBuilder('hello'))._stringArray).to.deep.equal(['h','e','l','l','o'])
    });
    it("Should throw error when the append string is not a string", function() {
        let sb =  new StringBuilder('hello')
        expect(() => sb.append(1)).to.throw('Argument must be a string')
        expect(() => sb.append([])).to.throw('Argument must be a string')
        expect(() => sb.append(true)).to.throw('Argument must be a string')

    });
    it("Append should work properly with a string", function() {
        let sb =  new StringBuilder('hello')
        sb.append('str')
        expect(sb._stringArray).to.deep.equal(['h','e','l','l','o','s','t','r']) 
    });
    it("Should throw error when the prepend string is not a string", function() {
        let sb =  new StringBuilder('hello')
        expect(() => sb.prepend(1)).to.throw('Argument must be a string')
        expect(() => sb.prepend([])).to.throw('Argument must be a string')
        expect(() => sb.prepend(true)).to.throw('Argument must be a string')
    });
    it("Prepend should work properly with a string", function() {
        let sb =  new StringBuilder('hello')
        sb.prepend('str')
        expect(sb._stringArray).to.deep.equal(['s','t','r','h','e','l','l','o'])
    });

    it("Should throw error when the insertAt string is not a string", function() {
        let sb =  new StringBuilder('hello')
        expect(() => sb.insertAt(1, 3)).to.throw('Argument must be a string')
        expect(() => sb.insertAt([], 3)).to.throw('Argument must be a string')
        expect(() => sb.insertAt(true)).to.throw('Argument must be a string')
        expect(() => sb.insertAt(undefined,3)).to.throw('Argument must be a string')
    });
    it("insertAt should work properly with a string", function() {
        let sb =  new StringBuilder('hello')
        sb.insertAt('str', 4)
        expect(sb._stringArray).to.deep.equal(['h','e','l','l','s','t','r','o'])
    });
    it("remove should work properly", function() {
        let sb =  new StringBuilder('hello')
        sb.remove(1, 2)
        expect(sb._stringArray).to.deep.equal(['h', 'l', 'o'])
    });
    it("toString should work properly", function() {
        let sb =  new StringBuilder('hellohello')
        sb.append('hello')
        sb.append('hello')
        expect(sb.toString()).to.equal('hellohellohellohello')
    });
});

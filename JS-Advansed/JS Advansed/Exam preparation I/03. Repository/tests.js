let { Repository } = require("./solution.js");
const expect = require('chai').expect;

describe("Repository", function () {
    describe("installation", function () {
        it("Should work properly with one param", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect((repos.data) instanceof Map).to.equal(true)
            expect(typeof(repos.data)).to.equal('object')
            expect(repos.data.size).to.equal(repos.count)

        });
    });

    describe("count", function () {
        it("Should return the correct count", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(repos.data.size).to.equal(repos.count);
        });
    });

    describe("add", function () {
        it("Should throw error if the property name is missing from the entity", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(() => repos.add({name: 'fgd'})).to.throw(`Property age is missing from the entity!`);
        });
        it("Should throw error if the type of the property is not correct", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(() => repos.add({name: 'fgd', age: '3'})).to.throw(`Property age is not of correct type!`);
        });
        it("Should work properly with correct input", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(repos.add({name: 'fgd', age: 3})).to.equal(0);
            expect(repos.add({name: 'grf', age: 4})).to.equal(1);
            expect(repos.add({name: 'tgg', age: 3.6})).to.equal(2);
        });
    });
    
    describe("getId", function () {
        it("Should throw error if the id does not exist", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(() => repos.getId(2)).to.throw(`Entity with id: 2 does not exist!`);
        });
        it("Should return the entity with given id", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            repos.add({name: 'fgd', age: 1})
            repos.add({name: 'fdg', age: 2})
            repos.add({name: 'hgg', age: 3})

            expect(repos.getId(0)).to.deep.equal({name: 'fgd', age: 1});
            expect(repos.getId(1)).to.deep.equal({name: 'fdg', age: 2});
            expect(repos.getId(2)).to.deep.equal({name: 'hgg', age: 3});

        });
    });

    describe("update", function () {
        it("Should throw error if the id does not exist", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(() => repos.update(2)).to.throw(`Entity with id: 2 does not exist!`);
        });
        it("Should throw error if the property name is missing from the entity", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            repos.add({name: 'fgd', age: 1})
            
            expect(() => repos.update(0, {name: 'fgd'})).to.throw(`Property age is missing from the entity!`);
        });
        it("Should throw error if the type of the property is not correct", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            repos.add({name: 'fgd', age: 1})
            
            expect(() => repos.update(0, {name: 'fgd', age: '3'})).to.throw(`Property age is not of correct type!`);
        });
        it("Should work properly with correct input", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            repos.add({name: 'fgd', age: 1})
            repos.update(0, {name: 'changedName', age: 30})

            expect(repos.data.get(0)).to.deep.equal({name: 'changedName', age: 30});
        });
    });

    describe("del", function () {
        it("Should throw error if the id does not exist", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            expect(() => repos.del(2)).to.throw(`Entity with id: 2 does not exist!`);
        });
        it("Should delete the entity with given id", function () {
            let repos = new Repository({
                name: "string",
                age: "number"})
            repos.add({name: 'fgd', age: 1})
            repos.add({name: 'fdg', age: 2})
            repos.add({name: 'hgg', age: 3})
            
            repos.del(2)
            expect(repos.data.get(2)).to.equal(undefined);
            repos.del(0)
            expect(repos.data.get(0)).to.deep.equal(undefined);
        });
    });
});

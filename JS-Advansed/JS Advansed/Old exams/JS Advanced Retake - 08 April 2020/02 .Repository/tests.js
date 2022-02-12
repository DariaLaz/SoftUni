let { Repository } = require("./solution.js");
const expect = require('chai').expect;

describe("Repository", function () {
    describe("initialization", function () {
        it("Should be able to initialize the repository", function () {
            expect((new Repository({
                name: "string",
                age: "number",
                birthday: "object"
            })).props).to.deep.equal({
                name: "string",
                age: "number",
                birthday: "object"
            });
        });
    });
    describe("count", function () {
        it("Should work properly", function () {
            expect((new Repository({
                name: "string",
                age: "number",
                birthday: "object"
            })).count).to.equal(0);

            let r = new Repository({
                name: "string",
                age: "number"});
            r.add({name: "name1", age: 1})
            r.add({name: "name2", age: 2})
            r.add({name: "name3", age: 3})

            expect(r.count).to.equal(3);
        });
    });
    describe("add()", function () {
        it("Should throw error if the propName is missing from the entity", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            expect(() => r.add({
                name: "string"})).to.throw(`Property age is missing from the entity!`)
            expect(() => r.add({
                name1: "string",
                age: 3})).to.throw(`Property name is missing from the entity!`)
        });
        it("Should throw error if the propName is not the correct type", function () {
            let r = new Repository({
                name: "string",
                age: "number",
                birthday: "object"});
            expect(() => r.add({
                name: 2,
                age: "num",
                birthday: "object"})).to.throw(`Property name is not of correct type!`)
        });
        it("Should work properly", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            expect(r.add({
                name: "name",
                age: 2})).to.equal(0)
            r.add({
                name: "name",
                age: 2})
            expect(r.add({
                name: "name",
                age: 2})).to.equal(2)

            
        });
    });
    describe("getId()", function () {
        it("Should throw error if the id does not exist", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            expect(() => r.getId(3)).to.throw('Entity with id: 3 does not exist!')
            expect(() => r.getId(-3)).to.throw('Entity with id: -3 does not exist!')
            expect(() => r.getId(1)).to.throw('Entity with id: 1 does not exist!')
            expect(() => r.getId(0)).to.throw('Entity with id: 0 does not exist!')
        });
        it("Should work properly", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            r.add({name: "name1", age: 1})
            r.add({name: "name2", age: 2})
            r.add({name: "name3", age: 3})

            expect(r.getId(0)).to.deep.equal({name: "name1", age: 1})
            expect(r.getId(1)).to.deep.equal({name: "name2", age: 2})
            expect(r.getId(2)).to.deep.equal({name: "name3", age: 3})
        });
    });
    describe("update()", function () {
        it("Should throw error if the id does not exist", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            expect(() => r.update(3, 'new')).to.throw('Entity with id: 3 does not exist!')
            expect(() => r.update(-3, 'new')).to.throw('Entity with id: -3 does not exist!')
            expect(() => r.update(1, 'new')).to.throw('Entity with id: 1 does not exist!')
            expect(() => r.update(0, 'new')).to.throw('Entity with id: 0 does not exist!')
        });
        it("Should throw error if the propName is missing from the entity", function () {
            
            let r = new Repository({
                name: "string",
                age: "number"});
            r.add({name: "name1", age: 1})
            r.add({name: "name1", age: 1})
            expect(() => r.update(0, {
                name: "string"})).to.throw(`Property age is missing from the entity!`)
            expect(() => r.update(1, {
                name1: "string",
                age: 3})).to.throw(`Property name is missing from the entity!`)
            expect(() => r.update(1, {name: 'name'})).to.throw(`Property age is missing from the entity!`)
        });
        it("Should throw error if the propName is not the correct type", function () {
            let r = new Repository({
                name: "string",
                age: "number",});
            r.add({name: "name1", age: 1})
            r.add({name: "name1", age: 1})
            expect(() => r.update(1, {
                name: 2,
                age: 2})).to.throw(TypeError, `Property name is not of correct type!`)
        });
        it("Should work properly", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            r.add({name: "name1", age: 1})
            r.add({name: "name1", age: 1})

            r.update(1, {name: "new name", age: 2});
            expect(r.getId(1)).to.deep.equal({name: "new name", age: 2});
        });
    });
    describe("del()", function () {
        it("Should throw error if the id does not exist", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            r.add({name: "name1", age: 1})

            expect(() => r.del(3)).to.throw('Entity with id: 3 does not exist!')
            expect(() => r.del(-3)).to.throw('Entity with id: -3 does not exist!')
            expect(() => r.del(1)).to.throw('Entity with id: 1 does not exist!')
        });
        it("Should work properly", function () {
            let r = new Repository({
                name: "string",
                age: "number"});
            r.add({name: "name1", age: 1})
            r.add({name: "name2", age: 2})
            r.add({name: "name3", age: 3})
            r.del(2)

            expect(r.data.has(2)).to.equal(false)
        });
    });
});



// •	Instantiation with one parameter - The props parameter, which is used to validate entities 
//added to the repository and is an object, and an additional properties called data 
//( Map that holds added entities).

// •	Getter count – returns the number of stored entities


// •	Function add(entity) – adds an entity to the data; if successful Store entities in a Map where 
//the key is the ID and the value is the entity and returns the resulting ID. Before an entity is
// added to the repository, it should be validated against the props object – it needs to have all of the 
//properties that the props object has and their values must be of the specified type. If any property is
// missing, you should throw an Error with message: "Property {propName} is missing from the entity!". 
//If the property is present, but is of incorrect type, throw a TypeError with message "Property 
//{propertyName} is of incorrect type!".

// •	Function getId(id) – returns the entity with given ID


// •	Function update(id, newEntity) – replaces the entity with the given id with the new entity. 
//If the id does not exist in the data throw an Error with message "Entity with id: {id} does not exist!".
// Validate the new entity with the same validations and replace the old one with the new one.

// •	Function del(id) – deletes an entity by given id. If the id does not exist in the data throw an 
//Error with message "Entity with id: {id} does not exist!".

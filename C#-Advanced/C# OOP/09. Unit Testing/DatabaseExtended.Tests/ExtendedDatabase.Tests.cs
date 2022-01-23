using ExtendedDatabase;
using NUnit.Framework;
using System;

namespace Tests
{
    public class ExtendedDatabaseTests
    {

        private Person[] persons;
        private ExtendedDatabase.ExtendedDatabase db;
        [SetUp]
        public void Setup()
        {
            var person1 = new Person(1, "Username1");
            var person2 = new Person(2, "Username2");
            var person3 = new Person(3, "Username3");
            var person4 = new Person(4, "Username4");
            var person5 = new Person(5, "Username5");
            var person6 = new Person(6, "Username6");
            var person7 = new Person(7, "Username7");
            var person8 = new Person(8, "Username8");
            var person9 = new Person(9, "Username9");
            var person10= new Person(10, "Username10");
            var person11= new Person(11, "Username11");
            var person12= new Person(12, "Username12");
            var person13= new Person(13, "Username13");
            var person14= new Person(14, "Username14");
            var person15= new Person(15, "Username15");

            persons = new Person[]
                {
                    person1,
                    person2,
                    person3,
                    person4,
                    person5,
                    person6,
                    person7,
                    person8,
                    person9,
                    person10,
                    person11,
                    person12,
                    person13,
                    person14,
                    person15
                };

            db = new ExtendedDatabase.ExtendedDatabase(persons);
        }

        [Test]
        public void AddMethodThrowsExeptionWhenTheUsernameAlreadyExists()
        {
            var personToAdd = new Person(20, "Username1");
            Assert.Throws<InvalidOperationException>(
                () => db.Add(personToAdd));
        }

        [Test]
        public void AddMethodThrowsExeptionWhenTheIdAlreadyExists()
        {
            var personToAdd = new Person(1, "user");
            Assert.Throws<InvalidOperationException>(
                () => db.Add(personToAdd));
        }
        [Test]
        public void AddMethodShouldBeCaseSensitive()
        {
            var personToAdd = new Person(16, "Username16");
            db.Add(personToAdd);
            Assert.Throws<InvalidOperationException>
                (() => db.FindByUsername("username16"));
        }
        [Test]
        public void AddMethodShouldWorkCorrectlyWithIdAndUsernameDoNotExist()
        {
            var personToAdd = new Person(20, "username88");
            db.Add(personToAdd);
            Assert.AreEqual(16, db.Count);
        }
        [Test]
        public void FindByUsernameMethodShouldThrowExceptionWhenTheUsernameDoesNotExist()
        {
            Assert.Throws<InvalidOperationException>(
                () => db.FindByUsername("usernameThatDoesNotExist"));
        }
        [Test]
        [TestCase("")]
        [TestCase(null)]
        public void FindByUsernameMethodShouldThrowExceptionWhenTheUsernameIsNull(string element)
        {
            Assert.Throws<ArgumentNullException>(
                () => db.FindByUsername(element));
        }

        [Test]
        public void FindByIdMethodShouldThrowExceptionWhenTheIdDoesNotExist()
        {
            Assert.Throws<InvalidOperationException>(
                () => db.FindById(100));
        }
        [Test]
        public void FindByIdMethodShouldThrowExceptionWhenTheIdIsNegative()
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                () => db.FindById(-6));
        }
        [Test]
        public void FindByUserNameShouldWorkCorrectlyWithExistingUsername()
        {
            var personToAdd = new Person(16, "Username");
            db.Add(personToAdd);
            Assert.AreEqual(personToAdd, db.FindByUsername("Username"));
        }
        [Test]
        public void FindByIdShouldWorkCorrectlyWithExistingId()
        {
            var personToAdd = new Person(16, "Username");
            db.Add(personToAdd);
            Assert.AreEqual(personToAdd, db.FindById(16));
        }
        [Test]
        public void RemoveMethodShouldWorkCorrectlyWhenElementsBetween0and16()
        {
            db.Remove();
            db.Remove();
            db.Remove();
            Assert.AreEqual(12, db.Count);
        }
        // to to for correctly working findbyusername, findbyid, remove




        [Test]
        public void ConstructorShouldReturZeroElementsCount()
        {
            db = new ExtendedDatabase.ExtendedDatabase();
            Assert.AreEqual(0, db.Count);
        }
        [Test]
        public void ConstructorShouldWorkCorrectlyLessThan16()
        {
            Assert.AreEqual(15, db.Count);
        }

        [Test]
        public void AddMethodShouldThrowExeptionWhenThereAre16Elements()
        {
            var person = new Person(16, "16");
            db.Add(person);
            Assert.Throws<InvalidOperationException>
                (() => db.Add(person));
        }

        [Test]
        public void RemoveMethodShouldThrowExeptionWhenTheElementsAre0()
        {
            db = new ExtendedDatabase.ExtendedDatabase();
            Assert.Throws<InvalidOperationException>
                (() => db.Remove());
        }
        [Test]
        public void RemoveMethodShouldWorkCorrectlyWhenElementsBetween1And16()
        {
            
            db.Remove();
            db.Remove();
            db.Remove();
            db.Remove();

            Assert.AreEqual(11, db.Count);
        }

    }
}
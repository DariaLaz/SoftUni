using NUnit.Framework;
using System;
using System.Linq;

namespace Tests
{
    public class DatabaseTests
    {
        [Test]
        public void ConstructorShouldReturZeroElementsCount()
        {
            var db = new Database(); 
            Assert.AreEqual(0, db.Count);
        }
        [Test]
        public void ConstructorShouldThrowExeptionIfElementsMoreThan16()
        {
            var elements = Enumerable.Range(1, 24).ToArray();
            Assert.Throws<InvalidOperationException>
                (() => new Database(elements));
        }
        [Test]
        public void ConstructorShouldWorkCorrectlyLessThan16()
        {
            var db = new Database(new int[5]);
            Assert.AreEqual(5, db.Count);
        }

        public void ConstructorShouldWorkCorrectlyWith16Elements()
        {
            var db = new Database();
            Assert.AreEqual(16, db.Count);
        }

        [Test]
        public void AddMethodScholWorkCorrectlyWithLestThan16Elements()
        {
            var db = new Database();
            db.Add(1);
            db.Add(2);
            db.Add(3);

            Assert.AreEqual(3, db.Count);
        }
        [Test]
        public void AddMethodShouldThrowExeptionWhenThereAre16Elements()
        {
            var db = new Database(new int[16]);

            Assert.Throws<InvalidOperationException>
                (() => db.Add(2));
        }

        [Test]
        public void RemoveMethodShouldThrowExeptionWhenTheElementsAre0()
        {
            var db = new Database();
            Assert.Throws<InvalidOperationException>
                (() => db.Remove());
        }
        [Test]
        public void RemoveMethodScholWorkCorrectlyWhenElementsBetween1And16()
        {
            var db = new Database(new int[6]);
            db.Remove();
            db.Remove();
            db.Remove();
            db.Remove();

            Assert.AreEqual(2, db.Count);
        }

        [Test]
        public void FetchMethodShouldReturnElementsAsAnArray()
        {
            var array = new int[]
                { 1,2,3,4,5,6,7,8,9,0};
            var db = new Database(array);
            Assert.AreEqual(array, db.Fetch());
        }
    }
}
using NUnit.Framework;
using System;

namespace Gyms.Tests
{
    [TestFixture]
    public class GymsTests
    {
        [Test]
        public void GymCtorShouldWorkProperly()
        {
            var gym = new Gym("name", 10);
            Assert.True(gym.Name == "name" && gym.Capacity == 10 && gym.Count == 0);
        }
        [Test]
        public void AthleteCtorShoudWorkProperly()
        {
            var athlete = new Athlete("name");
            Assert.True(athlete.FullName == "name" && athlete.IsInjured == false);
        }

        [Test]
        [TestCase(null)]
        [TestCase("")]
        public void GymNameShouldThrowExceptionIfNullOrEmpty(string name)
        {
            Assert.Throws<ArgumentNullException>(() => new Gym(name, 10));
        }
        [Test]
        public void GymCapacityShouldThrowExceptionIfBelowZero()
        {
            Assert.Throws<ArgumentException>(() => new Gym("name", -3));
        }
        [Test]
        public void GymCountShouldReturnTheCorrectCountOfAthletes()
        {
            var gym = new Gym("name", 10);
            gym.AddAthlete(new Athlete("name1"));
            gym.AddAthlete(new Athlete("name2"));
            gym.AddAthlete(new Athlete("name3"));

            Assert.AreEqual(3, gym.Count);
        }
        [Test]
        public void AddAthleteShouldThrowExceptionWhenTheCapacityIsReached()
        {
            var gym = new Gym("name", 3);
            gym.AddAthlete(new Athlete("name1"));
            gym.AddAthlete(new Athlete("name2"));
            gym.AddAthlete(new Athlete("name3"));

            Assert.Throws<InvalidOperationException>(() => gym.AddAthlete(new Athlete("name4")));
        }
        [Test]
        public void AddAthleteShouldWorkProperly()
        {
            var gym = new Gym("name", 10);
            gym.AddAthlete(new Athlete("name1"));

            Assert.AreEqual(1, gym.Count);
        }
        [Test]
        [TestCase(null)]
        [TestCase("")]
        [TestCase("nonExistingName")]
        public void RemoveAthleteShouldThrowExceptionWhenTheGivenNameDoesNotExist(string name)
        {
            var gym = new Gym("name", 10);
            gym.AddAthlete(new Athlete("name1"));

            Assert.Throws<InvalidOperationException>(() => gym.RemoveAthlete("nonExistingName"));
        }
        [Test]
        public void RemoveAthleteShouldWordProperly()
        {
            var gym = new Gym("name", 10);
            gym.AddAthlete(new Athlete("name1"));
            Assert.AreEqual(1, gym.Count);
            gym.RemoveAthlete("name1");
            Assert.AreEqual(0, gym.Count);
        }
        [Test]
        [TestCase(null)]
        [TestCase("")]
        [TestCase("nonExistingName")]
        public void InjureAthleteShouldThrowExceptionWhenTheGivenNameDoesNotExist(string name)
        {
            var gym = new Gym("name", 10);
            gym.AddAthlete(new Athlete("name1"));

            Assert.Throws<InvalidOperationException>(() => gym.InjureAthlete(name));
        }
        [Test]
        public void InjureAthleteShouldWorkProperly()
        {
            var gym = new Gym("name", 10);
            var atl = new Athlete("name1");
            gym.AddAthlete(atl);
            gym.InjureAthlete("name1");

            Assert.True(atl.IsInjured);
        }
        public void InjureAthleteShouldReturnTheAthlete()
        {
            var gym = new Gym("name", 10);
            var atl = new Athlete("name1");
            gym.AddAthlete(atl);
            
            Assert.AreEqual(atl, gym.InjureAthlete("name1"));
        }

        [Test]
        public void ReportShouldWorkProperly()
        {
            var gym = new Gym("name", 3);
            gym.AddAthlete(new Athlete("name1"));
            gym.AddAthlete(new Athlete("name2"));
            gym.AddAthlete(new Athlete("name3"));
            gym.InjureAthlete("name2");
            var res = "Active athletes at name: name1, name3";

            Assert.AreEqual(res, gym.Report());
        }
    }
}

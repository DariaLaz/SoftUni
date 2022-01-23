using FightingArena;
using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace Tests
{
    public class ArenaTests
    {

        [Test]
        public void CannotEnrollAlreadyExistingWarrior()
        {
            var warrior = new Warrior("name", 100, 50);
            var arena = new Arena();
            arena.Enroll(warrior);
            Assert.Throws<InvalidOperationException>(() => arena.Enroll(warrior));
        }
        [Test]
        public void WarriorThatIsNotEnrolledCannotFight()
        {
            var warrior = new Warrior("name", 100, 50);
            var arena = new Arena();
            arena.Enroll(warrior);
            Assert.Throws<InvalidOperationException>(() => arena.Fight("name", "nonExistingName"));
        }
        [Test]
        public void EnrollShoulWorkProperlyWithCorrectArguments()
        {
            var firstWarrior = new Warrior("name", 100, 50);
            var secondWarrior = new Warrior("name1", 100, 50);
            var arena = new Arena();
            arena.Enroll(firstWarrior);
            arena.Enroll(secondWarrior);
            Assert.AreEqual(2, arena.Count);
        }
        [Test]
        public void EnrollShouldReturnList()
        {
            var firstWarrior = new Warrior("name", 100, 50);
            var secondWarrior = new Warrior("name1", 100, 50);
            var arena = new Arena();
            arena.Enroll(firstWarrior);
            arena.Enroll(secondWarrior);
            var listOfWarriors = new List<Warrior>();
            listOfWarriors.Add(firstWarrior);
            listOfWarriors.Add(secondWarrior);
            Assert.AreEqual(listOfWarriors, arena.Warriors);
        }
        [Test]
        public void FightMethodShoulWorkProperlyWithCorrectArguments()
        {
            var warrior = new Warrior("name", 10, 50);
            var warriorToBeAttacked = new Warrior("name1", 10, 40);
            var arena = new Arena();
            arena.Enroll(warrior);
            arena.Enroll(warriorToBeAttacked);
            arena.Fight("name", "name1");
            Assert.Multiple(() =>
            {
                Assert.AreEqual(30, warriorToBeAttacked.HP);
                Assert.AreEqual(40, warrior.HP);
            }
            );
        }
        [Test]
        public void FightMethodShouldThrowExceptionIfTheAttackerIsMissingFromTheList()
        {
            var arena = new Arena();
            var defender = new Warrior("name1", 10, 40);
            arena.Enroll(defender);
            Assert.Throws<InvalidOperationException>(() => arena.Fight("name", "name1"));
        }
        [Test]
        public void FightMethodShouldThrowExceptionIfTheDefenderIsMissingFromTheList()
        {
            var arena = new Arena();
            var attacker = new Warrior("name", 10, 40);
            arena.Enroll(attacker);
            Assert.Throws<InvalidOperationException>(() => arena.Fight("name", "name1"));
        }
        [Test]
        public void ConstructorShouldWorkCorrectly()
        {
            var arena = new Arena();
            var listOfWarriors = new List<Warrior>();
            Assert.AreEqual(listOfWarriors, arena.Warriors);
        }
    }
}

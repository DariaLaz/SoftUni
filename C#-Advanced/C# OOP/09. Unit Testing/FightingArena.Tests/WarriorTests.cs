using FightingArena;
using NUnit.Framework;
using System;

namespace Tests
{
    public class WarriorTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        [TestCase(" ")]
        [TestCase("")]
        [TestCase(null)]
        public void WarriorNameCannotBeNullEmptyOrWhitespace(string name)
        {
            Assert.Throws<ArgumentException>(() => new Warrior(name, 100, 100));
        }
        [Test]
        [TestCase(0)]
        [TestCase(-9)]
        public void DamageCannotBeZeroOrNegative(int damage)
        {
            Assert.Throws<ArgumentException>(() => new Warrior("name", damage, 100));
        }
        [Test]
        [TestCase(-8)]
        [TestCase(-9)]
        public void NPCannotBeNegative(int hp)
        {
            Assert.Throws<ArgumentException>(() => new Warrior("name", 100, hp));
        }

        [Test]
        public void WarriorCannotAttackWhenHPBelow30()
        {
            var warrior = new Warrior("name", 10, 15);
            var warriorToBeAttacked = new Warrior("name", 10, 40);
            Assert.Throws<InvalidOperationException>(() => warrior.Attack(warriorToBeAttacked));
        }
        [Test]
        public void WarriorCannotAttackAnOpponentWithLessThan30HP()
        {
            var warrior = new Warrior("name", 10, 50);
            var warriorToBeAttacked = new Warrior("name", 10, 10);
            Assert.Throws<InvalidOperationException>(() => warrior.Attack(warriorToBeAttacked));
        }
        [Test]
        public void WarriorCannotAttackStrongerEnemies()
        {
            var attacker = new Warrior("name", 10, 50);
            var defender = new Warrior("name", 60, 100);
            Assert.Throws<InvalidOperationException>(() => attacker.Attack(defender));
        }
        [Test]
        public void ConstructorsShouldWorkCorrectly()
        {
            var warrior = new Warrior("name", 100, 50);
            var isCorrect = warrior.Name == "name" && warrior.Damage == 100 && warrior.HP == 50;
            Assert.True(isCorrect);
        }
    }
}
using CarManager;
using NUnit.Framework;
using System;

namespace Tests
{
    public class CarTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void ConstructorShouldWorkCorrectlyWithParameters()
        {
            var car = new Car("make", "model", 3, 10);
            Assert.Multiple(() =>
            {
                Assert.AreEqual(car.Make, "make");
                Assert.AreEqual(car.Model, "model");
                Assert.AreEqual(car.FuelAmount, 0);
                Assert.AreEqual(car.FuelConsumption, 3);
                Assert.AreEqual(car.FuelCapacity, 10);
            }
            );
        }
        [Test]
        [TestCase(null)]
        [TestCase("")]
        public void MakeSetterShouldThrowExceptionWhenNullOrEmpty(string element)
        {
            Assert.Throws<ArgumentException>(() => 
                new Car(element, "model", 0.0, 0.0));
        }
        [Test]
        public void MakeGetterShouldWork()
        {
            var make = "make";
            var car = new Car(make, "model", 3, 10);
            Assert.AreEqual(make, car.Make);
        }
        [Test]
        [TestCase(null)]
        [TestCase("")]
        public void ModelSetterShouldThrowExceptionWhenNullOrEmpty(string element)
        {
            Assert.Throws<ArgumentException>(() => 
                new Car("make", element, 0.0, 0.0));
        }
        [Test]
        public void ModelGetterShouldWork()
        {
            var model = "model";
            var car = new Car("make", model, 3, 10);
            Assert.AreEqual(model, car.Model);
        }
        [Test]
        [TestCase(0)]
        [TestCase(-3)]
        public void FuelConsumptionSetterShouldThrowExceptionWhenNegative(int element)
        {
            Assert.Throws<ArgumentException>(() =>
                new Car("make", "model", element, 0.0));
        }
        [Test]
        public void FuelConsumptionGetterShouldWork()
        {
            var fuelConsumption = 3;
            var car = new Car("make", "model", fuelConsumption, 10);
            Assert.AreEqual(fuelConsumption, car.FuelConsumption);
        }
        [Test]
        public void FuelCapacitySetterShouldThrowExceptionWhenNegative()
        {
            Assert.Throws<ArgumentException>(() =>
                new Car("make", "model", 0.0, -3));
        }
        [Test]
        public void FuelCapacityGetterShouldWork()
        {
            var fuelCapacity = 10;
            var car = new Car("make", "model", 3, fuelCapacity);
            Assert.AreEqual(fuelCapacity, car.FuelCapacity);
        }
        [Test]
        [TestCase(-5)]
        [TestCase(null)]
        public void FuelToRefuelShouldNotBeNullorNegative(double fuelToRefuel)
        {
            var car = new Car("make", "model", 3, 10);
            Assert.Throws<ArgumentException>(() => car.Refuel(fuelToRefuel));
        }
        [Test]
        [TestCase(6)]
        public void FuelToRefuelShouldWorkWithCorrectInput(double fuelToRefuel)
        {
            var car = new Car("make", "model", 3, 10);
            car.Refuel(fuelToRefuel);
            Assert.AreEqual(fuelToRefuel, car.FuelAmount);
        }
        [Test]
        [TestCase(11)]
        public void FuelToRefuelShouldIncreaseToMaxCapacity(double fuelToRefuel)
        {
            var car = new Car("make", "model", 3, 10);
            car.Refuel(fuelToRefuel);
            Assert.AreEqual(car.FuelCapacity, car.FuelAmount);
        }
        [Test]
        [TestCase(1)]
        public void DriveMethodShouldThrowExceptionWhenTheFuelIsNotEnough(double distance)
        {
            var car = new Car("make", "model", 3, 10);
            Assert.Throws<InvalidOperationException>(() => car.Drive(distance));
        }
        [Test]
        public void DriveMethodShouldLowerTheFuelAmount()
        {
            var car = new Car("make", "model", 10, 100);
            car.Refuel(100);
            car.Drive(1000);

            Assert.AreEqual(0, car.FuelAmount);
        }
        [Test]
        public void DriveMethodShouldWorkCorrectly()
        {
            var car = new Car("make", "model", 5, 100);
            car.Refuel(100);
            car.Drive(1000);

            Assert.AreEqual(50, car.FuelAmount);
        }
        [Test]
        public void ConstructorsShouldWorkCorrectly()
        {
            var car = new Car("make", "model", 5, 100);
            bool isCorrect = car.Make == "make" &&
                car.Model == "model" && car.FuelConsumption == 5 &&
                car.FuelCapacity == 100;
            Assert.True(isCorrect);
        }

    }
}
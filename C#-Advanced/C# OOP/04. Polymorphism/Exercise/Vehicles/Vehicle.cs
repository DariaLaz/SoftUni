using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public abstract class Vehicle
    {
        protected Vehicle(double fuelQuantity, double fuelConsumptionInLitersPerKm, double tankCapacity)
        {
            if (fuelQuantity > tankCapacity)
            {
                fuelQuantity = tankCapacity;
            }
            FuelQuantity = fuelQuantity;
            FuelConsumptionInLitersPerKm = fuelConsumptionInLitersPerKm;
            TankCapacity = tankCapacity;
        }

        public double FuelQuantity { get; set; }
        public double FuelConsumptionInLitersPerKm { get; set; }
        public double TankCapacity { get; set; }
        public virtual void Drive(double distance)
        {
            FuelQuantity -= (distance * FuelConsumptionInLitersPerKm);
        }
        public virtual void RefeledAmountOfFuel(double litersOfFuel)
        {
            if (litersOfFuel <= 0)
            {
                Console.WriteLine("Fuel must be a positive number");
            }
            else if (FuelQuantity + litersOfFuel > TankCapacity)
            {
                Console.WriteLine($"Cannot fit {litersOfFuel} fuel in the tank");
            }
            else
            {
                FuelQuantity += litersOfFuel;
            }
        }

    }
}

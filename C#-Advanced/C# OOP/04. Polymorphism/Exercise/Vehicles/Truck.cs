using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public class Truck : Vehicle
    {
        public Truck(double fuelQuantity, double fuelConsumptionInLitersPerKm, double tankCapacity)
            : base(fuelQuantity, fuelConsumptionInLitersPerKm + 1.6, tankCapacity)
        {
        }

        public override void Drive(double distance)
        {
            FuelQuantity -= (distance * FuelConsumptionInLitersPerKm);
        }

        public override void RefeledAmountOfFuel(double litersOfFuel)
        {
            litersOfFuel *= 0.95;
            if (litersOfFuel <= 0)
            {
                Console.WriteLine("Fuel must be a positive number");
            }
            else if (FuelQuantity + litersOfFuel > TankCapacity)
            {
                Console.WriteLine($"Cannot fit {litersOfFuel/0.95} fuel in the tank");
            }
            else
            {
                FuelQuantity += litersOfFuel;
            }
        }
    }
}

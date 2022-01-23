using System;
using System.Collections.Generic;
using System.Text;

namespace Speed_Racing
{
    class Car
    {
        public string Model { get; set; }
        public double FuelAmount { get; set; }
        public double FuelConsumptionPerKilometer { get; set; }
        public double TravelledDistance { get; set; }

        public void Drive(int amountOfKm)
        {
            if (amountOfKm * FuelConsumptionPerKilometer <= FuelAmount)
            {
                FuelAmount -= amountOfKm * FuelConsumptionPerKilometer;
                TravelledDistance += amountOfKm;
            }
            else
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
        }
    }
}

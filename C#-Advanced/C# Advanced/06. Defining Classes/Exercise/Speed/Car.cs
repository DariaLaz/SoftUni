using System;
using System.Collections.Generic;
using System.Text;

namespace Speed
{
    class Car
    {
        private string model;
        private double fuelAmount;
        private double fuelConsumptionPerKm;
        private double travelledDistance;
        public string Model 
        {
            get
            {
                return model;
            }
            set
            {
                model = value;
            } 
        }

        public double FuelAmount
        {
            get
            {
                return fuelAmount;
            }
            set
            {
                fuelAmount = value;
            }
        }

        public double FuelConsumptionPerKilometer
        {
            get
            {
                return fuelConsumptionPerKm;
            }
            set
            {
                fuelConsumptionPerKm = value;
            }
        }

        public double TravelledDistance
        {
            get
            {
                return travelledDistance;
            }
            set
            {
                travelledDistance = value;
            }
        }

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

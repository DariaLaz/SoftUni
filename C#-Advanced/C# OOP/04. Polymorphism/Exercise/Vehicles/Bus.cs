using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles
{
    public class Bus : Vehicle
    {
        private bool isAirConditionOn = true;
        public Bus(double fuelQuantity, double fuelConsumption, double tankCapacity)
            : base(fuelQuantity, fuelConsumption, tankCapacity)
        {
            if (this.isAirConditionOn)
            {
                FuelConsumptionInLitersPerKm += 1.4;
            }
        }
        public override void Drive(double distance)
        {
            isAirConditionOn = true;
            base.Drive(distance);
        }
        public void DriveEmpty(double distance)
        {
            isAirConditionOn = false;

            base.Drive(distance);
        }
    }
}

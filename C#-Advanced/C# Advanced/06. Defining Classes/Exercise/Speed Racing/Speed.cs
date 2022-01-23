using System;
using System.Collections.Generic;
using System.Linq;

namespace Speed_Racing
{
    class Speed
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var listOfCars = new List<Car>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split();
                var car = new Car();
                car.Model = input[0];
                car.FuelAmount = double.Parse(input[1]);
                car.FuelConsumptionPerKilometer = double.Parse(input[2]);
                car.TravelledDistance = 0;

                listOfCars.Add(car);
            }

            while (true)
            {
                var command = Console.ReadLine().Split();
                if (command[0] == "End")
                {
                    break;
                }
                else if (command[0] == "Drive")
                {
                    var carModel = command[1];
                    var amountOfKm = int.Parse(command[2]);

                    listOfCars.FirstOrDefault(x => x.Model == carModel).Drive(amountOfKm);
                }                
            }


            foreach (var car in listOfCars)
            {
                Console.WriteLine($"{car.Model} {car.FuelAmount:f2} {car.TravelledDistance}");
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;

namespace CarManufacturer
{
    public class StartUp
    {
        
        static void Main(string[] args)
        {

            var listOfTires = new List<Tire[]>();
            var engineList = new List<Engine>();
            var listOfCars = new List<Car>();

            while (true)
            {
                var notSplitInput = Console.ReadLine();
                if (notSplitInput == "No more tires")
                {
                    break;
                }
                var input = notSplitInput.Split(" ");
                var tArr = new Tire[input.Length/2];
                var ind = 0;
                for (int i = 0; i < input.Length; i+=2)
                {
                    var tire = new Tire(int.Parse(input[i]), double.Parse(input[i+1]));
                    tArr[ind] = tire;
                    ind++;
                }

                listOfTires.Add(tArr);
                
            }

            while (true)
            {
                var input = Console.ReadLine().Split(" ");
                if (input[0] == "Engines")
                {
                    break;
                }

                var engine = new Engine(int.Parse(input[0]), double.Parse(input[1]));

                engineList.Add(engine);
            }

            while (true)
            {
                var input = Console.ReadLine().Split(" ");
                if (input[0] == "Show")
                {
                    break;
                }

                var car = new Car();
                car.Make = input[0];
                car.Model = input[1];
                car.Year = int.Parse(input[2]);
                car.FuelQuantity = double.Parse(input[3]);
                car.FuelConsumption = double.Parse(input[4]);
                car.Engine = engineList[int.Parse(input[5])];
                car.Tires = listOfTires[int.Parse(input[6])];
                
                listOfCars.Add(car);
            }

            foreach (var car in listOfCars.Where(x => x.Year >= 2017)
                .Where(x => x.Engine.HorsePower > 330))
            {
                car.Drive(0.2);

                var sumOfTirePressure = 0.0;
                foreach (var tire in car.Tires)
                {
                    sumOfTirePressure += tire.Pressure;
                }
                if (sumOfTirePressure >= 9 &&
                    sumOfTirePressure <= 10)
                {
                    Console.WriteLine($"Make: {car.Make}");
                    Console.WriteLine($"Model: {car.Model}");
                    Console.WriteLine($"Year: {car.Year}");
                    Console.WriteLine($"HorsePowers: {car.Engine.HorsePower}");
                    Console.WriteLine($"FuelQuantity: {car.FuelQuantity}");
                }
            }

        }
    }
}

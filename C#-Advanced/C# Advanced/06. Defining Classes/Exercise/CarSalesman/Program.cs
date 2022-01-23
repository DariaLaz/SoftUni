using System;
using System.Collections.Generic;
using System.Linq;

namespace CarSalesman
{
    public class Program
    {
        static void Main(string[] args)
        {
            var numberOfEngines = int.Parse(Console.ReadLine());
            var listOfEngines = new List<Engine>();
            for (int i = 0; i < numberOfEngines; i++)
            {
                var input = Console.ReadLine().Split(" ");
                var engine = new Engine();
                engine.Model = input[0];
                engine.Power = int.Parse(input[1]);

                if (input.Length == 4)
                {
                    engine.Displacement = int.Parse(input[2]);
                    engine.Efficiency = (input[3]);
                }
                else if (input.Length == 3)
                {
                    if (input[2][0] >= '0' && input[2][0] <= '9')
                    {
                        engine.Displacement = int.Parse(input[2]);
                    }
                    else if (input[2] != " ")
                    {
                        engine.Efficiency = (input[2]);
                    }
                }
                
                 

                listOfEngines.Add(engine);
            }

            var numberOfCars = int.Parse(Console.ReadLine());
            var listOfCars = new List<Car>();
            for (int i = 0; i < numberOfCars; i++)
            {
                var input = Console.ReadLine().Split(" ");
                var car = new Car(); 
                car.Model = input[0];
                car.Engine = listOfEngines.Where(x => x.Model == input[1]).First();

                if (input.Length == 4 && input[3] != "")
                {
                    car.Weight = int.Parse(input[2]);
                    car.Color = (input[3]);
                    
                    
                }
                else if (input.Length == 3 || input.Contains(""))
                {
                    if (input[2][0] >= '0' && input[2][0] <= '9')
                    {
                        car.Weight = int.Parse(input[2]);
                    }
                    else 
                    {
                        car.Color = (input[2]);
                    }
                }

                listOfCars.Add(car);
            }

            foreach (var car in listOfCars)
            {
                var nullTest = "n/a";
                Console.WriteLine($"{car.Model}:");
                Console.WriteLine($"  {car.Engine.Model}:");
                Console.WriteLine($"    Power: {car.Engine.Power}");
                Console.Write($"    Displacement: ");
                if (car.Engine.Displacement == null) Console.Write(nullTest);
                else Console.Write(car.Engine.Displacement);
                Console.WriteLine();
                Console.Write($"    Efficiency: ");
                if (car.Engine.Efficiency == null) Console.Write(nullTest);
                else Console.Write(car.Engine.Efficiency);
                Console.WriteLine();
                Console.Write($"  Weight: ");
                if (car.Weight == null) Console.Write(nullTest); 
                else Console.Write (car.Weight);
                Console.WriteLine();
                Console.Write($"  Color: ");
                if (car.Color == null) Console.Write(nullTest);
                else Console.Write(car.Color);
                Console.WriteLine();
            }

        }
    }
}

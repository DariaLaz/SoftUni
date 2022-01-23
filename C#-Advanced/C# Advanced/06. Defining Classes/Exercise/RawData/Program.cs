using System;
using System.Collections.Generic;
using System.Linq;

namespace RawData
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var listOfCars = new List<Car>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split();
                var car = new Car();
                var engine = new Engine(double.Parse(input[1]), double.Parse(input[2]));
                var cargo = new Cargo(input[4], double.Parse(input[3]));
                var tires = new Tire[4];
                var ind = 0;
                for (int j = 5; j < 12; j += 2)
                {
                    var tire = new Tire(int.Parse(input[j+1]), double.Parse(input[j]));
                    tires[ind] = tire;
                    ind++;
                }
                car.Model = input[0];
                car.Engine = engine;
                car.Cargo = cargo;
                car.Tires = tires;

                listOfCars.Add(car);
            }

            var command = Console.ReadLine();
            Func<Car, bool> condition = p => true;
            if (command == "fragile")
            {
                condition = (x => x.Cargo.Type == "fragile" && 
                (x.Tires[0].Pressure < 1 ||
                x.Tires[1].Pressure < 1 ||
                x.Tires[2].Pressure < 1 ||
                x.Tires[3].Pressure < 1));
            }
            else if (command == "flammable")
            {
                condition = (x => x.Cargo.Type == "flammable" &&
                x.Engine.Power > 250);
            }

            foreach (var car in listOfCars.Where(condition))
            {
                Console.WriteLine(car.Model);
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;

namespace Vehicles
{
    class Program
    {
        static void Main(string[] args)
        {
            var vehicles = new List<Vehicle>();
            for (int i = 0; i < 3; i++)
            {
                Vehicle vehicle = null;
                var line = Console.ReadLine().Split();
                if (line[0] == "Car")
                {
                    vehicle = new Car(double.Parse(line[1]), double.Parse(line[2]), double.Parse(line[3]));
                }
                else if (line[0] == "Truck")
                {
                    vehicle = new Truck(double.Parse(line[1]), double.Parse(line[2]), double.Parse(line[3]));
                }
                else if (line[0] == "Bus")
                {
                    vehicle = new Bus(double.Parse(line[1]), double.Parse(line[2]), double.Parse(line[3]));
                }
                vehicles.Add(vehicle);
            }

            var n = int.Parse(Console.ReadLine());

            var car = vehicles.First(x => x is Car);
            var truck = vehicles.First(x => x is Truck);
            var bus = vehicles.First(x => x is Bus) as Bus;

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split();
                if (input[0] == "Drive")
                {
                    var distance = double.Parse(input[2]);
                    if (input[1] == "Car")
                    {
                        if (car.FuelQuantity >=  distance * car.FuelConsumptionInLitersPerKm)
                        {
                            car.Drive(distance);
                            Console.WriteLine($"Car travelled {distance} km");
                        }
                        else
                        {
                            Console.WriteLine("Car needs refueling");
                        }
                    }
                    else if (input[1] == "Truck")
                    {
                        if (truck.FuelQuantity >= distance * truck.FuelConsumptionInLitersPerKm)
                        {
                            truck.Drive(distance);
                            Console.WriteLine($"Truck travelled {distance} km");
                        }
                        else
                        {
                            Console.WriteLine("Truck needs refueling");
                        }
                    }
                    else if (input[1] == "Bus")
                    {
                        if (bus.FuelQuantity >= distance * bus.FuelConsumptionInLitersPerKm)
                        {
                            bus.Drive(distance);
                            Console.WriteLine($"Bus travelled {distance} km");
                        }
                        else
                        {
                            Console.WriteLine("Bus needs refueling");
                        }
                    }
                }
                else if (input[0] == "Refuel")
                {
                    var litters = double.Parse(input[2]);
                    if (input[1] == "Car")
                    {
                        car.RefeledAmountOfFuel(litters);
                    }
                    else if (input[1] == "Truck")
                    {
                        truck.RefeledAmountOfFuel(litters);
                    }
                    else if (input[1] == "Bus")
                    {
                        bus.RefeledAmountOfFuel(litters);
                    }
                }
                else if (input[0] == "DriveEmpty")
                {
                    var distance = double.Parse(input[2]);
                    if (bus.FuelQuantity >= distance * bus.FuelConsumptionInLitersPerKm)
                    {
                        bus.DriveEmpty(distance);
                        Console.WriteLine($"Bus travelled {distance} km");
                    }
                    else
                    {
                        Console.WriteLine("Bus needs refueling");
                    }
                }
            }

            Console.WriteLine($"Car: {car.FuelQuantity :f2}");
            Console.WriteLine($"Truck: {truck.FuelQuantity :f2}");
            Console.WriteLine($"Bus: {bus.FuelQuantity:f2}");

        }
    }
}

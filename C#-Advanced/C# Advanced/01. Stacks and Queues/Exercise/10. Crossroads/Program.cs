using System;
using System.Collections.Generic;
using System.Linq;

namespace _10._Crossroads
{
    class Program
    {
        static void Main(string[] args)
        {
            var durationOfTheGreenLight = int.Parse(Console.ReadLine());
            var durationOfTheFreeWindow = int.Parse(Console.ReadLine());
            var cars = new Queue<string>();
            var passedCars = 0;
            var isFree = true;
            while (true)
            {
                var input = Console.ReadLine();

                if (input == "END")
                {
                    if (isFree)
                    {
                        Console.WriteLine("Everyone is safe.");
                        Console.WriteLine($"{passedCars} total cars passed the crossroads.");
                    }
                    return;
                }
                else if (input == "green" && isFree)
                {
                    var leftGreen = durationOfTheGreenLight;

                    while (leftGreen > 0 && cars.Any())
                    {
                        var currentCar = cars.Peek();
                        if (leftGreen >= currentCar.Length)
                        {
                            passedCars++;
                            leftGreen -= currentCar.Length;
                            cars.Dequeue();
                        }
                        else if ((leftGreen + durationOfTheFreeWindow) >= currentCar.Length)
                        {
                            passedCars++;
                            leftGreen -= currentCar.Length;
                            cars.Dequeue();
                        }
                        else
                        {
                            isFree = false;
                            Console.WriteLine("A crash happened!");
                            Console.WriteLine($"{currentCar} was hit at {currentCar[currentCar.Length - leftGreen-1]}.");
                            break;
                        }
                    }
                }
                else
                {
                    cars.Enqueue(input);
                }
            }
        }
    }
}

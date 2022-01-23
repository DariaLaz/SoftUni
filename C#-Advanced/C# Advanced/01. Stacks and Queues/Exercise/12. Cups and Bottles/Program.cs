using System;
using System.Collections.Generic;
using System.Linq;

namespace _12._Cups_and_Bottles
{
    class Program
    {
        static void Main(string[] args)
        {
            var cupsCapacity = Console.ReadLine().Split(" ").Select(int.Parse);
            var cupsQueue = new Queue<int>(cupsCapacity);
            var filledBottles = Console.ReadLine().Split(" ").Select(int.Parse);
            var bottlesStack = new Stack<int>(filledBottles);
            var wastedWater = 0;
            while (cupsQueue.Any() && bottlesStack.Any())
            {
                var currentCup = cupsQueue.Peek();
                var currentBottle = bottlesStack.Peek();

                while (currentCup > 0)
                {
                    if (currentCup > currentBottle)
                    {
                        currentCup -= currentBottle;
                        bottlesStack.Pop();
                        currentBottle = bottlesStack.Peek();
                    }
                    else //if (currentBottle >= currentCup)
                    {
                        wastedWater += currentBottle - currentCup;
                        currentCup -= currentBottle;
                        cupsQueue.Dequeue();
                        bottlesStack.Pop();

                    }
                }

            }
            if (bottlesStack.Any())
            {
                Console.WriteLine($"Bottles: {string.Join(" ", bottlesStack)}");
            }
            else
            {
                Console.WriteLine($"Cups: {string.Join(" ", cupsQueue)}");
            }

            Console.WriteLine($"Wasted litters of water: {wastedWater}");
        }
    }
}

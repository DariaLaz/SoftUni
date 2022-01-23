using System;
using System.Collections.Generic;
using System.Linq;

namespace _07._Truck_Tour
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var truckQueue = new Queue<int[]>();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                truckQueue.Enqueue(input);
            }
            int counter = 0;
            while (true)
            {
                int currFuel = 0;
                foreach (var i in truckQueue)
                {
                    currFuel += i[0];
                    currFuel -= i[1];
                    if (currFuel < 0)
                    {
                        var current = truckQueue.Dequeue();
                        truckQueue.Enqueue(current);
                        counter++;
                        break;
                    }
                }
                if (currFuel >= 0)
                {
                    Console.WriteLine(counter);
                    break;
                }
            }
        }
    }
}

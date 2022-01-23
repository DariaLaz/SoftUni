using System;
using System.Collections.Generic;
using System.Linq;

namespace GenericCountMethodStrings
{
    public class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            List<Box<double>> listOfBoxes = new List<Box<double>>();
            for (int i = 0; i < n; i++)
            {
                var box = new Box<double>(double.Parse(Console.ReadLine()));
                listOfBoxes.Add(box);
            }

            var valueToCompare = double.Parse(Console.ReadLine());

            var count = listOfBoxes.Count(b => b.Value.CompareTo(valueToCompare) > 0);

            Console.WriteLine(count);
            
            //var positionsToSwap = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            //Swap(listOfBoxes, positionsToSwap[0], positionsToSwap[1]);
            //foreach (var box in listOfBoxes)
            //{
            //    Console.WriteLine(box.ToString());
            //}
        }

        static void Swap<T>(List<T> list, int first, int second)
        {
            var oldFirstValue = list[first];
            list[first] = list[second];
            list[second] = oldFirstValue;

        }
    }
}

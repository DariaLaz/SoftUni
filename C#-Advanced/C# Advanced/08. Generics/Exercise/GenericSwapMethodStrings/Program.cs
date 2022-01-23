using System;
using System.Collections.Generic;
using System.Linq;

namespace GenericSwapMethodStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var list = new List<string>();

            for (int i = 0; i < n; i++)
            {
                list.Add(Console.ReadLine());
            }

            var positionsToSwap = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            int first = positionsToSwap[0];
            var second = positionsToSwap[1];
            
        }

        static void Swap<T>(List<T> list, int first, int second)
        {
            var oldFirstValue = list[first];
            list[first] = list[second];
            list[second] = oldFirstValue;

        }
    }
}

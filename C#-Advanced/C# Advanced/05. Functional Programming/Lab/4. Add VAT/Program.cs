using System;
using System.Linq;

namespace _4._Add_VAT
{
    class Program
    {
        static void Main(string[] args)
        {
            var prices = Console.ReadLine().Split(", ").
                Select(double.Parse).ToArray();
            var pricesWithVAT = prices.Select(x => x * 1.2);
            foreach (var pr in pricesWithVAT)
            {
                Console.WriteLine($"{pr:f2}");
            }
        }
    }
}

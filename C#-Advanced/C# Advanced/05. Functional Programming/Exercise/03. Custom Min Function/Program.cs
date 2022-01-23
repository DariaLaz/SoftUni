using System;
using System.Linq;

namespace _03._Custom_Min_Function
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(" ").Select(int.Parse);
            Console.WriteLine(numbers.Min());
        }
    }
}

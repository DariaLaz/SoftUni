using System;
using System.Linq;

namespace _06._Reverse_And_Exclude
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(" ").Select(int.Parse);
            var nToDivideBy = int.Parse(Console.ReadLine());
            numbers = numbers.Reverse();
            Console.WriteLine(string.Join(" ", numbers.Where(x => x % nToDivideBy != 0)));
        }
    }
}

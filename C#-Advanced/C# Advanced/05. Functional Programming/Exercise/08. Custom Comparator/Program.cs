using System;
using System.Linq;

namespace _08._Custom_Comparator
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(" ").Select(int.Parse);
            var evenNums = numbers.Where(x => x % 2 == 0).OrderBy(x => x);
            var oddNums = numbers.Where(x => x % 2 != 0).OrderBy(x => x);

            Console.WriteLine(string.Join(" ", evenNums) + " "
                + string.Join(" ", oddNums));
        }
    }
}

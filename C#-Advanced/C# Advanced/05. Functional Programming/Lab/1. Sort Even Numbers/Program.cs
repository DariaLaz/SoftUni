using System;
using System.Linq;

namespace _1._Sort_Even_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(", ").Select(int.Parse);
            var evenSortedNums = numbers.Where(x => x % 2 == 0).OrderBy(n => n);
            Console.WriteLine(string.Join(", ", evenSortedNums));
        }
    }
}

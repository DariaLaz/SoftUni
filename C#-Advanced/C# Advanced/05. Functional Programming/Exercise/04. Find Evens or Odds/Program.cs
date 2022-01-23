using System;
using System.Collections.Generic;
using System.Linq;

namespace _04._Find_Evens_or_Odds
{
    class Program
    {
        static void Main(string[] args)
        {
            var nums = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            var numbers = new List<int>();
            for (int i = nums[0]; i <= nums[1]; i++)
            {
                numbers.Add(i);
            }

            var command = Console.ReadLine();

            Func<int, bool> getNums = p => true;

            if (command == "odd")
            {
                getNums = p => p % 2 != 0;
            }
            else if (command == "even")
            {
                getNums = p => p % 2 == 0;
            }

            Console.WriteLine(string.Join(" ", numbers.Where(getNums)));
        }
    }
}

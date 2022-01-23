using System;
using System.Collections.Generic;
using System.Linq;

namespace _5._Print_Even_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(" ").Select(int.Parse);
            var queue = new Queue<int>();
            foreach (var n in numbers)
            {
                if (n % 2 == 0)
                {
                    queue.Enqueue(n);
                }
            }
            Console.WriteLine(string.Join(", ", queue));
        }
    }
}

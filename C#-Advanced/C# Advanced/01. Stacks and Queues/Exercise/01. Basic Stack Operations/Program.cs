using System;
using System.Collections.Generic;
using System.Linq;

namespace _01._Basic_Stack_Operations
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] line = Console.ReadLine().Split().Select(int.Parse).ToArray();
            if (line[0] == 0)
            {
                Console.WriteLine(0);
                return;

            }
            int[] nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var numQueue = new Queue<int>();
            for (int i = 0; i < line[0]; i++)
            {
                numQueue.Enqueue(nums[i]);
            }
            for (int i = 0; i < line[1]; i++)
            {
                numQueue.Dequeue();
            }

            if (numQueue.Count == 0)
            {
                Console.WriteLine(0);
                return;
            }
            bool flag = numQueue.Contains(line[2]);
            Console.WriteLine(flag ? "true" : $"{numQueue.Min()}");
        }
    }
}

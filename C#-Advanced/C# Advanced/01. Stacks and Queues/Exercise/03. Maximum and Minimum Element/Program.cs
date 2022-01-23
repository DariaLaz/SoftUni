using System;
using System.Collections.Generic;
using System.Linq;

namespace _03._Maximum_and_Minimum_Element
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var stack = new Stack<int>();
            for (int i = 0; i < n; i++)
            {
                var line = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                if (line[0] == 1)
                {
                    stack.Push(line[1]);
                }
                else if (line[0] == 2 && stack.Count > 0)
                {
                    stack.Pop();
                }
                else if (line[0] == 3 && stack.Count > 0)
                {
                    Console.WriteLine(stack.Max());
                }
                else if (line[0] == 4 && stack.Count > 0)
                {
                    Console.WriteLine(stack.Min());
                }
            }
            var final = new int[stack.Count];
            for (int i = 0; i < final.Length; i++)
            {
                final[i] = stack.Pop();
            }
            Console.WriteLine(string.Join(", ", final));
            
        }
    }
}

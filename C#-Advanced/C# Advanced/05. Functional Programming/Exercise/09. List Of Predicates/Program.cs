using System;
using System.Collections.Generic;
using System.Linq;

namespace _09._List_Of_Predicates
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var dividers = Console.ReadLine().Split().Select(int.Parse);

            Queue<int> result = new Queue<int>();

            var predicates = dividers
                .Select(div => (Func<int, bool>)(x => x % div == 0))
                .ToArray();

            for (int i = 1; i <= n; i++)
            {
                if (IsValid(predicates, i))
                {
                    result.Enqueue(i);
                }
            }

            Console.WriteLine(string.Join(" ", result));
        }

        private static bool IsValid(Func<int, bool>[] predicates, int num)
        {
            foreach (var predicate in predicates)
            {
                if (!predicate(num))
                {
                    return false;
                }
            }
            return true;
        }
    }
}

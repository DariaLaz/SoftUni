using System;

namespace _02._Knights_of_Honor
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = Console.ReadLine().Split(" ");

            foreach (var name in names)
            {
                Console.WriteLine($"Sir {name}");
            }
        }
    }
}

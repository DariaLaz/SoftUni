using System;

namespace _01._Action_Print
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = Console.ReadLine().Split(" ");

            foreach (var name in names)
            {
                Console.WriteLine(name);
            }
        }
    }
}

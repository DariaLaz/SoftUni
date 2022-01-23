using System;
using System.Linq;

namespace _05._Applied_Arithmetics
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(" ").Select(int.Parse);

            while (true)
            {
                var command = Console.ReadLine();
                if (command == "end")
                {
                    break;
                }
                else if (command == "add" || command == "multiply" || command == "subtract")
                {
                    Func<int, int> comFunc = p => p;

                    switch (command)
                    {
                        case "add": comFunc = (x => x += 1); break;
                        case "multiply": comFunc = (x => x *= 2); break;
                        case "subtract": comFunc = (x => x -= 1); break;
                    }

                    numbers = numbers.Select(comFunc);
                }
                else if (command == "print")
                {
                    Console.WriteLine(string.Join(" ", numbers));
                }
            }
        }
    }
}

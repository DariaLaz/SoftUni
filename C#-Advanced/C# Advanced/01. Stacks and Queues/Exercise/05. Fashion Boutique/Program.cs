using System;
using System.Collections.Generic;
using System.Linq;

namespace _05._Fashion_Boutique
{
    class Program
    {
        static void Main(string[] args)
        {
            var piecesOfCloths = Console.ReadLine().Split(" ").Select(int.Parse);
            var capacity = int.Parse(Console.ReadLine());
            var cloths = new Stack<int>(piecesOfCloths);
            var racks = 1;
            var sum = 0;
            while (sum <= capacity && cloths.Count != 0)
            {
                if (sum + cloths.Peek() > capacity)
                {
                    racks++;
                    sum = 0;
                }
                else if (sum == capacity)
                {
                    racks++;
                    sum = 0;
                }
                sum += cloths.Pop();
                
            }
            Console.WriteLine(racks);
        }
    }
}

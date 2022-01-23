using System;
using System.Linq;

namespace _4._Symbol_in_Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var matrix = new char[n,n];
            for (int i = 0; i < n; i++)
            {
                var r = Console.ReadLine();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = r[j];
                }
            }

            var findSymbol = char.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if (findSymbol == matrix[i,j])
                    {
                        Console.WriteLine($"({i}, {j})");
                        return;
                    }
                }
            }
            Console.WriteLine($"{findSymbol} does not occur in the matrix");

        }
    }
}

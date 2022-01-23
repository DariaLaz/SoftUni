using System;
using System.Linq;

namespace _01._Diagonal_Difference
{
    class Program
    {
        static void Main(string[] args)
        {
                var n = int.Parse(Console.ReadLine());
                var matrix = new int[n, n];
                for (int i = 0; i < n; i++)
                {
                    var r = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                    for (int j = 0; j < n; j++)
                    {
                        matrix[i, j] = r[j];
                    }
                }
                var primaryDiagonalSum = 0;
                var secondaryDiagonalSum = 0;
                for (int i = 0; i < n; i++)
                {
                    primaryDiagonalSum += matrix[i, i];
                }
                for (int i = 0; i < n; i++)
                {
                    secondaryDiagonalSum += matrix[i, n - 1 - i];
                }

                Console.WriteLine(Math.Abs(primaryDiagonalSum - secondaryDiagonalSum));
            }
        }
    }

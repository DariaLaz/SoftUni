using System;
using System.Linq;

namespace _06._Jagged_Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var jaggedArray = new int[n][];

            for (int i = 0; i < n; i++)
            {
                
                var r = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                jaggedArray[i] = new int[r.Length];
                for (int j = 0; j < r.Length; j++)
                {

                    jaggedArray[i][j] = r[j];
                }
            }

            for (int i = 1; i < n; i++)
            {
                if (jaggedArray[i - 1].Length == jaggedArray[i].Length)
                {
                    for (int j = 0; j < jaggedArray[i].Length; j++)
                    {
                        jaggedArray[i][j] *= 2;
                        jaggedArray[i - 1][j] *= 2;
                    }
                }
                else
                {
                    for (int j = 0; j < jaggedArray[i].Length; j++)
                    {
                        jaggedArray[i][j] /= 2;
                    }
                    for (int j = 0; j < jaggedArray[i - 1].Length; j++)
                    {
                        jaggedArray[i - 1][j] /= 2;
                    }
                }
            }

            while (true)
            {
                var line = Console.ReadLine().Split(" ");
                var command = line[0];
                if (command == "End")
                {
                    break;
                }
                if (command == "Add")
                {
                    var row = int.Parse(line[1]);
                    var col = int.Parse(line[2]);
                    var value = int.Parse(line[3]);
                    try
                    {
                        jaggedArray[row][col] += value;
                    }
                    catch (Exception)
                    {
                        continue;
                    }                    
                }
                else if (command == "Subtract")
                {
                    var row = int.Parse(line[1]);
                    var col = int.Parse(line[2]);
                    var value = int.Parse(line[3]);
                    try
                    {
                        jaggedArray[row][col] -= value;
                    }
                    catch (Exception)
                    {
                        continue;
                    }
                }
            }
            PrintJaggedArray(jaggedArray, n);
        }
        public static void PrintJaggedArray(int[][] matrix, int n)
        {
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    Console.Write(matrix[i][j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}

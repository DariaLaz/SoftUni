using System;
using System.Linq;

namespace _04._Matrix_Shuffling
{
    class Program
    {
        static void Main(string[] args)
        {
            var colsAndRows = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            var rows = colsAndRows[0];
            var cols = colsAndRows[1];

            var matrix = new string[rows, cols];
            for (int i = 0; i < rows; i++)
            {
                var r = Console.ReadLine().Split(" ").ToArray();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = r[j];
                }
            }

            while (true)
            {
                var input = Console.ReadLine().Split(" ");
                if (input[0] == "END")
                {
                    break;
                }
                else
                {
                    if (int.Parse(input[1]) >= rows || int.Parse(input[1]) < 0||
                        int.Parse(input[3]) >= rows || int.Parse(input[3]) < 0 ||
                        int.Parse(input[2]) >= cols || int.Parse(input[2]) < 0 ||
                        int.Parse(input[4]) >= cols || int.Parse(input[4]) < 0 ||
                        input[0] != "swap" || input.Length != 5)
                    {
                        Console.WriteLine("Invalid input!");
                    }
                    else
                    {
                        var firstValue = matrix[int.Parse(input[1]), int.Parse(input[2])];
                        matrix[int.Parse(input[1]), int.Parse(input[2])] = matrix[int.Parse(input[3]), int.Parse(input[4])];
                        matrix[int.Parse(input[3]), int.Parse(input[4])] = firstValue;
                        PrintMatrix(matrix);
                    }
                }
                
            }
        }
        public static void PrintMatrix(string[,] matrix)
        {
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    Console.Write(matrix[row, col] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}

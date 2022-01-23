using System;
using System.Collections.Generic;
using System.Linq;

namespace _05._Snake_Moves
{
    class Program
    {
        static void Main(string[] args)
        {
            var colsAndRows = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            var rows = colsAndRows[0];
            var cols = colsAndRows[1];
            var snakeString = Console.ReadLine();
            
            var matrix = new char[rows, cols];
            var s = 0;
            for (int row = 0; row < rows; row++)
            {
                if (row % 2 == 0)
                {
                    for (int col = 0; col < cols; col++)
                    {
                        matrix[row, col] = snakeString[s];
                        s++;
                        if (s == snakeString.Length)
                        {
                            s = 0;
                        }
                    }
                }
                else
                {
                    for (int col = cols -1; col >= 0; col--)
                    {
                        matrix[row, col] = snakeString[s];
                        s++;
                        if (s == snakeString.Length)
                        {
                            s = 0;
                        }
                    }
                }
            }
            PrintMatrix(matrix);
        }
        public static void PrintMatrix(char[,] matrix)
        {
            for (int row = 0; row < matrix.GetLength(0); row++)
            {
                for (int col = 0; col < matrix.GetLength(1); col++)
                {
                    Console.Write(matrix[row, col]);
                }
                Console.WriteLine();
            }
        }
        
    }
}

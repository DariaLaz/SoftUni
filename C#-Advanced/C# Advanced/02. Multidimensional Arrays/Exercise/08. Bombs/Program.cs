using System;
using System.Linq;

namespace _08._Bombs
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var matrix = new int[n, n];
            var copyMatrix = new bool[n, n];
            for (int row = 0; row < n; row++)
            {
                for (int col = 0; col < n; col++)
                {
                    copyMatrix[row, col] = true;
                }
            }

            for (int row = 0; row < n; row++)
            {
                var rowValues = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int col = 0; col < n; col++)
                {
                    matrix[row, col] = rowValues[col];
                }
            }
            var indexesOfBombs = Console.ReadLine().Split(" ");

            for (int i = 0; i < indexesOfBombs.Length; i++)
            {
                var splitIndexes = indexesOfBombs[i].Split(",");
                var bombRow = int.Parse(splitIndexes[0]);
                var bombCol = int.Parse(splitIndexes[1]);
                
                var bombValue = matrix[bombRow, bombCol];
                matrix[bombRow, bombCol] = 0;
                copyMatrix[bombRow, bombCol] = false;
                for (int row = (bombRow!=0? bombRow - 1 : 0); 
                    row <= (bombRow != n-1 ? bombRow + 1 : n-1); 
                    row++)
                {
                    for (int col = (bombCol != 0 ? bombCol - 1 : 0); 
                         col <= (bombCol != n - 1 ? bombCol + 1 : n - 1);
                         col++)
                    {
                        if (copyMatrix[row,col])
                        {
                            matrix[row, col] -= bombValue;
                            if (matrix[row, col] <= 0)
                            {
                                copyMatrix[row, col] = false;
                            }
                            
                        }
                    }
                }
            }

            Console.WriteLine($"Alive cells: {FindCoundAndSumOfAliveCells(matrix, n)[0]}");
            Console.WriteLine($"Sum: {FindCoundAndSumOfAliveCells(matrix, n)[1]}");
            PrintMatrix(matrix, n);
        }

        private static int[] FindCoundAndSumOfAliveCells(int[,] matrix, int n)
        {
            var countAndSum = new int[] { 0, 0 };
            for (int row = 0; row < n; row++)
            {
                for (int col = 0; col < n; col++)
                {
                    if (matrix[row, col] > 0)
                    {
                        countAndSum[0]++;
                        countAndSum[1] += matrix[row, col]; 
                    }
                }
                
            }
            return countAndSum;
        }
        private static void PrintMatrix(int[,] matrix, int n)
        {
            for (int row = 0; row < n; row++)
            {
                for (int col = 0; col < n; col++)
                {
                    Console.Write(matrix[row, col] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}

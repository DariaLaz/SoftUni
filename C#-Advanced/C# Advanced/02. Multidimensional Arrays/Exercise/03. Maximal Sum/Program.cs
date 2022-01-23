using System;
using System.Linq;

namespace _03._Maximal_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] paremeters = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            var rows = paremeters[0];
            var cols = paremeters[1];

            var matrix = new int[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                var r = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = r[j];
                }
            }


            var maxSum = int.MinValue;
            var leftIndexOfTheMaxSquareRow = 0;
            var leftIndexOfTheMaxSquareCol = 0;

            for (int row = 0; row < rows - 2; row++)
            {
                for (int col = 0; col < cols - 2; col++)
                {
                    var sum = 0;
                    for (int rowM = row; rowM < row+3; rowM++)
                    {
                        for (int colM = col; colM < col + 3; colM++)
                        {
                            sum += matrix[rowM, colM];
                        }
                    }
                    if (maxSum < sum)
                    {
                        maxSum = sum;
                        leftIndexOfTheMaxSquareRow = row;
                        leftIndexOfTheMaxSquareCol = col;
                    }
                }
            }
            Console.WriteLine("Sum = " + maxSum);
            for (int row = leftIndexOfTheMaxSquareRow; row < leftIndexOfTheMaxSquareRow + 3; row++)
            {
                for (int col = leftIndexOfTheMaxSquareCol; col < leftIndexOfTheMaxSquareCol + 3; col++)
                {
                    Console.Write(matrix[row, col] + " ");
                }

                Console.WriteLine();
            }
        }
    }
}

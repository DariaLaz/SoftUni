using System;
using System.Linq;

namespace _5._Square_With_Maximum_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] paremeters = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
            var rows = paremeters[0];
            var cols = paremeters[1];


            var matrix = new int[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                var r = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = r[j];
                }
            }
            var maxSum = int.MinValue;
            var leftIndexOfTheMaxSquareRow = 0;
            var leftIndexOfTheMaxSquareCol = 0;

            for (int row = 0; row < rows - 1; row++)
            {
                for (int col = 0; col < cols - 1; col++)
                {
                    var sum = matrix[row, col] + matrix[row, col + 1] +
                        matrix[row + 1, col] + matrix[row + 1, col + 1];
                    if (maxSum < sum)
                    {
                        maxSum = sum;
                        leftIndexOfTheMaxSquareRow = row;
                        leftIndexOfTheMaxSquareCol = col;
                    }
                }
            }
            Console.WriteLine(matrix[leftIndexOfTheMaxSquareRow, leftIndexOfTheMaxSquareCol]
                + " " + matrix[leftIndexOfTheMaxSquareRow, leftIndexOfTheMaxSquareCol + 1]);
            Console.WriteLine(matrix[leftIndexOfTheMaxSquareRow+ 1, leftIndexOfTheMaxSquareCol]
                + " " + matrix[leftIndexOfTheMaxSquareRow+1, leftIndexOfTheMaxSquareCol + 1]);
            Console.WriteLine(maxSum);
        }
    }
}

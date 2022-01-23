using System;
using System.Linq;

namespace _02._Squares_in_Matrix
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
            var counter = 0;
            for (int row = 0; row < rows-1; row++)
            {
                for (int col = 0; col < cols-1; col++)
                {
                    if (matrix[row, col] == matrix[row, col +1] &&
                        matrix[row+1, col] == matrix[row, col + 1] &&
                        matrix[row + 1, col] == matrix[row+1, col+1])
                    {
                        counter++;
                    }
                }
            }
            Console.WriteLine(counter);
        }
    }
}

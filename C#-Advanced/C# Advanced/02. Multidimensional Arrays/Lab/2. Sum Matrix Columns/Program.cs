using System;
using System.Linq;

namespace _2._Sum_Matrix_Columns
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
                var r = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < cols; j++)
                {
                    matrix[i, j] = r[j];
                }
            }
            
            for (int i = 0; i < cols; i++)
            {
                var sumCol = 0;
                for (int j = 0; j < rows; j++)
                {
                    sumCol += matrix[j, i];
                }
                Console.WriteLine(sumCol);
            }
        }
    }
}

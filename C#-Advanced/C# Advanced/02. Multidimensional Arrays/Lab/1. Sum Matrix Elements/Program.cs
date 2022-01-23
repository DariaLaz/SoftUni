using System;
using System.Linq;

namespace _1._Sum_Matrix_Elements
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
            var sum = 0;
            foreach (var num in matrix)
            {
                sum += num;
            }

            Console.WriteLine(rows);
            Console.WriteLine(cols);
            Console.WriteLine(sum);
        }
    }
}

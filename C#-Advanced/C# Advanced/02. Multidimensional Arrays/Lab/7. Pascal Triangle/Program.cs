using System;

namespace _7._Pascal_Triangle
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var matrix = new long[n][];

            for (int i = 0; i < n; i++)
            {
                matrix[i] = new long[i + 1];

                matrix[i][0] = 1;
                matrix[i][i] = 1;
                for (int j = 1; j < i; j++)
                {
                    matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
                }

            }
            PrintJaggedArray(matrix, n);
        }
        public static void PrintJaggedArray(long[][] matrix, int n)
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

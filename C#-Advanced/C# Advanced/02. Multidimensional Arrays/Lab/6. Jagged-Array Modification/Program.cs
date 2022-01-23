using System;
using System.Linq;

namespace _6._Jagged_Array_Modification
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var matrix = new int[n, n];

            for (int i = 0; i < n; i++)
            {
                var r = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    matrix[i, j] = r[j];
                }
            }

            while (true)
            {
                var line = Console.ReadLine().Split(" ");
                var command = line[0];
                if (command == "END")
                {
                    break;
                }

                if (int.Parse(line[1]) >= n || int.Parse(line[2]) >= n ||
                    int.Parse(line[1]) < 0 || int.Parse(line[2]) < 0)
                {
                    Console.WriteLine("Invalid coordinates");
                }
                else if (command == "Add")
                {
                    matrix[int.Parse(line[1]), int.Parse(line[2])] += int.Parse(line[3]);
                }
                else if (command == "Subtract")
                {
                    matrix[int.Parse(line[1]), int.Parse(line[2])] -= int.Parse(line[3]);
                }
            }
            PrintMatrix(matrix);

        }
        public static void PrintMatrix(int[,] matrix)
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

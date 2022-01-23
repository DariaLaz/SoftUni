using System;
using System.Collections.Generic;
using System.Linq;

namespace _09._Miner
{
    class Program
    {
        static void Main(string[] args)
        {
            var fieldSize = int.Parse(Console.ReadLine());
            var board = new string[fieldSize, fieldSize];
            var moves = Console.ReadLine().Split(" ");
            var movesQueue = new Queue<string>(moves);
            var minersRow = 0;
            var minersCol = 0;
            var coals = 0;
            for (int row = 0; row < fieldSize; row++)
            {
                var inputRow = Console.ReadLine().Split(" ");
                for (int col = 0; col < fieldSize; col++)
                {
                    board[row, col] = inputRow[col];
                    if (inputRow[col] == "s")
                    {
                        minersRow = row;
                        minersCol = col;
                    }
                    else if (inputRow[col] == "c")
                    {
                        coals++;
                    }
                }
            }

            while (movesQueue.Any())
            {
                var currentCommand = movesQueue.Dequeue();

                switch (currentCommand)
                {
                    case "up":
                        if (minersRow != 0) minersRow -= 1;
                        break;
                    case "down":
                        if (minersRow != fieldSize-1) minersRow += 1;
                        break;
                    case "left":
                        if (minersCol != 0) minersCol -= 1;
                        break;
                    case "right":
                        if (minersCol != fieldSize-1) minersCol += 1;
                        break;
                }
                if (board[minersRow, minersCol] == "e")
                {
                    Console.WriteLine($"Game over! ({minersRow}, {minersCol})");
                    return;
                }
                else if (board[minersRow, minersCol] == "c")
                {
                    coals--;
                    board[minersRow, minersCol] = "*";
                    if (coals == 0)
                    {
                        Console.WriteLine($"You collected all coals! ({minersRow}, {minersCol})");
                        return;
                    }
                }
            }
            Console.WriteLine($"{coals} coals left. ({minersRow}, {minersCol})");
        }
    }
}

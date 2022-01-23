using System;

namespace _02._Pawn_Wars
{
    class Program
    {
        static void Main(string[] args)
        {
            var board = new char[8, 8];

            var bRow = 0;
            var bCol = 0;
            var wRow = 0;
            var wCol = 0;

            var blacksTurn = false;
            var whitesTurn = true;


            for (int row = 0; row < 8; row++)
            {
                var line = Console.ReadLine();
                for (int col = 0; col < 8; col++)
                {
                    board[row, col] = line[col];
                    if (line[col] == 'b')
                    {
                        bRow = row;
                        bCol = col;
                    }
                    else if (line[col] == 'w')
                    {
                        wRow = row;
                        wCol = col;
                    }
                }
            }
            while (true)
            {
                if (bRow + 1 == wRow && (bCol + 1 == wCol || bCol - 1 == wCol))
                {
                    if (whitesTurn)
                    {
                        Console.WriteLine($"Game over! white capture on {ToCoordinates(bRow, bCol)}.");
                    }
                    else
                    {
                        Console.WriteLine($"Game over! black capture on {ToCoordinates(wRow, wCol)}.");
                    }
                    break;
                }

                if (whitesTurn)
                {
                    wRow--;
                }
                else
                {
                    bRow++;
                }

                if (wRow == 0)
                {
                    
                    Console.WriteLine($"Game over! White pawn is promoted to a queen at {ToCoordinates(wRow, wCol)}");
                    break;
                }
                if (bRow == 7)
                {
                    Console.WriteLine($"Game over! Black pawn is promoted to a queen at {ToCoordinates(bRow, bCol)}");
                    break;
                }

                whitesTurn = !whitesTurn;
                blacksTurn = !blacksTurn;
            }
        }

        private static string ToCoordinates(int bRow, int bCol)
        {
            var col = "";
            switch (bCol)
            {
                case 0: col = "a"; break;
                case 1: col = "b"; break;
                case 2: col = "c"; break;
                case 3: col = "d"; break;
                case 4: col = "e"; break;
                case 5: col = "f"; break;
                case 6: col = "g"; break;
                case 7: col = "h"; break;
            }
            var row = "";
            switch (bRow)
            {
                case 0: row = "8"; break;
                case 1: row = "7"; break;
                case 2: row = "6"; break;
                case 3: row = "5"; break;
                case 4: row = "4"; break;
                case 5: row = "3"; break;
                case 6: row = "2"; break;
                case 7: row = "1"; break;
            }
            return (col + row);
        }
    }
}

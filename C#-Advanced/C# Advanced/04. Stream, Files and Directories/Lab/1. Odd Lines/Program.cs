using System;
using System.IO;

namespace _1._Odd_Lines
{
    class Program
    {
        static void Main(string[] args)
        {
            using StreamReader sr = new StreamReader("Input.txt");
            var line = sr.ReadLine();
            var counter = 0;
            while (line != null)
            {
                if (counter % 2 == 1)
                {
                    Console.WriteLine(line);
                }
                line = sr.ReadLine();
                counter++;
            }

        }
    }
}

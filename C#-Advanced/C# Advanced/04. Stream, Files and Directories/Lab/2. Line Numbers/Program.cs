using System;
using System.IO;

namespace _2._Line_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            using StreamReader sr = new StreamReader("Input.txt");
            using StreamWriter sw = new StreamWriter("Output.txt");
            var line = sr.ReadLine();
            var counter = 1;
            while (line != null)
            {
                sw.WriteLine($"{counter} {line}");
                line = sr.ReadLine();
                counter++;
            }
        }
    }
}

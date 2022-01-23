using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _1._Even_Lines
{
    class Program
    {
        static void Main(string[] args)
        {
            using StreamReader sr = new StreamReader(@"../../../text.txt");
            var line = sr.ReadLine();
            var counter = 0;
            var punctuationMarks = new string[] { "-", ",", ".", "!", "?" };
            var p = new HashSet<int>();
            while (line != null)
            {
                if (counter % 2 == 0)
                {
                    foreach (var sigh in punctuationMarks)
                    {
                        line = line.Replace(sigh, "@");
                    }
                    var finalLines = line.Split(" ").Reverse();
                    Console.WriteLine(string.Join(" ", finalLines));
                }
                
                line = sr.ReadLine();
                counter++;
            }
        }
    }
}

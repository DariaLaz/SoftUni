using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _2._Line_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines(@"../../../text.txt");
            var punctuationMarks = new List<string>() { "-", ",", ".", "!", "?" };
            using StreamWriter sw = new StreamWriter(@"../../../output.txt");
            for (int i = 0; i < lines.Length; i++)
            {
                var line = lines[i];
                var count = line.Count(x => char.IsLetter(x));
                var punctuationMarksCount = line.Count(x => char.IsPunctuation(x));

                sw.WriteLine($"Line {i + 1}:{line} ({count})({punctuationMarksCount})");
            }
        }
    }
}

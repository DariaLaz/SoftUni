using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace _3._Word_Count
{
    class Program
    {
        static void Main(string[] args)
        {

            using StreamReader readWords = new StreamReader("words.txt");
            var reader = new StreamReader("text.txt");
            
            var words = readWords.ReadLine().Split(" "); 
            
            var wordsAndCount = new Dictionary<string, int>();
            for (int i = 0; i < words.Length; i++)
            {
                wordsAndCount.Add(words[i], 0);
            }

            var curentLine = reader.ReadLine();

            while (curentLine != null)
            {
                var currentWords = curentLine.ToLower()
                    .Split(new[] { ' ', '.', ',', '-', '?', '!', ':', ';' },
                    StringSplitOptions.RemoveEmptyEntries);
                for (int i = 0; i < currentWords.Length; i++)
                {
                    if (wordsAndCount.ContainsKey(currentWords[i]))
                    {
                        wordsAndCount[currentWords[i]]++;
                    }
                }
                curentLine = reader.ReadLine();
            }
            foreach (var word in wordsAndCount.OrderByDescending(n => n.Value))
            {
                Console.WriteLine($"{word.Key} - {word.Value}");
            } 
        }
    }
}

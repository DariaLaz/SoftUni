using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _3._Word_Count
{
    class Program
    {
        static void Main(string[] args)
        {
            //Dictionary<string, int> wordsCount = new Dictionary<string, int>();

            //string[] wordsLine = File.ReadAllLines("words.txt");

            //string[] textLines = File.ReadAllLines("text.txt");

            //foreach (var words in wordsLine)
            //{
            //    if (!wordsCount.ContainsKey(words.ToLower()))
            //    {
            //        wordsCount.Add(words, 0);
            //    }
            //}

            //foreach (var line in textLines)
            //{
            //    foreach (var key in wordsCount.Keys)
            //    {
            //        if (line.Contains(key))
            //        {
            //            wordsCount[key]++;
            //        }
            //    }

            //}

            //foreach (var item in wordsCount.OrderByDescending(x => x.Value))
            //{
            //    string result = $"{item.Key} - {item.Value}{Environment.NewLine}";
            //    File.AppendAllText("actualResult.txt", result);
            //}



            //using StreamReader readWords = new StreamReader(@"../../../words.txt");
            //var sr = new StreamReader(@"../../../text.txt");

            //var wordsAndCounts = new Dictionary<string, int>();
            //var w = readWords.ReadLine();

            //while (w != null)
            //{
            //    if (!wordsAndCounts.ContainsKey(w))
            //    {
            //        wordsAndCounts.Add(w, 0);
            //    }
            //    w = readWords.ReadLine();
            //}

            //var curentLine = sr.ReadLine();

            //while (curentLine != null)
            //{
            //    var currentWords = curentLine.
            //        Split(new[] { ' ', '.', ',', '-', '?', '!', ':', ';' });
            //    for (int i = 0; i < currentWords.Length; i++)
            //    {
            //        if (wordsAndCounts.ContainsKey(currentWords[i]))
            //        {
            //            wordsAndCounts[currentWords[i]]++;
            //        }
            //    }
            //    curentLine = sr.ReadLine();
            //}

            //using StreamWriter actualResults = new StreamWriter(@"../../../actualResult.txt");
            
            //foreach (var word in wordsAndCounts)
            //{
            //    actualResults.WriteLine($"{word.Key} - {word.Value}");
            //}

            //using StreamWriter expectedResult = new StreamWriter(@"../../../expectedResult.txt");
            
            //foreach (var word in wordsAndCounts.OrderByDescending(n => n.Value))
            //{
            //    expectedResult.WriteLine($"{word.Key} - {word.Value}");
            //}
        }
    }
}

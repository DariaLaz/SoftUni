using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace _01._Food_Finder
{
    class Program
    {
        static void Main(string[] args)
        {
            var vowels = new Queue<string>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray());
            var consonants = new Stack<string>(Console.ReadLine().Split(" ",StringSplitOptions.RemoveEmptyEntries).ToArray());

            var pearDictionary = new Dictionary<string, int>();
            pearDictionary.Add("p", 0);
            pearDictionary.Add("e", 0);
            pearDictionary.Add("a", 0);
            pearDictionary.Add("r", 0);

            var flourDictionary = new Dictionary<string, int>();
            flourDictionary.Add("f", 0);
            flourDictionary.Add("l", 0);
            flourDictionary.Add("o", 0);
            flourDictionary.Add("u", 0);
            flourDictionary.Add("r", 0);

            var porkDictionary = new Dictionary<string, int>();
            porkDictionary.Add("p", 0);
            porkDictionary.Add("o", 0);
            porkDictionary.Add("r", 0);
            porkDictionary.Add("k", 0);

            var oliveDictionary = new Dictionary<string, int>();
            oliveDictionary.Add("o", 0);
            oliveDictionary.Add("l", 0);
            oliveDictionary.Add("i", 0);
            oliveDictionary.Add("v", 0);
            oliveDictionary.Add("e", 0);

            while (consonants.Count > 0)
            {
                var currentVowel = vowels.Dequeue();
                var currentConsonant = consonants.Pop();

                if (pearDictionary.ContainsKey(currentVowel))
                {
                    pearDictionary[currentVowel]++;
                }
                if (pearDictionary.ContainsKey(currentConsonant))
                {
                    pearDictionary[currentConsonant]++;
                }

                if (porkDictionary.ContainsKey(currentVowel))
                {
                    porkDictionary[currentVowel]++;
                }
                if (porkDictionary.ContainsKey(currentConsonant))
                {
                    porkDictionary[currentConsonant]++;
                }

                if (flourDictionary.ContainsKey(currentVowel))
                {
                    flourDictionary[currentVowel]++;
                }
                if (flourDictionary.ContainsKey(currentConsonant))
                {
                    flourDictionary[currentConsonant]++;
                }

                if (oliveDictionary.ContainsKey(currentVowel))
                {
                    oliveDictionary[currentVowel]++;
                }
                if (oliveDictionary.ContainsKey(currentConsonant))
                {
                    oliveDictionary[currentConsonant]++;
                }

                vowels.Enqueue(currentVowel);
            }

            var foundWords = new List<string>();

            if (pearDictionary.Where(x => x.Value != 0).Count() == 4)
            {
                foundWords.Add("pear");
            }
            if (flourDictionary.Where(x => x.Value != 0).Count() == 5)
            {
                foundWords.Add("flour");
            }
            if (porkDictionary.Where(x => x.Value != 0).Count() == 4)
            {
                foundWords.Add("pork");
            }
            if (oliveDictionary.Where(x => x.Value != 0).Count() == 5)
            {
                foundWords.Add("olive");
            }

            Console.WriteLine($"Words found: {foundWords.Count}");
            foreach (var word in foundWords)
            {
                Console.WriteLine(word);
            }
        }
    }
}

using System;
using System.Linq;

namespace _3._Count_Uppercase_Words
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();
            var uppercaseWords = words.Where(x => x[0] == x.ToUpper()[0]);
            foreach (var word in uppercaseWords)
            {
                Console.WriteLine(word);
            }
        }
    }
}

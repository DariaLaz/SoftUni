using System;
using System.Collections.Generic;

namespace _01._Count_Same_Values_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(" ");
            var dictionary = new Dictionary<string, int>();
            for (int i = 0; i < input.Length; i++)
            {
                if (!dictionary.ContainsKey(input[i]))
                {
                    dictionary.Add(input[i], 0);
                }
                dictionary[input[i]]++;
            }

            foreach (var d in dictionary)
            {
                Console.WriteLine($"{d.Key} - {d.Value} times");
            }
        }
    }
}

using System;
using System.Collections.Generic;

namespace _04._Cities_by_Continent_and_Country
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var d = new Dictionary<string,  Dictionary<string, List<string>>>();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(" ");
                var continent = input[0];
                var country = input[1];
                var city = input[2];

                if (!d.ContainsKey(continent))
                {
                    d.Add(continent, new Dictionary<string, List<string>>());
                }
                if (!d[continent].ContainsKey(country))
                {
                    d[continent].Add(country, new List<string>());
                }

                d[continent][country].Add(city);
            }

            foreach (var continrnt in d)
            {
                Console.WriteLine($"{continrnt.Key}:");
                foreach (var country in continrnt.Value)
                {
                    Console.WriteLine($"{country.Key} -> {string.Join(", ", country.Value)}");
                }
            }
        }
    }
}

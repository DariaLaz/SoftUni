using System;
using System.Collections.Generic;

namespace _07._SoftUni_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            var people = new HashSet<string>();
            var isParty = false;
            while (true)
            {
                var input = Console.ReadLine();
                
                if (input == "END")
                {
                    break;
                }
                else if (input == "PARTY")
                {
                    isParty = true;
                }
                else if (isParty)
                {
                    people.Remove(input);
                }
                else
                {
                    people.Add(input);
                }
            }
            Console.WriteLine(people.Count);
            var vip = new HashSet<string>();
            var regular = new HashSet<string>();

            foreach (var person in people)
            {
                if (char.IsDigit(person[0]))
                {
                    vip.Add(person);
                }
                else
                {
                    regular.Add(person);
                }
            }

            foreach (var person in vip)
            {
                Console.WriteLine(person);
            }
            foreach (var person in regular)
            {
                Console.WriteLine(person);
            }
        }
    }
}

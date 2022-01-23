using System;
using System.Collections.Generic;
using System.Linq;

namespace _10._Predicate_Party_
{
    class Program
    {
        static void Main(string[] args)
        {
            var peopleInvited = Console.ReadLine().Split(" ").ToList();
            var result = new List<string>();
            while (true)
            {
                var command = Console.ReadLine().Split(" ");
                if (command[0] == "Party!")
                {
                    break;
                }
                Func<string, bool> f = p => true;

                switch (command[1])
                {
                    case "StartsWith": f = (n => n.StartsWith(command[2])); break;
                    case "EndsWith": f = (n => n.EndsWith(command[2])); break;
                    case "Length": f = (n => n.Length == int.Parse((command[2]))); break;
                }

                if (command[0] == "Remove")
                {
                    foreach (var p in peopleInvited.Where(f))
                    {
                        peopleInvited.Remove(p);
                        if (!peopleInvited.Where(f).Any()) break;
                    }
                }
                else if (command[0] == "Double")
                {
                    foreach (var p in peopleInvited.Where(f))
                    {
                        peopleInvited.Add(p);
                    }
                }
            }

            if (peopleInvited.Any())
            {
                Console.WriteLine(string.Join(", ", peopleInvited) + " are going to the party!");

            }
            else
            {
                Console.WriteLine("Nobody is going to the party!");
            }
        }
    }
}

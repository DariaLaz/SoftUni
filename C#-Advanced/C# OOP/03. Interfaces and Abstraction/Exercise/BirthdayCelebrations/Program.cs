using System;
using System.Collections.Generic;
using System.Linq;

namespace BirthdayCelebrations
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, IBuyer> listOfBuyers = new Dictionary<string, IBuyer>();
            var n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split();
                IBuyer buyer = null;
                var name = input[0];
                var age = int.Parse(input[1]);
                if (input.Length == 4)
                {
                    
                    var id = input[2];
                    var birthdate = input[3];

                    buyer = new Citizen(name, age, id, birthdate);
                }
                else if (input.Length == 3)
                {
                    var group = input[2];

                    buyer = new Rebel(name, age, group);
                }

                listOfBuyers.Add(name, buyer);
            }

            while (true)
            {
                var input = Console.ReadLine();
                if (input == "End")
                {
                    break;
                }
                if (listOfBuyers.ContainsKey(input))
                {
                    listOfBuyers[input].BuyFood();
                }
            }

            Console.WriteLine(listOfBuyers.Values.Sum(x => x.Food));

        }
    }
}

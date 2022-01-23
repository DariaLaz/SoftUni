using System;
using System.Linq;

namespace DefiningClasses
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var family = new Family();
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(" ");
                var name = input[0];
                var age = int.Parse(input[1]);
                var person = new Person(name, age);
                family.AddMember(person);
            }

            foreach (var member in family.Members.Where(x => x.Age > 30).OrderBy(x => x.Name))
            {
                Console.WriteLine($"{member.Name} - {member.Age}");
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;

namespace Raiding
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var heroes = new List<BaseHero>();

           while(heroes.Count < n)
            {
                BaseHero hero = null;

                var heroName = Console.ReadLine();
                var heroType = Console.ReadLine();

                if (heroType == "Druid")
                {
                    hero = new Druid(heroName);
                }
                else if (heroType == "Paladin")
                {
                    hero = new Paladin(heroName);
                }
                else if (heroType == "Rogue")
                {
                    hero = new Rogue(heroName);
                }
                else if (heroType == "Warrior")
                {
                    hero = new Warrior(heroName);
                }
                else
                {
                    Console.WriteLine("Invalid hero!");
                }

                if (hero != null)
                {
                    heroes.Add(hero);
                }
            }

            var bossesPower = int.Parse(Console.ReadLine());
            foreach (var hero in heroes)
            {
                hero.CastAbility();
            }
            if (heroes.Sum(x => x.Power) >= bossesPower)
            {
                Console.WriteLine("Victory!");
            }
            else
            {
                Console.WriteLine("Defeat...");
            }
        }
    }
}

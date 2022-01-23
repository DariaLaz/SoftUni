using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding
{
    public class Druid : BaseHero
    {
        public Druid(string name) : base(name, 80)
        {
        }

        public override void CastAbility()
        {
            Console.WriteLine($"Druid - {this.Name} healed for {this.Power}");
        }
    }
}

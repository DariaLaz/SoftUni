using System;
using System.Collections.Generic;
using System.Text;

namespace Animals
{
    public class Dog : Animal
    {
        private string sound = "DJAAF";
        public Dog(string name, string favouriteFood)
            : base(name, favouriteFood)
        {
        }
        public override string ExplainSelf()
        {
            return base.ExplainSelf() + Environment.NewLine + $"{sound}";
        }
    }
}

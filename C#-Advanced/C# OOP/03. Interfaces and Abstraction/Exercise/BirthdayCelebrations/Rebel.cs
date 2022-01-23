using System;
using System.Collections.Generic;
using System.Text;

namespace BirthdayCelebrations
{
    public class Rebel : IBuyer
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Group { get; set; }

        private int food = 0;

        public Rebel(string name, int age, string group)
        {
            Name = name;
            Age = age;
            Group = group;
        }

        public int Food
        {
            get { return food; }
            private set { food = value; }
        }

        public void BuyFood()
        {
            Food = food +  5;
        }
    }
}

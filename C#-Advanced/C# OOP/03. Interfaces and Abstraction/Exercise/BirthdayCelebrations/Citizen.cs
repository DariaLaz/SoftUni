using System;
using System.Collections.Generic;
using System.Text;

namespace BirthdayCelebrations
{
    public class Citizen : IBirthdable, IBuyer
    {
        public Citizen(string name, int age, string id, string birthdate)
        {
            Name = name;
            Age = age;
            Id = id;
            Birthdate = birthdate;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Id { get; set; }
        public string Birthdate { get; set; }
        private int food = 0;
        public int Food
        {
            get { return food; }
            private set { food = value; }
        }

        public void BuyFood()
        {
            Food = food + 10;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo
{
    public class Citizen : IPerson, IBirthable, IIdentifiable
    {
        private string name;
        private int age;

        public Citizen(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public Citizen(string name, int age, string id, string birthdate)
        {
            Name = name;
            Age = age;
            Birthdate = birthdate;
            Id = id;
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public int Age
        {
            get { return age; }
            set { age = value; }
        }

        public string Birthdate { get; set; }
        public string Id { get; set; }
    }
}

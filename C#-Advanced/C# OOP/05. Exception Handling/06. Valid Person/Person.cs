using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace _06._Valid_Person
{
    public class Person
    {
        private string firstName;
        private string lastName;
        private int age;

        public Person(string firstName, string lastName, int age)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
        }

        public string FirstName
        {
            get => firstName; 
            set {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException("value", "The first name cannat be null or empty");
                }
                firstName = value;
            }
        }
        public string LastName
        {
            get => lastName;
            set
            {
                if (string.IsNullOrEmpty(value));
                {
                    throw new InvalidPersonNameException();
                }
                lastName = value;
            }
        }
        public int Age
        {
            get => age; 
            set {
                if (value < 0 || value > 120)
                {
                    throw new ArgumentOutOfRangeException("value",
                        "Age should be in the range [0 .. 120].");
                }
                age = value;
            }
        }


    }
}

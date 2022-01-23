using System;

namespace _06._Valid_Person
{
    class Program
    {
        static void Main(string[] args)
        {
            Person firstPerson = new Person("Peter", "Johnson", 24);

            //Invalid inputs
            Person personWithoutFirstName = new Person(string.Empty, "Peterson", 31);
            Person personWithoutLastName = new Person("Jordon", string.Empty, 31);
            Person personWithNegativeAge = new Person("Peter", "Peterson", -1);
            Person personWithBigAge = new Person("{eter", "Peterson", 351);

        }
    }
}

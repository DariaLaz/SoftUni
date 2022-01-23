using System;
using System.Collections.Generic;
using System.Linq;

namespace _5._Filter_By_Age
{
    class Program
    {
        class Student
        {
            public string Name;
            public int Age;
        }
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var listOfStudents = new List<Student>();
            for (int i = 0; i < n; i++)
            {
                var line = Console.ReadLine().Split(", ");
                var student = new Student();
                student.Name = line[0];
                student.Age = int.Parse(line[1]);
                listOfStudents.Add(student);
            }
            var condition = Console.ReadLine();
            Func<Student, bool> filter = p => true;
            var givenAge = int.Parse(Console.ReadLine());
            if (condition == "older")
            {
                filter = x => x.Age >= givenAge;
            }
            else if (condition == "younger")
            {
                filter = x => x.Age < givenAge;

            }

            var filteredPeople = listOfStudents.Where(filter);

            var printing = Console.ReadLine();


            Func<Student, string> print = p => p.Name + " - " + p.Age;

            switch (printing)
            {
                case "name":
                    print = p => $"{p.Name}"; break;
                case "age":
                    print = person => $"{person.Age.ToString()}"; break;
                case "name and age":
                    print = person => $"{person.Name} - {person.Age}"; break;
            }

            var result = filteredPeople.Select(print);

            foreach (var person in result)
            {
                Console.WriteLine(person);
            }
        }
        
    }
 }

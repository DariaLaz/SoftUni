using System;
using System.Collections.Generic;
using System.Linq;

namespace _02._Average_Student_Grades
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var students = new Dictionary<string, List<decimal>>();
            for (int i = 0; i < n; i++)
            {
                var st = Console.ReadLine().Split(" ");
                var name = st[0];
                var gr = decimal.Parse(st[1]);


                if (!(students.ContainsKey(name)))
                {
                    students.Add(name, new List<decimal>());
                }
                students[name].Add(gr);
            }

            foreach (var student in students)
            {
                Console.WriteLine($"{student.Key} -> {string.Join(" ", student.Value.Select(v => $"{v:f2}"))} (avg: {student.Value.Average():f2})");
            }
        }
    }
}

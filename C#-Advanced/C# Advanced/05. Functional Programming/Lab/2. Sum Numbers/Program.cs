﻿using System;
using System.Linq;

namespace _2._Sum_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(", ").Select(int.Parse);
            Console.WriteLine(numbers.Count());
            Console.WriteLine(numbers.Sum());

        }
    }
}

using System;
using System.Collections.Generic;

namespace _01._Generic_Box_of_String
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            List<Box<string>> listOfBoxes = new List<Box<string>>();
            for (int i = 0; i < n; i++)
            {
                var box = new Box<string>(Console.ReadLine());
                listOfBoxes.Add(box);
                Console.WriteLine(box.ToString());
            }
        }
    }
}

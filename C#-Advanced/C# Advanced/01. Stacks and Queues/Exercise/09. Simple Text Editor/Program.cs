using System;
using System.Collections.Generic;

namespace _09._Simple_Text_Editor
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var text = "";
            var beforeLastOperation = new Stack<string>();
            for (int i = 0; i < n; i++)
            {
                var command = Console.ReadLine().Split(" ");
                if (command[0] == "1")
                {
                    beforeLastOperation.Push(text);
                    text += (command[1]);
                }
                else if (command[0] == "2")
                {
                    beforeLastOperation.Push(text);
                    text = text.Remove(text.Length - int.Parse(command[1]));
                }
                else if (command[0] == "3")
                {
                    Console.WriteLine(text[int.Parse(command[1]) - 1]);
                }
                else if (command[0] == "4")
                {
                    text = beforeLastOperation.Pop();
                }

            }
        }
    }
}

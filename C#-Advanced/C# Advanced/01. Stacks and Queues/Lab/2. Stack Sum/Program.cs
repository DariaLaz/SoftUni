using System;
using System.Collections.Generic;

namespace _2._Stack_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(' ');
            var st = new Stack<int>();
            foreach (var item in input)
            {
                st.Push(int.Parse(item));
            }
            while (true)
            {
                input = Console.ReadLine().Split(' ');
                var command = input[0].ToLower();
                if (command ==  "end")
                {
                    break;
                }
                else if (command == "add")
                {
                    for (int i = 1; i < input.Length; i++)
                    {
                        st.Push(int.Parse(input[i]));
                    }
                }
                else if (command == "remove" && int.Parse(input[1]) <= st.Count)
                {
                    for (int i = 0; i < int.Parse(input[1]); i++)
                    {
                        st.Pop();
                    }
                }
            }
            int sum = 0;
            foreach (var s in st)
            {
                sum += s;
            }
            Console.WriteLine("Sum: " + sum);
        }
    }
}

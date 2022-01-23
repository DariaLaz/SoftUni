using System;
using System.Collections.Generic;

namespace _1._Reverse_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var st = new Stack<char>();
            for (int i = 0; i < input.Length; i++)
            {
                st.Push(input[i]);
            }
            while (st.Count != 0)
            {
                Console.Write(st.Pop());
            }
            Console.WriteLine();
        }
    }
}

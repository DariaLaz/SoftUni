using System;
using System.Collections.Generic;
using System.Linq;

namespace _08._Balanced_Parenthesis
{
    class Program
    {
        static void Main(string[] args)
        {
            

            var text = Console.ReadLine();

            var openingBr = new Queue<char>();
            var closingBr = new Stack<char>();
            var isBalanced = true;
            for (int i = 0; i < text.Count(); i++)
            {
                if (text[i] == '(' || text[i] == '[' || text[i] == '{')
                {
                    openingBr.Enqueue(text[i]);
                }
                else
                {
                    closingBr.Push(text[i]);
                }
            }
            if (openingBr.Count() != closingBr.Count())
            {
                Console.WriteLine("NO");
                return;
            }
            while (openingBr.Count() != 0 && closingBr.Count() != 0)
            {
                if ((openingBr.Peek() == '{' && closingBr.Peek() == '}') ||
                    (openingBr.Peek() == '(' && closingBr.Peek() == ')') ||
                    (openingBr.Peek() == '[' && closingBr.Peek() == ']')) { }
                else
                {
                    isBalanced = false;
                }
                openingBr.Dequeue();
                closingBr.Pop();
            }
            Console.WriteLine(isBalanced ? "YES" : "NO");
        }
    }
}

using System;
using System.Collections.Generic;

namespace _4._Matching_Brackets
{
    class Program
    {
        static void Main(string[] args)
        {
            var equation = Console.ReadLine();
            var openBraketsIndexes = new Stack<int>();
            int closingBraketsIndexes;
            for (int i = 0; i < equation.Length; i++)
            {
                var check = equation[i];
                if (equation[i] == '(') 
                {
                    openBraketsIndexes.Push(i);
                }
                else if (equation[i] == ')')
                {
                    closingBraketsIndexes = i;
                    for (int j = openBraketsIndexes.Pop(); j <= closingBraketsIndexes; j++)
                    {
                        Console.Write(equation[j]);
                    }
                    Console.WriteLine();
                }
            }
        }
    }
}

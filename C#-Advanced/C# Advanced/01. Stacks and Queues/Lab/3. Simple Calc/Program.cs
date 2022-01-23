using System;

namespace _3._Simple_Calc
{
    class Program
    {
        static void Main(string[] args)
        {
            var equa = Console.ReadLine().Split(' ');
            var sum = int.Parse(equa[0]);
            for (int i = 1; i < equa.Length; i += 2)
            {
                if (equa[i] == "+")
                {
                    sum += int.Parse(equa[i + 1]);
                }
                else
                {
                    sum -= int.Parse(equa[i + 1]);
                }
            }
            Console.WriteLine(sum);
        }
    }
}

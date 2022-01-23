using System;
using System.Collections.Generic;

namespace _8._Traffic_Jam
{
    class Program
    {
        static void Main(string[] args)
        {
            var carsThatCanPass = int.Parse(Console.ReadLine());
            Queue<string> q = new Queue<string>();
            var sum = 0;
            while (true)
            {
                var car = Console.ReadLine();
                if (car == "end")
                {
                    break;
                }
                else if (car == "green")
                {
                    for (int i = 0; i < carsThatCanPass; i++)
                    {
                        if (q.Count>0)
                        {
                            Console.WriteLine($"{q.Dequeue()} passed!");
                            sum++;
                        }
                        
                    }
                    
                }
                else
                {
                    q.Enqueue(car);
                }
            }
            Console.WriteLine($"{sum} cars passed the crossroads.");
        }
    }
}

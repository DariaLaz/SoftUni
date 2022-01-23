using System;
using System.Collections.Generic;
using System.Linq;

namespace _04._Fast_Food
{
    class Program
    {
        static void Main(string[] args)
        {
            var quantity = int.Parse(Console.ReadLine());
            int[] orders = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var queueOfOrders = new Queue<int>(orders);

            Console.WriteLine(orders.Max());
            while (queueOfOrders.Count > 0 && quantity > 0)
            {
                int currentOrder = queueOfOrders.Peek();
                
                if (quantity - currentOrder >= 0)
                {
                    quantity -= currentOrder;
                    queueOfOrders.Dequeue();
                }
                else
                {
                    break;
                }
            }

            if (queueOfOrders.Count > 0)
            {
                Console.WriteLine($"Orders left: {string.Join(" ", queueOfOrders)}");
            }
            else
            {
                Console.WriteLine("Orders complete");
            }
        }
    }
}

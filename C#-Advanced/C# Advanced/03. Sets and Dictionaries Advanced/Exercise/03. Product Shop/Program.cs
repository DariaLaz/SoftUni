using System;
using System.Collections.Generic;

namespace _03._Product_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            var d = new SortedDictionary<string, Dictionary<string, double>>();
            while (true)
            {
                var line = Console.ReadLine().Split(", ");
                if (line[0] == "Revision")
                {
                    break;
                }

                var shop = line[0];
                var product = line[1];
                var price = double.Parse(line[2]);

                if (!d.ContainsKey(shop))
                {
                    d.Add(shop, new Dictionary<string, double>());
                }

                if (!d[shop].ContainsKey(product))
                {
                    d[shop].Add(product, price);
                }
                else
                {
                    d[shop][product] = price;
                }
            }

            foreach (var shop in d)
            {
                Console.WriteLine($"{shop.Key}->");
                foreach (var product in shop.Value)
                {
                    Console.WriteLine($"Product: {product.Key}, Price: {product.Value}");
                }
            }
        }
    }
}

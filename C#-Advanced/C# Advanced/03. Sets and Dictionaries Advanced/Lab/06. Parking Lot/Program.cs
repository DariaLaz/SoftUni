using System;
using System.Collections.Generic;

namespace _06._Parking_Lot
{
    class Program
    {
        static void Main(string[] args)
        {
            var parking = new HashSet<string>();
            while (true)
            {
                var input = Console.ReadLine().Split(", ");

                if (input[0] == "END")
                {
                    break;
                }

                if (input[0] == "IN")
                {
                    parking.Add(input[1]);
                }
                else
                {
                    parking.Remove(input[1]);
                }
            }

            if (parking.Count == 0)
            {
                Console.WriteLine("Parking Lot is Empty");
            }
            else
            {
                foreach (var car in parking)
                {
                    Console.WriteLine(car);
                }
            }
        }
    }
}

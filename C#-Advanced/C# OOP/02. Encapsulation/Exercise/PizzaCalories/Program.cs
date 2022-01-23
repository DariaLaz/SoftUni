using System;
using System.Collections.Generic;

namespace PizzaCalories
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var pizzaLine = Console.ReadLine().Split();
                var pizzaName = pizzaLine[1];

                var doughLine = Console.ReadLine().Split();
                var doughType = doughLine[1];
                var doughBakingTech = doughLine[2];
                var doughWeight = double.Parse(doughLine[3]);

                var dought = new Dough(doughType, doughBakingTech, doughWeight);

                var pizza = new Pizza(pizzaName, dought);

                while (true)
                {
                    var input = Console.ReadLine().Split();

                    if (input[0] == "END")
                    {
                        break;
                    }

                    var toppingType = input[1];
                    var toppingWeight = double.Parse(input[2]);

                    var topping = new Topping(toppingType, toppingWeight);

                    pizza.AddTopping(topping);
                }

                Console.WriteLine($"{pizza.Name} - {pizza.GetTotalCalories():f2} Calories.");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}

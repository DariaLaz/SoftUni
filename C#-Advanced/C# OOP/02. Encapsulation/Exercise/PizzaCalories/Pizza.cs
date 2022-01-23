using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PizzaCalories
{
    class Pizza
    {
        public Pizza(string name, Dough dough)
        {
            this.Name = name;
            this.Dough = dough;
            this.Toppings = new List<Topping>();
        }

        private string name;
        public string Name {
            get => name;
            set
            {
                if (value.Length < 1 || value.Length > 15)
                {
                    throw new Exception("Pizza name should be between 1 and 15 symbols.");
                }
                name = value;
            }
        }
        public Dough Dough { get; set; }
        public List<Topping> Toppings { get; private set; }

        public void AddTopping(Topping topping)
        {
            if (Toppings.Count == 10)
            {
                throw new Exception("Number of toppings should be in range [0..10].");
            }
            Toppings.Add(topping);
        }
        public double GetTotalCalories()
        {
            var calories = Dough.DoughCalories();
            foreach (var topping in Toppings)
            {
                calories += topping.ToppingCalories;
            }
            return calories;
        }
    }
}

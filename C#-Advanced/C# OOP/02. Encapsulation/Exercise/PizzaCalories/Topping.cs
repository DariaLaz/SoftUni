using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories
{
    public class Topping
    {
        private string type;
        private double weight;

        private Dictionary<string, double> listOfTypes = new Dictionary<string, double>()
        {
            { "meat", 1.2 },
            { "veggies", 0.8 },
            { "cheese", 1.1 },
            { "sauce", 0.9 }
        };

        public Topping(string type, double weight)
        {
            Type = type;
            Weight = weight;
        }

        public string Type
        {
            get => type;
            set {
                if (!listOfTypes.ContainsKey(value.ToLower()))
                {
                    throw new Exception($"Cannot place {value} on top of your pizza.");
                }
                type = value;
            }
        }
        public double Weight
        {
            get => weight; 
            set {
                if (value < 1 || value > 50)
                {
                    throw new Exception($"{Type} weight should be in the range [1..50].");
                }
                weight = value;
            }
        }

        public double ToppingCalories => 2 * Weight * listOfTypes[Type.ToLower()];

    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public abstract class Animal : IAnimal
    {
        protected Animal(string name, double weight)
        {
            Name = name;
            Weight = weight;
            FoodEaten = 0.0;
        }

        public string Name { get; set; }
        public double Weight { get; set; }
        public double FoodEaten { get; set; }

        public abstract void Eat(IFood foof);

        public void AnimalDoesNotEatThisType(IFood food, IAnimal animal)
        {
            throw new Exception($"{animal.GetType().Name} does not eat {food.GetType().Name}!");
        }
        public abstract string ProduceSound();
    }
}

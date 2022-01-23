using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
     public interface IAnimal
    {
        public string  Name { get; set; }
        public double Weight { get; set; }
        public double FoodEaten { get; set; }

        string ProduceSound();
        void Eat(IFood food);
    }
}

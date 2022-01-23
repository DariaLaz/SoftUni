using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Hen : Bird
    {
        public Hen(string name, double weight, double wingSize) :
            base(name, weight, wingSize)
        {
        }

        public override void Eat(IFood food)
        {
            FoodEaten += food.Quantity;
            this.Weight += food.Quantity * 0.35;
            ProduceSound();

        }

        public override string ProduceSound()
        {
            return "Cluck";
        }
    }
}

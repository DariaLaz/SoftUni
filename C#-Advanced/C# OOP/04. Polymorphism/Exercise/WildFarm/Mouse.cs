using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Mouse : Mammal
    {
        public Mouse(string name, double weight, string livingRegion) 
            : base(name, weight, livingRegion)
        {
        }

        public override void Eat(IFood food)
        {
            if (!(food is Vegetable || food is Fruit))
            {
                AnimalDoesNotEatThisType(food, this);
            }
            FoodEaten += food.Quantity;
            this.Weight += food.Quantity * 0.1;
            ProduceSound();

        }

        public override string ProduceSound()
        {
            return "Squeak";
        }
    }
}

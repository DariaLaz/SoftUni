using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Cat : Feline
    {
        public Cat(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
        {
        }

        public override void Eat(IFood food)
        {
            if (!(food is Meat || food is Vegetable))
            {
                AnimalDoesNotEatThisType(food, this);
            }
            FoodEaten += food.Quantity;
            this.Weight += food.Quantity * 0.3;
            ProduceSound();
        }

        public override string ProduceSound()
        {
            return "Meow";
        }
    }
}

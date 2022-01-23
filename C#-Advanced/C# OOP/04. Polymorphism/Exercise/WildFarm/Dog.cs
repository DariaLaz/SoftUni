using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm
{
    public class Dog : Mammal
    {
        public Dog(string name, double weight, string livingRegion) 
            : base(name, weight, livingRegion)
        {
        }

        public override void Eat(IFood food)
        {
            if (!(food is Meat))
            {
                AnimalDoesNotEatThisType(food, this);
            }

            FoodEaten += food.Quantity;
            this.Weight += food.Quantity * 0.4;
            ProduceSound();

        }

        public override string ProduceSound()
        {
            return "Woof!";
        }

       
    }
}

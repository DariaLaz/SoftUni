using System;
using System.Collections.Generic;

namespace WildFarm
{
    class Program
    {
        static void Main(string[] args)
        {
            List<IAnimal> animals = new List<IAnimal>();
           
                while (true)
                {
                    var animalLine = Console.ReadLine().Split();
                try
                {
                    IAnimal animal = null;
                    if (animalLine[0] == "End")
                    {
                        break;
                    }
                    var foodLine = Console.ReadLine().Split();

                    var animalType = animalLine[0];
                    var animalName = animalLine[1];
                    var animalWeight = double.Parse(animalLine[2]);


                    if (animalType == "Cat")
                    {
                        var livingRegion = animalLine[3];
                        var breed = animalLine[4];

                        animal = new Cat(animalName, animalWeight, livingRegion, breed);
                    }
                    else if (animalType == "Tiger")
                    {
                        var livingRegion = animalLine[3];
                        var breed = animalLine[4];

                        animal = new Tiger(animalName, animalWeight, livingRegion, breed);
                    }
                    else if (animalType == "Hen")
                    {
                        var wingSize = double.Parse(animalLine[3]);

                        animal = new Hen(animalName, animalWeight, wingSize);
                    }
                    else if (animalType == "Owl")
                    {
                        var wingSize = double.Parse(animalLine[3]);

                        animal = new Owl(animalName, animalWeight, wingSize);
                    }
                    else if (animalType == "Mouse")
                    {
                        var livinRegion = animalLine[3];

                        animal = new Mouse(animalName, animalWeight, livinRegion);
                    }
                    else if (animalType == "Dog")
                    {
                        var livinRegion = animalLine[3];

                        animal = new Dog(animalName, animalWeight, livinRegion);

                    }
                    animals.Add(animal);
                    IFood food = null;
                    var foodType = foodLine[0];
                    var foodQuantity = int.Parse(foodLine[1]);
                    if (foodType == "Vegetable") food = new Vegetable(foodQuantity);
                    else if (foodType == "Fruit") food = new Fruit(foodQuantity);
                    else if (foodType == "Meat") food = new Meat(foodQuantity);
                    else if (foodType == "Seeds") food = new Seeds(foodQuantity);

                    Console.WriteLine(animal.ProduceSound());
                    animal.Eat(food);

                    
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                }

                foreach (var animal in animals)
                {
                    Console.WriteLine(animal.ToString());
                }
            
        }
    }
}

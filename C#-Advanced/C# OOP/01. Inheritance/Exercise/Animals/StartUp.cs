using System;
using System.Collections.Generic;

namespace Animals
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var result = new List<string>();

            while (true)
            {
                var animal = Console.ReadLine();

                if (animal == "Beast!")
                {
                    foreach (var line in result)
                    {
                        Console.WriteLine(line);
                    }
                    break;
                }

                var characteristics = Console.ReadLine().Split();

                var name = characteristics[0];
                var age = int.Parse(characteristics[1]);
                string gender = characteristics[2];
                

                    Animal anim = new Animal(name, age, gender);
                    switch (animal)
                    {
                        case "Dog": anim = new Dog(name, age, gender); break;
                        case "Cat": anim = new Cat(name, age, gender); break;
                        case "Frog": anim = new Frog(name, age, gender); break;
                        case "Kitten": anim = new Kitten(name, age); break;
                        case "Tomcat": anim = new Tomcat(name, age); break;

                        default:
                            break;
                    }
                    result.Add(animal);
                    result.Add(anim.ToString());
                
            }

            
            

        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;

namespace ShoppingSpree
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var listOfAllPeople = new List<Person>();
                var listOfAllProducts = new List<Product>();

                var allPeople = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);
                var allProducts = Console.ReadLine().Split(';', StringSplitOptions.RemoveEmptyEntries);

                foreach (var person in allPeople)
                {
                    var parts = person.Split('=', StringSplitOptions.RemoveEmptyEntries);
                    var newPerson = new Person(parts[0], double.Parse(parts[1]));

                    listOfAllPeople.Add(newPerson);
                }

                foreach (var product in allProducts)
                {
                    var parts = product.Split('=', StringSplitOptions.RemoveEmptyEntries);
                    var newProduct = new Product(parts[0], double.Parse(parts[1]));

                    listOfAllProducts.Add(newProduct);
                }

                while (true)
                {
                    var input = Console.ReadLine().Split();
                    if (input[0] == "END")
                    {
                        break;
                    }
                    if (listOfAllPeople.Where(x => x.Name == input[0]).Any())
                    {
                        listOfAllPeople.First(x => x.Name == input[0]).BuyProduct(listOfAllProducts.First(p => p.ProductName == input[1]));

                    }
                    else
                    {
                        return;
                    }

                }

                foreach (var person in listOfAllPeople)
                {
                    if (person.BoughtProducts.Count == 0)
                    {
                        Console.WriteLine($"{person.Name} - Nothing bought");
                    }
                    else
                    {
                        Console.WriteLine(person.ToString());
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}

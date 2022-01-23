using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingSpree
{
    public class Person
    {
        private string name;
        private double money;
        private List<Product> bagOfProducts;

        public Person(string name, double money)
        {
            Name = name;
            Money = money;
            bagOfProducts = new List<Product>();
        }

        public string Name
        {
            get { return name; }
            set {
                if (name == "")
                {
                    throw new ArgumentException("Name cannot be empty");
                }
                name = value;
            }
        }
        public double Money
        {
            get => money;
            set {
                if (value < 0)
                {
                    throw new ArgumentException("Money cannot be negative");
                }
                money = value; 
            }
        }
        public IReadOnlyCollection<Product> BoughtProducts => bagOfProducts;
        public void BuyProduct(Product product)
        {
            if (this.Money < product.ProductCost)
            {
                Console.WriteLine($"{this.Name} can't afford {product.ProductName}");
            }
            else
            {
                bagOfProducts.Add(product);
                money -= product.ProductCost;
                Console.WriteLine($"{this.Name} bought {product.ProductName}");
            }

        }

        public override string ToString()
        {
           return $"{this.Name} - {string.Join(", ", bagOfProducts)}";
        }
    }
}

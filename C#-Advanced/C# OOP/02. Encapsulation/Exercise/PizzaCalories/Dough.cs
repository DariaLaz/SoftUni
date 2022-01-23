using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories
{
    public class Dough
    {
        private string flourType;
        private string bakingTechnique;
        private double weight;

        private Dictionary<string, double> listOfFlourTypes = new Dictionary<string, double>()
        {
            { "white", 1.5 },
            { "wholegrain", 1}
        };
        private Dictionary<string, double> listOfBakingTechniques = new Dictionary<string, double>()
        {
            { "crispy", 0.9 },
            { "chewy", 1.1 },
            { "homemade", 1}
        };

        public Dough(string flourType, string bakingTechnique, double weight)
        {
            FlourType = flourType;
            BakingTechnique = bakingTechnique;
            Weight = weight;
        }

        public string FlourType
        {
            get => flourType; 
            set {
                if (!listOfFlourTypes.ContainsKey((value.ToLower())))
                {
                    throw new Exception("Invalid type of dough.");
                }
                flourType = value; 
            }
        }
        public string BakingTechnique
        {
            get => bakingTechnique; 
            set {
                if (!listOfBakingTechniques.ContainsKey(value.ToLower()))
                {
                    throw new Exception("Invalid type of dough.");
                }
                bakingTechnique = value; 
            }
        }
        public double Weight
        {
            get => weight; 
            set {
                if (value < 1 || value > 200)
                {
                    throw new Exception("Dough weight should be in the range [1..200].");
                }
                weight = value; 
            }
        }

        public double DoughCalories() => 2 * weight * listOfBakingTechniques[BakingTechnique.ToLower()] * listOfFlourTypes[FlourType.ToLower()];

    }
}

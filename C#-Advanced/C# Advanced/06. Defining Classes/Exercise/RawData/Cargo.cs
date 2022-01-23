using System;
using System.Collections.Generic;
using System.Text;

namespace RawData
{
    class Cargo
    {
        private string type;
        private double weight;

        public string Type
        {
            get
            {
                return type;
            }
            set
            {
                type = value;
            }
        }
        public double Weight
        {
            get
            {
                return weight;
            }
            set
            {
                weight = value;
            }
        }

        public Cargo(string type, double weight)
        {
            this.Type = type;
            this.Weight = weight;
        }
    }
}

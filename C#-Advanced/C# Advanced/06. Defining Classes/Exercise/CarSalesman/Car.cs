using System;
using System.Collections.Generic;
using System.Text;

namespace CarSalesman
{
    public class Car
    {
        private string model;
        private Engine engine;
        private int? weight;
        private string? color;

        public string Model
        {
            get
            {
                return model;
            }
            set
            {
                model = value;
            }
        }

        public Engine Engine
        {
            get
            {
                return engine;
            }
            set
            {
                engine = value;
            }
        }

        public int? Weight
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

        public string? Color
        {
            get
            {
                return color;
            }
            set
            {
                color = value;
            }
        }
    }
}

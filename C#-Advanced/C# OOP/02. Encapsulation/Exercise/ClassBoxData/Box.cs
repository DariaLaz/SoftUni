using System;
using System.Collections.Generic;
using System.Text;

namespace ClassBoxData
{
    public class Box
    {
        public Box(double length, double width, double height)
        {
            this.Length = length;
            this.Width = width;
            this.Height = height;
        }

        public double length;
        public double width;
        public double height;

        public double Length {
            get => length;
            private set
            {

                length = value;
            }
        }
        public double Width {
            get => width;
            private set
            {

                width = value;
            }
        }
        public double Height {
            get => height;
            private set
            {

                height = value;
            }
        }

        public void SurfaceArea()
        {
            Console.WriteLine($"Surface Area - {2 * this.length * this.width + 2 * this.length * this.height + 2 * this.width * this.height :f2}");
        }
        public void LateralSurfaceArea()
        {
            Console.WriteLine($"Lateral Surface Area - {2 * this.length * this.height + 2 * this.width * this.height :f2}");
        }
        public void Volume()
        {
            Console.WriteLine($"Volume - {this.length * this.width * this.height :f2}");
        }
    }
}

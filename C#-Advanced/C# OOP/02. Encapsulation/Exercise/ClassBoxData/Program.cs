using System;

namespace ClassBoxData
{
    public class Program
    {
        static void Main(string[] args)
        {
            var l = double.Parse(Console.ReadLine());
            var w = double.Parse(Console.ReadLine());
            var h = double.Parse(Console.ReadLine());

            if (l <= 0)
            {
                Console.WriteLine("Length cannot be zero or negative.");
                return;
            }
            else if (w <= 0)
            {
                Console.WriteLine("Width cannot be zero or negative.");
                return;
            }
            else if (h <= 0)
            {
                Console.WriteLine("Height cannot be zero or negative.");
                return;
            }
            var box = new Box(l, w, h);
            box.SurfaceArea();
            box.LateralSurfaceArea();
            box.Volume();
        }
    }
}

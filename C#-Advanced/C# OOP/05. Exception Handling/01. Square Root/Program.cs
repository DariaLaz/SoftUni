using System;

namespace _01._Square_Root
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {

                var num = int.Parse(Console.ReadLine());
                if (num < 0)
                {
                    throw new ArgumentException();
                }
                var sqrRootIfNum = Math.Sqrt(num);
            }
            catch (Exception)
            {
                Console.WriteLine("Invalid number");
            }
            finally
            {
                Console.WriteLine("Goodbye");
            }
        }
    }
}

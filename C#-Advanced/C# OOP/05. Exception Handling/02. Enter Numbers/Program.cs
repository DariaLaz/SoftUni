using System;

namespace _02._Enter_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var start = int.Parse(Console.ReadLine());
            var end = int.Parse(Console.ReadLine());

            while (true)
            {
                try
                {
                    ReadNumber(start, end);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    Console.WriteLine("Start over to input");
                }
            }
        }
        public static void ReadNumber(int start, int end)
        {
            var previousNum = int.MinValue;
            for (int i = 0; i < 10; i++)
            {
                var num = int.Parse(Console.ReadLine());

                if (num < start || num > end || num <= previousNum)
                {
                    throw new ArgumentOutOfRangeException($"The number must be between {start} and {end} and bigger that the previous one");
                }
                previousNum = num;
            }

        }
    }
}

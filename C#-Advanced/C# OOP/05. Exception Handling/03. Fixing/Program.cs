using System;

namespace _03._Fixing
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string[] weekdays = new string[5];
                weekdays[0] = "Sunday";
                weekdays[1] = "Sunday";
                weekdays[2] = "Sunday";
                weekdays[3] = "Sunday";
                weekdays[4] = "Sunday";

                for (int i = 0; i <= 5; i++)
                {
                    Console.WriteLine(weekdays[i].ToString());
                }
                Console.ReadLine();
            }
            catch (IndexOutOfRangeException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}

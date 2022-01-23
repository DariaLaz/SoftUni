using System;

namespace _04._Fixing_Vol2
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNum, secondNum;
            byte result;

            try
            {
                firstNum = 30;
                secondNum = 60;
                result = Convert.ToByte(firstNum * secondNum);
                Console.WriteLine($"{firstNum} x {secondNum} = {result}");
                Console.WriteLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}

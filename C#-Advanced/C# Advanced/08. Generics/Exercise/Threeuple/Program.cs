using System;

namespace Threeuple
{
    class Program
    {
        static void Main(string[] args)
        {
            var line = Console.ReadLine().Split();
            var name = line[0] + " " + line[1];
            var town = "";
            if (line.Length != 4)
            {
                town = line[3] + " " + line[4];
            }
            else town = line[3];
            var firstThreeuple = new Threeuple<string, string,string>(name, line[2], town);
            line = Console.ReadLine().Split();
            bool thArg = (line[2] == "drunk");
            var secondThreeuple = new Threeuple<string, int, bool>(line[0], int.Parse(line[1]), thArg);
            line = Console.ReadLine().Split();
            var trThreeuple = new Threeuple<string, double, string>(line[0], double.Parse(line[1]), line[2]);


            Console.WriteLine($"{firstThreeuple.Item1} -> {firstThreeuple.Item2} -> {firstThreeuple.Item3}");
            Console.WriteLine($"{secondThreeuple.Item1} -> {secondThreeuple.Item2} -> {secondThreeuple.Item3}");
            Console.WriteLine($"{trThreeuple.Item1} -> {trThreeuple.Item2} -> {trThreeuple.Item3}");

        }
    }
}

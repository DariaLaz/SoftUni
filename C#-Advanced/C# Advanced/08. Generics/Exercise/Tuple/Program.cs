using System;

namespace Tuple
{
    class Program
    {
        static void Main(string[] args)
        {
            var line = Console.ReadLine().Split();
            var name = line[0] +" "+ line[1];
            var firstTuple = new Tuple<string, string>(name, line[2]);
            line = Console.ReadLine().Split();
            var secondTuple = new Tuple<string, int>(line[0], int.Parse(line[1]));
            line = Console.ReadLine().Split();
            var thTuple = new Tuple<int, double>(int.Parse(line[0]), double.Parse(line[1]));
            Console.WriteLine(firstTuple.Item1+ " -> " + firstTuple.Item2);
            Console.WriteLine(secondTuple.Item1 + " -> " + secondTuple.Item2);
            Console.WriteLine(thTuple.Item1 + " -> " + thTuple.Item2);


        }
    }
}

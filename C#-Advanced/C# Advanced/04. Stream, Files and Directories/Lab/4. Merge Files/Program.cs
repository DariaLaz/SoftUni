using System;
using System.IO;
using System.Linq;

namespace _4._Merge_Files
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = File.ReadAllLines("FileOne.txt").ToList();
            list.AddRange(File.ReadAllLines("FileTwo.txt"));
            list.Sort();
            File.WriteAllLines("Output.txt", list);
        }
    }
}

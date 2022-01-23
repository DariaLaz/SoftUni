using System;
using System.IO;

namespace _6._Folder_Size
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] files = Directory.GetFiles("TestFolder");
            var sum = 0.0;
            foreach (string file in files)
            {
                FileInfo sizeOfTheFile = new FileInfo(file);
                sum += sizeOfTheFile.Length;
            }
            sum = sum / 1024 / 1024;
            File.WriteAllText("оutput.txt", sum.ToString());
        }
    }
}

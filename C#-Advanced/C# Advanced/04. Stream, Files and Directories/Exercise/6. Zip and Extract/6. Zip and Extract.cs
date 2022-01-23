using System;
using System.IO;

namespace _6._Zip_and_Extract
{
    class Program
    {
        static void Main(string[] args)
        {
            System.IO.Compression.ZipFile.CreateFromDirectory(
                "../../../DirectoryToZip", 
                "../../../zipHere/zipFile.zip");
            System.IO.Compression.ZipFile.ExtractToDirectory(
                "../../../zipHere/zipFile.zip",
                "../../../extractHere");
        }
    }
}

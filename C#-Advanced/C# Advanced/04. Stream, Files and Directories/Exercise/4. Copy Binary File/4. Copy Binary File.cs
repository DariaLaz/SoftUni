using System;
using System.IO;

namespace _4._Copy_Binary_File
{
    class Program
    {
        static void Main(string[] args)
        {
            var fileStream = new FileStream(@"../../../copyMe.png",
                FileMode.OpenOrCreate);
            var copy = new FileStream(@"../../../copy.png",
                FileMode.OpenOrCreate);
            fileStream.CopyTo(copy);

            //using (FileStream reader = new FileStream(@"../../../copyMe.png", FileMode.Open))
            //{
            //    using (FileStream writer = new FileStream(@"../../../copyMe-copy.png", FileMode.Create))
            //    {
            //        while (true)
            //        {
            //            byte[] buffer = new byte[1024];
            //            int count = reader.Read(buffer, 0, buffer.Length);
            //            if (count == 0)
            //            {
            //                break;
            //            }
            //            writer.Write(buffer);
            //        }
            //    }
            //}
        }
    }
}

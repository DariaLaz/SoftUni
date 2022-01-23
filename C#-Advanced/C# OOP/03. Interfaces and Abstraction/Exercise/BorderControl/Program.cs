using System;
using System.Collections.Generic;
using System.Linq;

namespace BorderControl
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = new List<IIdentifiable>();
            while (true)
            {
                var input = Console.ReadLine().Split();

                if (input[0] == "End")
                {
                    break;
                }

                IIdentifiable indentifiable = null;

                if (input.Length == 3)
                {
                    var name = input[0];
                    var age = int.Parse(input[1]);
                    var id = input[2];

                    indentifiable = new Citizens(name, age, id);
                }
                else if (input.Length == 2)
                {
                    var model = input[0];
                    var id = input[1];

                    indentifiable = new Robot(model, id);
                }
                list.Add(indentifiable);
            }

            var endOfIdToCompare = Console.ReadLine();

            foreach (var obj in list.Where(x => x.Id.EndsWith(endOfIdToCompare)))
            {
                Console.WriteLine(obj.Id);
            }
        }
    }
}

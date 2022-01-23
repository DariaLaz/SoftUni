using System;
using System.Collections.Generic;

namespace MilitaryElite
{
    class Program
    {
        static void Main(string[] args)
        {
            var soldiers = new Dictionary<string, ISoldier>();
            while (true)    
            {
                var input = Console.ReadLine().Split();
                var action = input[0];

                if (action == "End")
                {
                    break;
                }
                var id = input[1];
                var firstName = input[2];
                var lastName = input[3];

                if (action == "Private")
                {
                   
                    var salary = decimal.Parse(input[4]);

                    IPrivate @private = new Private(id, firstName, lastName, salary);
                    soldiers.Add(id, @private);
                }
                else if (action == "LieutenantGeneral")
                {
                    var salary = decimal.Parse(input[4]);

                    var lieutenantGeneral =
                        new LieutenantGeneral(id, firstName, lastName, salary);

                    for (int i = 5; i < input.Length; i++)
                    {
                        lieutenantGeneral.Privates.Add(soldiers[input[i]] as IPrivate);
                    }
                    soldiers.Add(id, lieutenantGeneral);
                }
                else if (action == "Engineer")
                {
                    var salary = decimal.Parse(input[4]);
                    var crop = (input[5]);
                    bool isValidEnum = Enum.TryParse(crop, out Corps result);
                    if (!isValidEnum)
                    {
                        input = Console.ReadLine().Split();
                        continue;
                    }
                    IEngineer engineer = new Engineer(id, firstName, lastName, salary, result);

                    for (int i = 6; i < input.Length; i+= 2)
                    {
                        var npart = input[i];
                        var hour = int.Parse(input[i + 1]);

                        var repair = new Repair(npart, hour);

                        engineer.Repairs.Add(repair);
                    }
                    soldiers.Add(id, engineer);
                }
                else if (action == "Commando")
                {
                    var salary = decimal.Parse(input[4]);
                    var crop = (input[5]);
                    var isValidEnum = Enum.TryParse<Corps>(crop, out Corps result);
                    if (!isValidEnum)
                    {
                        input = Console.ReadLine().Split();
                        continue;
                    }

                    ICommando commando = new Commando(id, firstName, lastName, salary, result);

                    for (int i = 6; i < input.Length; i+= 2)
                    {
                        var name = input[i];
                        var state = input[i + 1];
                        var isValidMission = Enum.TryParse<Status>(state, out Status res);
                        if (!isValidMission)
                        {
                            continue;
                        }
                        var mission = new Mission(name, res);
                        commando.Missions.Add(mission);
                    }
                    soldiers.Add(id, commando);
                }
                else if (action == "Spy")
                {
                    var codeNum = int.Parse(input[4]);

                    ISpy spy = new Spy(id, firstName, lastName, codeNum);

                    soldiers.Add(id, spy);
                }
            }

            foreach (var soldier in soldiers.Values)
            {
                Console.WriteLine(soldier.ToString());
            }
        }
    }
}

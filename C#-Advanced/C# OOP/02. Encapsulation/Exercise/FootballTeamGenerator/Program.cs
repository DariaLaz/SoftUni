using System;
using System.Collections.Generic;

namespace FootballTeamGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                var ListOfTeams = new List<Team>();
                var input = Console.ReadLine().Split(';');
                if (input[0] == "END")
                {
                    break;
                }
                else if (input[0] == "Add")
                {
                    
                }
            }
        }
    }
}

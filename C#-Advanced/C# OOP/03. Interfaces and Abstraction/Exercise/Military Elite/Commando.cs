using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MilitaryElite
{
    public class Commando : SpecialisedSoldier, ICommando
    {
        public Commando(string id, string firstName, string lastName, decimal salary, Corps corp)
            : base(id, firstName, lastName, salary, corp)
        {
            Missions = new List<IMission>();
        }

        public List<IMission> Missions { get; set; }

        public void CompeteMission(string codeName)
        {
            var mission = this.Missions.FirstOrDefault(x => x.Name == codeName);
            mission.Status = Status.Finished;
        }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}");
            sb.AppendLine($"Corps: {Corps}");
            sb.AppendLine("Missions:");
            foreach (var mission in this.Missions)
            {
                sb.AppendLine($"  {mission}");
            }
            return sb.ToString().TrimEnd();
        }
    }
}

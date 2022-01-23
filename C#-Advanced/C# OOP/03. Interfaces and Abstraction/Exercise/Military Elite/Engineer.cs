using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Engineer : SpecialisedSoldier, IEngineer
    {
        public Engineer(string id, string firstName, string lastName, decimal salary, Corps corp)
            : base(id, firstName, lastName, salary, corp)
        {
            Repairs = new List<IRepair>();
        }

        public List<IRepair> Repairs { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}");
            sb.AppendLine($"Corps: {Corps}");
            sb.AppendLine("Repairs:");
            foreach (var repair in Repairs)
            {
                sb.AppendLine($"  {repair}");
            }
            return sb.ToString().TrimEnd();
        }
    }
}

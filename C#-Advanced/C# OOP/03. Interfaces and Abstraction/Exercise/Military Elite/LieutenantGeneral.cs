using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class LieutenantGeneral : Private, ILieutenantGeneral
    {
        public LieutenantGeneral(string id, string firstName, string lastName, decimal salary) 
            : base(id, firstName, lastName, salary)
        {
            Privates = new List<IPrivate>();
        }

        public List<IPrivate> Privates { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id} Salary: {Salary:f2}");
            sb.AppendLine("Privates:");
            foreach (var prv in this.Privates)
            {
                sb.AppendLine($"  { prv}");
            }
            return sb.ToString();
        }
    }
}

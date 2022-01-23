using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Spy : Soldier, ISpy
    {
        public Spy(string id, string firstName, string lastName, int codeNum)
            : base(id, firstName, lastName)
        {
            this.CodeNumber = codeNum;
        }

        public int CodeNumber { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine($"Name: {FirstName} {LastName} Id: {Id}");
            sb.AppendLine($"Code Number: {CodeNumber}");
            return sb.ToString().TrimEnd();
        }
    }
}

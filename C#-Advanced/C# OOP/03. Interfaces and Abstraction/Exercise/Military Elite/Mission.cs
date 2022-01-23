using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public class Mission : IMission
    {
        public Mission(string name, Status state)
        {
            Name = name;
            Status = state;
        }

        public string Name { get; set; }
        public Status Status { get; set; }
        public void CompleteMission()
        {
            this.Status = Status.Finished;
        }
        public override string ToString()
        {
            return $"Code Name: {Name} State: {Status}";
        }
    }
}

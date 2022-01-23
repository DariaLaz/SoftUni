using System;
using System.Collections.Generic;
using System.Text;

namespace MilitaryElite
{
    public abstract class SpecialisedSoldier : Private, ISpecialisedSoldier
    {
        protected SpecialisedSoldier(string id, string firstName, string lastName, decimal salary, Corps corp) 
            : base(id, firstName, lastName, salary)
        {
            this.Corps = corp;
        }

        public Corps Corps { get; set; }
    }
}

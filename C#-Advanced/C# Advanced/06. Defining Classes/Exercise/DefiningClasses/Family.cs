using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    public class Family
    {
        private List<Person> member;
        public List<Person> Members
        {
            get
            {
                return member;
            }
            set
            {
                this.member = value; 
            }
        }

        public Family()
        {
            this.Members = new List<Person>();
        }
        public void AddMember(Person member)
        {
            Members.Add(member);
        }
        public Person GetOldestMember()
        {
            var oldestOne = new Person();
            oldestOne.Age = int.MinValue;
            foreach (var member in Members)
            {
                if (member.Age > oldestOne.Age)
                {
                    oldestOne = member;
                }
            }
            return oldestOne;
        }
    }
}

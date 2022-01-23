using Gym.Models.Athletes.Contracts;
using Gym.Models.Equipment.Contracts;
using Gym.Models.Gyms.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gym.Models.Gyms
{
    public abstract class Gym : IGym
    {
        public Gym(string name, int capacity)
        {
            this.Name = name;
            this.Capacity = capacity;
            equipment = new List<IEquipment>();
            athletes = new List<IAthlete>();
        }
        private string name;
        private List<IEquipment> equipment;
        private List<IAthlete> athletes;
        public string Name {
            get => name;
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Gym name cannot be null or empty.");
                }
                name = value;
            }
        }

        public int Capacity { get; set; }

        public double EquipmentWeight => this.Equipment.Sum(x => x.Weight);

        public ICollection<IEquipment> Equipment => equipment;

        public ICollection<IAthlete> Athletes => athletes;

        public void AddAthlete(IAthlete athlete)
        {
            if (Athletes.Count == Capacity)
            {
                throw new InvalidOperationException("Not enough space in the gym.");
            }
            Athletes.Add(athlete);
        }

        public void AddEquipment(IEquipment equipment)
        {
            Equipment.Add(equipment);
        }

        public void Exercise()
        {
            foreach (var athlete in Athletes)
            {
                athlete.Exercise();
            }
        }
        
        public string GymInfo()
        {
            var sb = new StringBuilder();

            sb.AppendLine($"{this.Name} is a {this.GetType().Name}:");
            if (Athletes.Count == 0)
            {
                sb.AppendLine("Athletes: No athletes");
            }
            else
            {
                var list = new List<string>();
                foreach (var athlete in Athletes)
                {
                    list.Add(athlete.FullName);
                }
                sb.AppendLine($"Athletes: {string.Join(", ", list)}");
            }
            sb.AppendLine($"Equipment total count: {Equipment.Count}");
            sb.AppendLine($"Equipment total weight: {EquipmentWeight:f2} grams");
            return sb.ToString().TrimEnd();
        }

        public bool RemoveAthlete(IAthlete athlete)
        {
            return Athletes.Remove(athlete);
        }
    }
}

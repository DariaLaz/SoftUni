using Gym.Models.Athletes;
using Gym.Models.Athletes.Contracts;
using Gym.Models.Equipment;
using Gym.Models.Equipment.Contracts;
using Gym.Models.Gyms;
using Gym.Models.Gyms.Contracts;
using Gym.Repositories;
using Gym.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Gym.Core.Contracts
{
    public class Controller : IController
    {
        public Controller()
        {
            equipment = new EquipmentRepository();
            gyms = new List<IGym>();
        }
        private EquipmentRepository equipment;
        private ICollection<IGym> gyms;
        public string AddAthlete(string gymName, string athleteType, 
            string athleteName, string motivation, int numberOfMedals)
        {
            IAthlete athlete;
            if (athleteType == "Boxer")
            {
                if (gyms.FirstOrDefault(x => x.Name == gymName).GetType().Name != "BoxingGym")
                {
                    return "The gym is not appropriate.";
                }
                athlete = new Boxer(athleteName, motivation, numberOfMedals);
            }
            else if (athleteType == "Weightlifter")
            {
                if (gyms.FirstOrDefault(x => x.Name == gymName).GetType().Name != "WeightliftingGym")
                {
                    return "The gym is not appropriate.";
                }
                athlete = new Weightlifter(athleteName, motivation, numberOfMedals);
            }
            else
            {
                throw new InvalidOperationException("Invalid athlete type.");
            }
            gyms.FirstOrDefault(x => x.Name == gymName).AddAthlete(athlete);
            return $"Successfully added {athleteType} to {gymName}.";
        }

        public string AddEquipment(string equipmentType)
        {
            IEquipment eq;
            if (equipmentType == "BoxingGloves")
            {
                eq = new BoxingGloves();
            }
            else if (equipmentType == "Kettlebell")
            {
                eq = new Kettlebell();
            }
            else
            {
                throw new InvalidOperationException("Invalid equipment type.");
            }
            equipment.Add(eq);
            return $"Successfully added {equipmentType}.";
        }

        public string AddGym(string gymType, string gymName)
        {
            IGym gym;
            if (gymType == "BoxingGym")
            {
                gym = new BoxingGym(gymName);
            }
            else if (gymType == "WeightliftingGym")
            {
                gym = new WeightliftingGym(gymName);
            }
            else
            {
                throw new InvalidOperationException("Invalid gym type.");
            }
            gyms.Add(gym);
            return $"Successfully added {gymType}.";
        }

        public string EquipmentWeight(string gymName)
        {
            var sum = gyms.FirstOrDefault(x => x.Name == gymName).EquipmentWeight;
            return $"The total weight of the equipment in the gym {gymName} is {sum:f2} grams.";
        }

        public string InsertEquipment(string gymName, string equipmentType)
        {
            if (equipment.FindByType(equipmentType) == null)
            {
                throw new InvalidOperationException($"There isn’t equipment of type {equipmentType}.");

            }
            gyms.First(x => x.Name == gymName).AddEquipment(equipment.FindByType(equipmentType));
            equipment.Remove(equipment.FindByType(equipmentType));
            
            return $"Successfully added {equipmentType} to {gymName}.";

        }

        public string Report()
        {
            var sb = new StringBuilder();

            foreach (var gym in gyms)
            {
                sb.AppendLine(gym.GymInfo());
            }

            return sb.ToString().TrimEnd();
        }

        public string TrainAthletes(string gymName)
        {
            foreach (var athlete in gyms.FirstOrDefault(x => x.Name == gymName).Athletes)
            {
                athlete.Exercise();
            }
            return $"Exercise athletes: {gyms.FirstOrDefault(x => x.Name == gymName).Athletes.Count}.";
        }
    }
}

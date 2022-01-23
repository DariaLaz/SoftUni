using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FootballTeamGenerator
{
    public class Team
    {
        public Team(string name)
        {
            Name = name;
            Players = new List<Player>();
        }

        private List<Player> Players { get; set; }
        private int NumOfPlayers => Players.Count;
        public string Name { get; set; }
        public double Rating => Math.Round(Players.Sum(x => x.SkillLevel) / NumOfPlayers);

        public void AddPlayer(Player player)
        {
            Players.Add(player);
        }
        public void RemovePlayer(string playeName)
        {
            if (!Players.Where(x => x.Name == playeName).Any())
            {
                throw new Exception($"Player {playeName} is not in {this.Name} team.");
            }
            var playerToRemove = Players.First(x => x.Name == playeName);
            Players.Remove(playerToRemove);
        }
    }
}

using P03_FootballBetting.Data.Models.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace P03_FootballBetting.Data.Models
{
    public class Game
    {
        public Game()
        {
            this.PlayerStatistics = new HashSet<PlayerStatistic>();
            this.Bets = new HashSet<Bet>();

        }
        [Key]
        public int GameId { get; set; }
        public int HomeTeamId { get; set; }
        [ForeignKey(nameof(HomeTeamId))]
        public virtual Team HomeTeam { get; set; }
        public int AwayTeamId { get; set; }
        [ForeignKey(nameof(AwayTeamId))]
        public virtual Team AwayTeam { get; set; }
        public int HomeTeamGoals { get; set; }
        public int AwayTeamGoals { get; set; }
        public DateTime DateTime { get; set; }
        public decimal HomeTeamBetRate { get; set; }
        public decimal AwayTeamBetRate { get; set; }
        public decimal DrawBetRate { get; set; }
        public Prediction Result { get; set; }
        public virtual ICollection<PlayerStatistic> PlayerStatistics { get; set; }
        public virtual ICollection<Bet> Bets { get; set; }


    }
}

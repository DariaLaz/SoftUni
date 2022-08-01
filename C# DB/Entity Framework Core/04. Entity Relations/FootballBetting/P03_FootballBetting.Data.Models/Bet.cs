using P03_FootballBetting.Data.Models.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace P03_FootballBetting.Data.Models
{
    public class Bet
    {
        [Key]
        public int BetId { get; set; }
        public decimal Amount { get; set; }
        [Required]
        public Prediction Prediction { get; set; }
        public DateTime DateTime { get; set; }
        public int UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
        public int GameId { get; set; }
        [ForeignKey(nameof(GameId))]
        public virtual Game Game { get; set; }
    }
}

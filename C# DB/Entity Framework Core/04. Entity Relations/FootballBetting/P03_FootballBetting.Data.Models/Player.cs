using P03_FootballBetting.Data.Models.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace P03_FootballBetting.Data.Models
{
    public class Player
    {
        public Player()
        {
            this.PlayerStatistics = new HashSet<PlayerStatistic>();
        }
        [Key]
        [MaxLength(GlobalConstants.PlayerNameMaxLength)]
        public int PlayerId { get; set; }
        [Required]
        public string Name { get; set; }
        public int SquadNumber { get; set; }
        public int TeamId { get; set; }
        [ForeignKey(nameof(TeamId))]
        public virtual Team Team { get; set; }
        public int PositionId { get; set; }
        [ForeignKey(nameof(PositionId))]
        public virtual Position Position { get; set; }
        [Required]
        public bool IsInjured { get; set; }
        public virtual ICollection<PlayerStatistic> PlayerStatistics { get; set; }
    }
}

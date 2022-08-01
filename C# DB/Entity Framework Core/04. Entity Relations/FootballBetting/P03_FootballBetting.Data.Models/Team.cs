using P03_FootballBetting.Data.Models.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace P03_FootballBetting.Data.Models
{
    public class Team
    {
        public Team()
        {
            this.HomeGames = new HashSet<Game>();
            this.AwayGames = new HashSet<Game>();

        }
        [Key]
        public int TeamId { get; set; }
        [Required]
        [MaxLength(GlobalConstants.TeamNameMaxLength)]
        public string Name { get; set; }
        [MaxLength(GlobalConstants.TeamLogoMaxLength)]
        public string LogoUrl { get; set; }
        [Required]
        public string Initials { get; set; }
        public decimal Budget { get; set; }
        public int PrimaryKitColorId { get; set; }
        [ForeignKey(nameof(PrimaryKitColorId))]
        public Color PrimaryKitColor { get; set; }
        public int SecondaryKitColorId { get; set; }
        [ForeignKey(nameof(SecondaryKitColorId))]
        public Color SecondaryKitColor { get; set; }
        public int TownId { get; set; }
        [ForeignKey(nameof(TownId))]
        public Town Town { get; set; }
        [InverseProperty(nameof(Game.HomeTeam))]
        public virtual ICollection<Game> HomeGames { get; set; }
        [InverseProperty(nameof(Game.AwayTeam))]
        public virtual ICollection<Game> AwayGames { get; set; }
        public virtual ICollection<Player> Players { get; set; }
    }
}

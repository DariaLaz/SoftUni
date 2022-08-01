using P03_FootballBetting.Data.Models.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace P03_FootballBetting.Data.Models
{
    public class Town
    {
        public Town()
        {
            this.Teams = new HashSet<Team>();
        }
        [Key]
        public int TownId { get; set; }
        [Required]
        [MaxLength(GlobalConstants.TownNameMaxLength)]
        public string Name { get; set; }
        [Required]
        public int CountryId { get; set; }
        [ForeignKey(nameof(CountryId))]
        public virtual Country Country { get; set; }
        public virtual ICollection<Team> Teams { get; set; }
    }
}

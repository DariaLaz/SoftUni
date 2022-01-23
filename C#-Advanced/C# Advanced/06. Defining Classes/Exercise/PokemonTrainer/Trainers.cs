using System;
using System.Collections.Generic;
using System.Text;

namespace PokemonTrainer
{
    class Trainers
    {
        public Trainers()
        {

            this.NumberOfBadges = 0;
        }
        public string Name { get; set; }
        public int NumberOfBadges { get; set; }

        public List<Pokemon> collectionPokemon = new List<Pokemon>();
    }
}

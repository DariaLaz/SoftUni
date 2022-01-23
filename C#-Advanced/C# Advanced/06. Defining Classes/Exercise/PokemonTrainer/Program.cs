using System;
using System.Collections.Generic;
using System.Linq;

namespace PokemonTrainer
{
    class Program
    {
        static void Main(string[] args)
        {
            var listOfTrainers = new List<Trainers>();
            while (true)
            {
                var input = Console.ReadLine().Split(" ");

                if (input[0] == "Tournament")
                {
                    break;
                }

                string trainerName = input[0];
                string pokemonName = input[1];
                string pokemonElement = input[2];
                int pokemonHealth = int.Parse(input[3]);

                Pokemon pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);

                var trainer = new Trainers();

                bool checkTrainer = listOfTrainers.Any(n => n.Name == trainerName);

                if (!checkTrainer)
                {
                    trainer.Name = trainerName;
                    trainer.collectionPokemon.Add(pokemon);
                    listOfTrainers.Add(trainer);
                }
                else
                {
                    foreach (var t in listOfTrainers)
                    {
                        if (t.Name == trainerName)
                        {
                            t.collectionPokemon.Add(pokemon);
                        }
                    }
                }
             } 


             while (true)
             {
                 var input = Console.ReadLine();

                 if (input == "End")
                 {
                     break;
                 }

                 foreach (var trainter in listOfTrainers)
                 {
                    var n = trainter.collectionPokemon.Where(x => x.Element == input).Count();
                    if (n == 0)
                    {
                        foreach (var pokemon in trainter.collectionPokemon)
                        {
                            pokemon.Health -= 10;
                        }
                    }
                    else
                    {
                        trainter.NumberOfBadges++;
                    }
                 }
             }

            for (int tr = 0; tr < listOfTrainers.Count; tr++)
            {
                for (int pokemon = 0; pokemon < listOfTrainers[tr].collectionPokemon.Count; pokemon++)
                {
                    if (listOfTrainers[tr].collectionPokemon[pokemon].Health <= 0)
                    {
                        listOfTrainers[tr].collectionPokemon.RemoveAt(pokemon);
                        pokemon--;
                    }
                }
            }

            foreach (var trainer in listOfTrainers.OrderByDescending(x => x.NumberOfBadges))
             {
                 Console.WriteLine($"{trainer.Name} {trainer.NumberOfBadges} {trainer.collectionPokemon.Count}");
             }
            }
        }
    }


using System;
using System.Collections.Generic;

namespace _06._Songs_Queue
{
    class Program
    {
        static void Main(string[] args)
        {
            var firstSongs = Console.ReadLine().Split(", ");
           
            var songs = new Queue<string>(firstSongs);
            while (songs.Count != 0)
            {
                var command = Console.ReadLine().Split(" ");
                if (command[0] == "Play")
                {
                    songs.Dequeue();
                }
                else if (command[0] == "Add")
                {
                    var song = "";
                    for (int i = 1; i < command.Length; i++)
                    {
                        song += command[i];
                        if (i != command.Length - 1)
                        {
                            song += " ";
                        }
                    }
                    if (!songs.Contains(song))
                    {
                        songs.Enqueue(song);
                        
                    }
                    else
                    {
                        Console.WriteLine($"{song} is already contained!");
                    }
                }
                else if (command[0] == "Show")
                {
                    Console.WriteLine(string.Join(", ", songs));
                }
            }
            Console.WriteLine("No more songs!");
        }
    }
}

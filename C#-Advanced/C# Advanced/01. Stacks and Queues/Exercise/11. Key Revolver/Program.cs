using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace _11._Key_Revolver
{
    class Program
    {
        static void Main(string[] args)
        {
            var priceForABullet = int.Parse(Console.ReadLine());
            var sizeOfTheGunBarrel = int.Parse(Console.ReadLine());
            var bullets = Console.ReadLine().Split(" ").Select(int.Parse);
            var bulletsStack = new Stack<int>(bullets);
            var locks = Console.ReadLine().Split(" ").Select(int.Parse);
            var locksQueue = new Queue<int>(locks);
            var valueOfTheIntelligence = int.Parse(Console.ReadLine());
            var counter = 1;
            var usedBullets = 0;
            while (bulletsStack.Any() && locksQueue.Any())
            {
                var currentLock = locksQueue.Peek();
                var currentBullet = bulletsStack.Peek();

                if (currentBullet <= currentLock)
                {
                    Console.WriteLine("Bang!");
                    locksQueue.Dequeue();
                }
                else
                {
                    Console.WriteLine("Ping!");
                }
                bulletsStack.Pop();
                usedBullets++;
                
                if (counter % sizeOfTheGunBarrel == 0 && bulletsStack.Any())
                {
                    Console.WriteLine("Reloading!");
                }
                counter++;
            }
            if (locksQueue.Any())
            {
                Console.WriteLine($"Couldn't get through. Locks left: {locksQueue.Count}");
            }
            else
            {
                var earnedMoney = valueOfTheIntelligence - (usedBullets * priceForABullet);
                Console.WriteLine($"{bulletsStack.Count} bullets left. Earned ${earnedMoney}");
            }
        }
    }
}

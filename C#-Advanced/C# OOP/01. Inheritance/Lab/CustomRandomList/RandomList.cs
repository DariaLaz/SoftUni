using System;
using System.Collections.Generic;
using System.Text;

namespace CustomRandomList
{
    public class RandomList : List<string>
    {
        public string RandomString()
        {
            var random = new Random();
            var randomNum = random.Next(0, Count);
            var returnStr = this[randomNum];
            this.RemoveAt(randomNum);

            return returnStr;
        }
    }
}

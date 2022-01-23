using System;
using System.Collections.Generic;
using System.Text;

namespace Telephony
{
    class StationaryPhone : ICallable
    {
        public void Call(string number)
        {
            Console.WriteLine($"Dialing... {number}");
        }
    }
}

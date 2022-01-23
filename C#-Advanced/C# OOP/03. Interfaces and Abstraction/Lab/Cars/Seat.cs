using System;
using System.Collections.Generic;
using System.Text;

namespace Cars
{
    class Seat : ICar
    {
        public string Model { get; set; }
        public string Color { get; set; }

        public string Start()
        {
            throw new NotImplementedException();
        }

        public string Stop()
        {
            throw new NotImplementedException();
        }
    }
}

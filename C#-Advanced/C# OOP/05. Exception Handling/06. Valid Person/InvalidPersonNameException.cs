using System;
using System.Collections.Generic;
using System.Text;

namespace _06._Valid_Person
{
    public class InvalidPersonNameException : Exception
    {
        public string Message = "Invalid Personal Name!";

        public InvalidPersonNameException()
        { }
        public InvalidPersonNameException(string message)
        {
            Message = message;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace CustomStack
{
    class StackOfStrings : Stack<string>
    {
        public bool IsEmpty()
        {
            return Count == 0;
        }
        public void AddRange(IEnumerable<string> collection)
        {
            foreach (var element in collection)
                this.Push(element);
        }
    }
}

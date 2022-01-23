using System;
using System.Collections.Generic;
using System.Text;

namespace GenericScale
{
    class EqualityScale<T>
        where T : IComparable<T>
    {
        private T left;
        private T right;

        public EqualityScale(T left, T right)
        {
            this.left = left;
            this.right = right;
        }

        public bool AreEqual()
        {
            var comparison = left.CompareTo(right);
            if (comparison == 0)
            {
                return true;
            }
            return false;
        }
    }
}

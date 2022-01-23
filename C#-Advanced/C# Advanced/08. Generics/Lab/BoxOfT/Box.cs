using System;
using System.Collections.Generic;
using System.Text;

namespace BoxOfT
{
    class Box<T>
    {
        public List<T> listOfElements { get; set; } = new List<T>();

        public void Add(T element)
        {
            listOfElements.Add(element);
        }

        public T Remove()
        {
            var lastEl = listOfElements[listOfElements.Count - 1];
            listOfElements.Remove(lastEl);
            return lastEl;
        }

        public int Count
        {
            get
            {
                return listOfElements.Count;
            }
        }
    }
}

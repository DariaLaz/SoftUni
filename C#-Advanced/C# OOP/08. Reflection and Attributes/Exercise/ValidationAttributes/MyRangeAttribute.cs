using System;
using System.Collections.Generic;
using System.Text;

namespace ValidationAttributes
{
   // [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class MyRangeAttribute : MyValidationAttribute
    {
        private int minValue;
        private int maxValue;

        public MyRangeAttribute(int minValue, int maxValue)
        {
            this.minValue = minValue;
            this.maxValue = maxValue;
        }
        public override bool IsValid(object obj)
        {
            int num = Convert.ToInt32(obj);

            return num >= minValue && num <= maxValue;
        }
    }
}

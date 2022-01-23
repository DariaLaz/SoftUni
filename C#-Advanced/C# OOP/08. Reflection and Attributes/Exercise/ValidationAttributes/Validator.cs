using System;
using System.Collections.Generic;
using System.Text;

namespace ValidationAttributes
{
    static class Validator
    {
        public static bool IsValid(object obj)
        {
            var properties = obj.GetType().GetProperties();

            foreach (var propertyInfo in properties)
            {
                var attributes = propertyInfo
                    .GetCustomAttributes<MyValidationAttribute>();

                foreach (var attribute in attributes)
                {
                    if (!attribute.IsValid(propertyInfo.GetValue(obj)))
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
}

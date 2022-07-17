using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace _7._Print_All_Minion_Names
{
    class Program
    {
        static void Main(string[] args)
        {
            using SqlConnection sqlConnection =
                 new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();
            Console.WriteLine(String.Join(' ', GetAllMinions(sqlConnection)));
            Console.WriteLine(OrderMinions(GetAllMinions(sqlConnection)));
            sqlConnection.Close();
        }

        private static string[] GetAllMinions(SqlConnection sqlConnection)
        {
            var minions = new List<string>();
            string query = @"SELECT Name
                            FROM Minions";
            SqlCommand cmd = new SqlCommand(query, sqlConnection);

            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                minions.Add($"{reader["Name"]}");
            }
            return minions.ToArray();
        }
        private static string OrderMinions(string[] minions)
        {
            var output = new StringBuilder();

            var minionsSteak = new Stack<string>(minions);
            var minionsQueue = new Queue<string>(minions);

            for (int i = 0; i < minions.Length; i++)
            {
                if (i % 2 != 0)
                {
                    output.AppendLine(minionsSteak.Pop());
                }
                else
                {
                    output.AppendLine(minionsQueue.Dequeue());
                }
            }
            return output.ToString();
        }
    }
}

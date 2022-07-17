using System;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace _8._Increase_Minion_Age
{
    class Program
    {
        static void Main(string[] args)
        {
            using SqlConnection sqlConnection =
                new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();

            var minionIds = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine(GetAllMinionsWIthTheirAge(sqlConnection, minionIds));

            sqlConnection.Close();
        }

        private static void GetMinionsByIdAndIncreaseAge(SqlConnection sqlConnection, int[] minionIds)
        {
            foreach (var id in minionIds)
            {
                string query = @"UPDATE Minions
                                SET Age += 1
                                WHERE Id = @MinionId";
                SqlCommand cmd = new SqlCommand(query, sqlConnection);
                cmd.Parameters.AddWithValue("@MinionId", id);
                cmd.ExecuteNonQuery();
            }
        }
        private static string GetAllMinionsWIthTheirAge(SqlConnection sqlConnection, int[] minionIds)
        {
            GetMinionsByIdAndIncreaseAge(sqlConnection, minionIds);
            StringBuilder output = new StringBuilder();
            string query = @"SELECT Name, Age
                            FROM Minions";

            SqlCommand cmd = new SqlCommand(query, sqlConnection);
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                output.AppendLine($"{reader["Name"]} {reader["Age"]}");
            }
            return output.ToString().TrimEnd();
        }
    }
}

using System;
using System.Data.SqlClient;
using System.Text;

namespace _9._Increase_Age_Stored_Procedure
{
    class Program
    {
        static void Main(string[] args)
        {
            int minionId = int.Parse(Console.ReadLine());

            using SqlConnection sqlConnection =
                 new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();

            string result = IncreaseMinionAge(sqlConnection, minionId);
            Console.WriteLine(result);

            sqlConnection.Close();
        }

        private static string IncreaseMinionAge(SqlConnection sqlConnection, int minionId)
        {
            StringBuilder output = new StringBuilder();
            string increaseAgeQuery = @"EXEC dbo.usp_GetOlder @MinionId";
            SqlCommand increaseAgeCmd = new SqlCommand(increaseAgeQuery, sqlConnection);
            increaseAgeCmd.Parameters.AddWithValue("@MinionId", minionId);
            increaseAgeCmd.ExecuteNonQuery();

            var minionInfoQuery = @"SELECT Name, Age
                                    FROM Minions
                                    WHERE Id = @MinionId";
            SqlCommand minionInfoCmd = new SqlCommand(minionInfoQuery, sqlConnection);
            minionInfoCmd.Parameters.AddWithValue("@MinionId", minionId);

            using SqlDataReader infoReader = minionInfoCmd.ExecuteReader();
            while (infoReader.Read())
            {
                output.AppendLine($"{infoReader["Name"]} - {infoReader["Age"]} years old");
            }
            return output.ToString().TrimEnd();
        }
    }
}

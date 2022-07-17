using System;
using System.Data.SqlClient;
using System.Text;

namespace _3._Minion_Names
{
    class Program
    {
        static void Main(string[] args)
        {
            using SqlConnection sqlConnection =
               new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();

            int villainId = int.Parse(Console.ReadLine());
            string result = GetVillainWithMinions(sqlConnection, villainId);
            Console.WriteLine(result);

            sqlConnection.Close();
        }
        private static string GetVillainWithMinions(SqlConnection sqlConnection, int villainId)
        {
            StringBuilder output = new StringBuilder();
            string query = @$"  SELECT Name 
                                FROM Villains
                                WHERE Id = @VillainId";
            SqlCommand getVillainNameCmd = new SqlCommand(query, sqlConnection);
            getVillainNameCmd.Parameters.AddWithValue("@VillainId", villainId);
            string villainName = (string)getVillainNameCmd.ExecuteScalar();
            if (villainName == null)
            {
                return $"No villain with ID {villainId}> exists in the database.";
            }
            output.AppendLine($"Villain: {villainName}");
            string minionsQuery = @"SELECT m.Name, m.Age
                                FROM MinionsVillains as mv 
                                LEFT JOIN Minions AS m
                                ON m.Id = mv.MinionId
                                WHERE mv.VillainId = 1
                                ORDER BY m.Name";
            SqlCommand getMinionsCommand = new SqlCommand(minionsQuery, sqlConnection);
            getMinionsCommand.Parameters.AddWithValue("@VillainId", villainId);

            using SqlDataReader minionsReader = getMinionsCommand.ExecuteReader();
            if (!minionsReader.HasRows)
            {
                output.AppendLine($"(no minions)");
            }
            else
            {
                int rowNum = 1;
                while (minionsReader.Read())
                {
                    output.AppendLine($"{rowNum}. {minionsReader["Name"]} {minionsReader["Age"]}");
                    rowNum++;
                }
            }
            return output.ToString().TrimEnd();
        }
       

    }
}

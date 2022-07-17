using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace _5._Change_Town_Names_Casing
{
    class Program
    {
        static void Main(string[] args)
        {
            using SqlConnection sqlConnection =
                new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();
            var countryNameInput = Console.ReadLine();
            Console.WriteLine(ChangeTownNamesCasing(sqlConnection, countryNameInput));
            sqlConnection.Close();
        }

       
        private static string ChangeTownNamesCasing(SqlConnection sqlConnection, string countryName)
        {
            var output = new StringBuilder();

            int countryId = GetCountryId(sqlConnection, countryName);
            var townsArray = GetTownsByCountryId(sqlConnection, countryId);

            if (countryId == -1 || townsArray.Length == 0)
            {
                output.AppendLine("No town names were affected.");
            }
            else
            {
                var updatedNames = new List<string>();
                foreach (var town in townsArray)
                {
                    string updateQuery = @"UPDATE Towns
                                            SET Name = @NewName
                                            WHERE Name = @OldName";
                    SqlCommand cmd = new SqlCommand(updateQuery, sqlConnection);
                    cmd.Parameters.AddWithValue("@NewName", town.ToUpper());
                    cmd.Parameters.AddWithValue("@OldName", town);
                    cmd.ExecuteNonQuery();
                    updatedNames.Add(town.ToUpper());
                }
                output.AppendLine($"{updatedNames.Count} town names were affected.");
                output.AppendLine($"[{String.Join(", ", updatedNames)}]");
            }
            return output.ToString().TrimEnd();
        }

         private static int GetCountryId(SqlConnection sqlConnection, string countryName)
        {
            string query = @"SELECT Id
                            FROM Countries
                            WHERE Name = @CountryName";
            SqlCommand cmd = new SqlCommand(query, sqlConnection);
            cmd.Parameters.AddWithValue("@CountryName", countryName);
            cmd.ExecuteNonQuery();
            int countryId = -1;
            var result = cmd.ExecuteScalar();

            if (result != null)
            {
                countryId = (int)result;
            }
            return countryId;
        }

        private static string[] GetTownsByCountryId(SqlConnection sqlConnection, int countryId)
        {
            var towns = new List<string>();
            string query = @"SELECT Name
                            FROM Towns
                            WHERE CountryCode = @CountryId";
            SqlCommand cmd = new SqlCommand(query, sqlConnection);
            cmd.Parameters.AddWithValue("@CountryId", countryId);
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                towns.Add($"{reader["Name"]}");
            }
            return towns.ToArray();
        }
    }
}

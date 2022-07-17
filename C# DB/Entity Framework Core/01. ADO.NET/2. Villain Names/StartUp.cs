using System;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace _2._Villain_Names
{
    class StartUp
    {
        static void Main(string[] args)
        {
            using SqlConnection sqlConnection = 
                new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();  

            string result = GetVillainNamesWithMinionsCount(sqlConnection);
            Console.WriteLine(result);

            sqlConnection.Close();
        }


        private static string GetVillainNamesWithMinionsCount(SqlConnection sqlConnection)
        {
            StringBuilder output = new StringBuilder();
            string query = @" SELECT v.Name, COUNT(mv.VillainId) AS MinionsCount  
                                FROM Villains AS v 
                                JOIN MinionsVillains AS mv ON v.Id = mv.VillainId 
                            GROUP BY v.Id, v.Name 
                              HAVING COUNT(mv.VillainId) > 3 
                            ORDER BY COUNT(mv.VillainId)";
            SqlCommand cmd = new SqlCommand(query, sqlConnection);
            using SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                output.AppendLine($"{reader["Name"]} - {reader["MinionsCount"]}");
            }
            return output.ToString().TrimEnd();
        }

    }
}

using System;
using System.Data.SqlClient;
using System.Text;

namespace _6._Remove_Villain
{
    class Program
    {
        static void Main(string[] args)
        {
            using SqlConnection sqlConnection =
                new SqlConnection(Config.ConnectionString);
            sqlConnection.Open();

            int villainId = int.Parse(Console.ReadLine());

            Console.WriteLine(DeleteVillian(sqlConnection, villainId));

            sqlConnection.Close();
        }
        private static string DeleteVillian(SqlConnection sqlConnection, int villainId)
        {
            StringBuilder output = new StringBuilder();

            var villainName = GetVillainName(sqlConnection, villainId);

           
            if (villainName == "")
            {
                output.AppendLine("No such villain was found.");
            }
            else
            {
                SqlTransaction sqlTransaction = sqlConnection.BeginTransaction();
                try
                {
                    var count = GetVillainsMinionsCount(sqlConnection, sqlTransaction, villainId);
                    DeleteVillionsMinions(sqlConnection, sqlTransaction, villainId);
                    var query = @"DELETE Villains
                        WHERE Id = @VillainId";
                    SqlCommand cmd = new SqlCommand(query, sqlConnection, sqlTransaction);
                    cmd.Parameters.AddWithValue("@VillainId", villainId);
                    cmd.ExecuteNonQuery();

                    output.AppendLine($"{villainName} was deleted.");
                    output.AppendLine($"{count} minions were released.");
                    sqlTransaction.Commit();
                }
                catch (Exception e)
                {
                    sqlTransaction.Rollback();
                    return e.ToString();
                }
            }
            return output.ToString().TrimEnd();
        }

        private static string GetVillainName(SqlConnection sqlConnection, int villainId)
        {
            var query = @"SELECT Name
                            FROM Villains
                            WHERE Id = @VillainId";
            SqlCommand cmd = new SqlCommand(query, sqlConnection);
            cmd.Parameters.AddWithValue("@VillainId", villainId);
            cmd.ExecuteNonQuery();
            var villainName = cmd.ExecuteScalar();
            if (villainName == null)
            {
                villainName = "";
            }
            return villainName.ToString();
        }
        private static int GetVillainsMinionsCount(SqlConnection sqlConnection, SqlTransaction sqlTransaction, int villainId)
        {
            var query = @"SELECT COUNT(*)
                        FROM MinionsVillains
                        WHERE VillainId = @VillainId";
            SqlCommand cmd = new SqlCommand(query, sqlConnection, sqlTransaction);
            cmd.Parameters.AddWithValue("@VillainId", villainId);
            cmd.ExecuteNonQuery();
            var villainName = (int)cmd.ExecuteScalar();
            return villainName;
        }
        private static void DeleteVillionsMinions(SqlConnection sqlConnection, SqlTransaction sqlTransaction, int villainId)
        {
            var query = @"DELETE MinionsVillains
                        WHERE VillainId = @VillianId";
            SqlCommand cmd = new SqlCommand(query, sqlConnection, sqlTransaction);
            cmd.Parameters.AddWithValue("@VillianId", villainId);
            cmd.ExecuteNonQuery();
        }
    }
}

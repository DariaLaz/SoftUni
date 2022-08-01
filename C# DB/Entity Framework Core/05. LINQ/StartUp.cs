namespace MusicHub
{
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Text;
    using Data;
    using Initializer;
    using Microsoft.EntityFrameworkCore;

    public class StartUp
    {
        public static void Main(string[] args)
        {
            MusicHubDbContext context = 
                new MusicHubDbContext();

            DbInitializer.ResetDatabase(context);

            //2
            // Console.WriteLine(ExportAlbumsInfo(context, 4));
            Console.WriteLine(ExportSongsAboveDuration(context, 4));
        }

        public static string ExportAlbumsInfo(MusicHubDbContext context, int producerId)
        {
            var albums = context.Albums.ToList()
                .Where(a => a.ProducerId == producerId)
                .Select(a => new
                {
                    a.Name,
                    ReleaseDate = a.ReleaseDate.ToString("MM/dd/yyyy", CultureInfo.InvariantCulture),
                    ProducerName = a.Producer.Name,
                    Songs = a.Songs
                        .Select(s => new
                        {
                            s.Name,
                            s.Price,
                            SongWriterName = s.Writer.Name
                        })
                        .OrderByDescending(s => s.Name)
                        .ThenBy(s => s.SongWriterName),
                    a.Price
                })
                .OrderByDescending(a => a.Price)
                .ToList();

            var result = new StringBuilder();

            foreach (var a in albums)
            {
                result.AppendLine($"-AlbumName: {a.Name}");
                result.AppendLine($"-ReleaseDate: {a.ReleaseDate}");
                result.AppendLine($"-ProducerName: {a.ProducerName}");
                result.AppendLine($"-Songs:");
                var counter = 1;
                foreach (var s in a.Songs)
                {
                    result.AppendLine($"---#{counter}");
                    result.AppendLine($"---SongName: {s.Name}");
                    result.AppendLine($"---Price: {s.Price:f2}");
                    result.AppendLine($"---Writer: {s.SongWriterName}");

                    counter++;
                }
                result.AppendLine($"-AlbumPrice: {a.Price:f2}");
            }

            return result.ToString().TrimEnd();
        }

        public static string ExportSongsAboveDuration(MusicHubDbContext context, int duration)
        {
            var songs = context.Songs
                .Include(s => s.SongPerformers)
                .ThenInclude(s => s.Performer)
                .ToList()
                .Where(s => s.Duration.TotalSeconds > duration)
                .Select(s => new
                {
                    s.Name,
                    WriterName = s.Writer.Name,
                    PerformerName = s.SongPerformers.Select(sp => $"{sp.Performer.FirstName} {sp.Performer.LastName}").FirstOrDefault(),
                    ProducerName = s.Album.Producer.Name,
                    s.Duration
                })
                .OrderBy(s => s.Name)
                .ThenBy(s => s.WriterName)
                .ThenBy(s => s.PerformerName)
                .ToList();
            var result = new StringBuilder();
            var counter = 1;
            foreach (var s in songs)
            {
                result.AppendLine($"-Song #{counter}");
                result.AppendLine($"---SongName: {s.Name}");
                result.AppendLine($"---Writer: {s.WriterName}");
                result.AppendLine($"---Performer: {s.PerformerName}");
                result.AppendLine($"---AlbumProducer: {s.ProducerName}");
                result.AppendLine($"---Duration: {s.Duration:c}");

                counter++;
            }
            return result.ToString().TrimEnd();
        }
    }
}

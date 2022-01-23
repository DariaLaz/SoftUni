using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _5._Directory_Traversal
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] allFiles = Directory.GetFiles(@"../../../", ".");

            Dictionary<string, Dictionary<string, double>> groupedFiles = new Dictionary<string, Dictionary<string, double>>();

            foreach (var file in allFiles)
            {
                FileInfo fileInfo = new FileInfo(file);
                string fileName = fileInfo.Name;
                string fileExtension = fileInfo.Extension;
                double fileSizeKB = fileInfo.Length / 1024.0;

                if (!groupedFiles.ContainsKey(fileExtension))
                {
                    groupedFiles.Add(fileExtension, new Dictionary<string, double>());
                }
                groupedFiles[fileExtension].Add(fileName, fileSizeKB);
            }

            groupedFiles = groupedFiles
               .OrderByDescending(o => o.Value.Count())
               .ThenBy(a => a.Key)
               .ToDictionary(k => k.Key, v => v.Value);

            List<string> lines = new List<string>();

            foreach (var extension in groupedFiles)
            {
                lines.Add(extension.Key);
                foreach (var file in extension.Value.OrderBy(x => x.Value))
                {
                    lines.Add($"--{file.Key} - {file.Value:F3}kb");
                }
            }

            string pathDesktop = Environment.GetFolderPath(Environment.SpecialFolder.Desktop) + "\\report.txt";
            File.WriteAllLines(pathDesktop, lines);


            //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
            //string[] allFiles = Directory.GetFiles(@"../../../", ".");

            //Dictionary<string, Dictionary<string, double>> groupedFiles = new Dictionary<string, Dictionary<string, double>>();

            //foreach (var file in allFiles)
            //{
            //    FileInfo fileInfo = new FileInfo(file);
            //    string fileName = fileInfo.Name;
            //    string fileExtension = fileInfo.Extension;
            //    double fileSizeKB = fileInfo.Length / 1024.0;

            //    if (!groupedFiles.ContainsKey(fileExtension))
            //    {
            //        groupedFiles.Add(fileExtension, new Dictionary<string, double>());
            //    }
            //    groupedFiles[fileExtension].Add(fileName, fileSizeKB);
            //}

            //groupedFiles = groupedFiles
            //   .OrderByDescending(o => o.Value.Count())
            //   .ThenBy(a => a.Key)
            //   .ToDictionary(k => k.Key, v => v.Value);

            //List<string> lines = new List<string>();

            //foreach (var extension in groupedFiles)
            //{
            //    lines.Add(extension.Key);
            //    foreach (var file in extension.Value.OrderBy(x => x.Value))
            //    {
            //        lines.Add($"--{file.Key} - {file.Value:F3}kb");
            //    }
            //}

            //string pathDesktop = Environment.GetFolderPath(Environment.SpecialFolder.Desktop) + "\\report.txt";
            //File.WriteAllLines(pathDesktop, lines);



            //...........................................

            //string directoryPath = Environment.CurrentDirectory;
            //string[] files = Directory.GetFiles(directoryPath);

            //Dictionary<string, Dictionary<string, double>> report = new Dictionary<string, Dictionary<string, double>>();

            //foreach (var file in files)
            //{
            //    FileInfo filedata = new FileInfo(file);
            //    string name = filedata.Name;
            //    string extension = filedata.Extension;
            //    long size = filedata.Length;
            //    double kbSize = size / 1024.0;

            //    if (!report.ContainsKey(extension))
            //    {
            //        report.Add(extension, new Dictionary<string, double>());
            //    }
            //    report[extension].Add(name, kbSize);
            //}

            //List<string> res = new List<string>();

            //foreach (var file in report.OrderByDescending(f => f.Value.Count).ThenBy(f => f.Key))
            //{
            //    res.Add(file.Key);
            //    foreach (var fileData in file.Value.OrderBy(f => f.Value))
            //    {
            //        res.Add($"--{fileData.Key} - {fileData.Value:F3}kb");
            //    }
            //}
            //string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "report.txt");
            //File.WriteAllLines(path, res);


            //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

            //using StreamWriter sw = new StreamWriter("../../../report.txt");

            //var files = Directory.GetFiles(@"../../../");
            //var extensionsAndFiles = new Dictionary<string, Dictionary<string, double>>();

            //for (int i = 0; i < files.Length; i++)
            //{
            //    var file = new FileInfo(files[i]);

            //    var extension = Path.GetExtension(files[i]);
            //    var name = Path.GetFileName(files[i]);
            //    var sizeToKB = file.Length / 1024.0;

            //    if (!extensionsAndFiles.ContainsKey(extension.ToLower()))
            //    {
            //        extensionsAndFiles.Add(extension.ToLower(), new Dictionary<string, double>());
            //    }
            //    extensionsAndFiles[extension.ToLower()].Add(name, sizeToKB);
            //}

            //foreach (var ex in extensionsAndFiles.OrderByDescending(n => n.Value.Count).ThenBy(n => n.Key))
            //{
            //    sw.WriteLine($"{ex.Key}");
            //    foreach (var f in ex.Value.OrderBy(n => n.Value))
            //    {
            //        if (f.Key != "report.txt")
            //        sw.WriteLine($"--{f.Key} - {Math.Round(f.Value,3)}kb");
            //    }
            //}
        }
    }
}

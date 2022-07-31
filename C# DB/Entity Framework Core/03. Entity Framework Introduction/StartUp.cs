using SoftUni.Data;
using SoftUni.Models;
using System;
using System.Linq;
using System.Text;

namespace SoftUni
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            using SoftUniContext context = new SoftUniContext();
            var result = "";
            ////3
            //result = GetEmployeesFullInformation(context);

            ////4
            //result = GetEmployeesWithSalaryOver50000(context);

            ////5
            //result = GetEmployeesFromResearchAndDevelopment(context);

            ////6
            //result = AddNewAddressToEmployee(context);

            ////7
            //result = GetEmployeesInPeriod(context);

            ////8
            //result = GetAddressesByTown(context);

            ////9
            //result = GetEmployee147(context);

            ////10
            //result = GetDepartmentsWithMoreThan5Employees(context);

            ////11
            //result = GetLatestProjects(context);

            ////12
            //result = IncreaseSalaries(context);

            ////13
            //result = GetEmployeesByFirstNameStartingWithSa(context);

            ////14
            //result = DeleteProjectById(context);

            ////15
            result = RemoveTown(context);


            Console.WriteLine(result);

        }
        public static string GetEmployeesFullInformation(SoftUniContext context)
        {

            var employeesInfo = context
                .Employees
                .OrderBy(e => e.EmployeeId)
                .Select(e => new
                {
                    e.FirstName,
                    e.LastName,
                    e.MiddleName,
                    e.JobTitle,
                    e.Salary
                })
                .ToArray();
            var result = new StringBuilder();
            foreach (var e in employeesInfo)
            {
                result.AppendLine($"{e.FirstName} {e.LastName} {e.MiddleName} {e.JobTitle} {e.Salary:f2}");
            }
            return result.ToString().TrimEnd();

        }
        public static string GetEmployeesWithSalaryOver50000(SoftUniContext context)
        {
            var employeesInfo = context
               .Employees
               .Where(e => e.Salary > 50000)
               .OrderBy(e => e.FirstName)
               .Select(e => new
               {
                   e.FirstName,
                   e.Salary
               })
               .ToArray();
            var result = new StringBuilder();
            foreach (var e in employeesInfo)
            {
                result.AppendLine($"{e.FirstName} - {e.Salary:f2}");
            }
            return result.ToString().TrimEnd();
        }
        public static string GetEmployeesFromResearchAndDevelopment(SoftUniContext context)
        {
            var employeesInfo = context
               .Employees
               .Where(e => e.Department.Name == "Research and Development")
               .OrderBy(e => e.Salary).ThenByDescending(e => e.FirstName)
               .Select(e => new
               {
                   e.FirstName,
                   e.LastName,
                   e.Department,
                   e.Salary
               })
               .ToArray();
            var result = new StringBuilder();
            foreach (var e in employeesInfo)
            {
                result.AppendLine($"{e.FirstName} {e.LastName} from {e.Department.Name} - ${e.Salary:f2}");
            }
            return result.ToString().TrimEnd();
        }
        public static string AddNewAddressToEmployee(SoftUniContext context)
        {
            var newAddress = new Address();
            newAddress.AddressText = "Vitoshka 15";
            newAddress.TownId = 4;
            var currentEmployee = context.Employees
                .FirstOrDefault(e => e.LastName == "Nakov");
            if (currentEmployee != null)
            {
                currentEmployee.Address = newAddress;
            }
            context.SaveChanges();

            var addressesInfo = context.Addresses.OrderByDescending(a => a.AddressId).Take(10).Select(a => a.AddressText).ToArray();
            var result = new StringBuilder();
            foreach (var a in addressesInfo) 
            {
                result.AppendLine(a);
            }
            return result.ToString().TrimEnd();
        }
        public static string GetEmployeesInPeriod(SoftUniContext context)
        {
            var result = new StringBuilder();
            var employees = context.Employees
                .Where(e => e.EmployeesProjects.Any(ep => ep.Project.StartDate.Year >= 2001 && ep.Project.StartDate.Year <= 2003))
                .Take(10)
                .Select(e => new
                {
                    e.FirstName,
                    e.LastName,
                    ManagerFName = e.Manager.FirstName,
                    ManagerLName = e.Manager.LastName,
                    Projects = e.EmployeesProjects
                        .Select(p => new 
                        { 
                            ProjectName = p.Project.Name,
                            StartDate = p.Project.StartDate,
                            EndDate = p.Project.EndDate
                        })
                });
            foreach (var e in employees)
            {
                result.AppendLine($"{e.FirstName} {e.LastName} - Manager: {e.ManagerFName} {e.ManagerLName}");
                foreach (var p in e.Projects)
                {
                    var endDate = p.EndDate == null ? "not finished" : $"{p.EndDate}";
                    result.AppendLine($"--{p.ProjectName} - {p.StartDate} - {endDate}");
                }
            }
            return result.ToString().TrimEnd();

        }
        public static string GetAddressesByTown(SoftUniContext context)
        {
            var result = new StringBuilder();

            var addressesInfo = context.Addresses
                .Select(a => new
                {
                    TownName = a.Town.Name,
                    a.AddressText,
                    CountOfEmployees = context.Employees.Where(e => e.AddressId == a.AddressId).Count()
                })
                .OrderByDescending(ad => ad.CountOfEmployees)
                .ThenBy(ad => ad.TownName)
                .ThenBy(ad => ad.AddressText).Take(10);
            foreach (var a in addressesInfo)
            {
                result.AppendLine($"{a.AddressText}, {a.TownName} - {a.CountOfEmployees} employees");
            }
            return result.ToString().TrimEnd();

        }
        public static string GetEmployee147(SoftUniContext context)
        {
            var result = new StringBuilder();

            var currentEmployee = context.Employees.Where(e => e.EmployeeId == 147).Select(e => new
            {
                e.FirstName,
                e.LastName,
                e.JobTitle,
                Projects = e.EmployeesProjects
                        .Select(p => new
                        {
                            ProjectName = p.Project.Name
                        })
            });
            foreach (var e in currentEmployee)
            {
                result.AppendLine($"{e.FirstName} {e.LastName} - {e.JobTitle}");
                foreach (var p in e.Projects.OrderBy(pr => pr.ProjectName))
                {
                    result.AppendLine($"{p.ProjectName}");
                }
            }
            return result.ToString().TrimEnd();
        }
        public static string GetDepartmentsWithMoreThan5Employees(SoftUniContext context)
        {
            var result = new StringBuilder();

            var departments = context.Departments
                .Where(d => d.Employees.Count() > 5)
                .Select(d => new
                {
                    d.Name,
                    ManagerFirstName = d.Manager.FirstName,
                    ManagerLastName = d.Manager.LastName,
                    Employees = d.Employees
                    .OrderBy(e => e.FirstName)
                    .ThenBy(e => e.LastName)
                    .Select(e => new
                    {
                        EmployeeFirstName = e.FirstName,
                        EmployeeLastName = e.LastName,
                        JobTitle = e.JobTitle
                    })
                })
                .OrderBy(d => d.Employees.Count())
                .ThenBy(d => d.Name);
            foreach (var d in departments)
            {
                result.AppendLine($"{d.Name} - {d.ManagerFirstName} {d.ManagerLastName}");
                foreach (var e in d.Employees)
                {
                    result.AppendLine($"{e.EmployeeFirstName} {e.EmployeeLastName} - {e.JobTitle}");
                }
            }
            return result.ToString().TrimEnd();
        }
        public static string GetLatestProjects(SoftUniContext context)
        {
            var result = new StringBuilder();

            var projects = context.Projects
                .OrderByDescending(p => p.StartDate)
                .Take(10)
                .OrderBy(p => p.Name)
                .Select(p => new
                {
                    p.Name,
                    p.Description,
                    p.StartDate
                });
            foreach (var p in projects)
            {
                result.AppendLine($"{p.Name}");
                result.AppendLine($"{p.Description}");
                result.AppendLine($"{p.StartDate}");
            }
            return result.ToString().TrimEnd();
        }
        public static string IncreaseSalaries(SoftUniContext context)
        {
            var result = new StringBuilder();

            var employees = context.Employees
                .Where(e =>
                    e.Department.Name == "Engineering" ||
                    e.Department.Name == "Tool Design" ||
                    e.Department.Name == "Marketing" ||
                    e.Department.Name == "Information Services")
                .OrderBy(e => e.FirstName)
                .ThenBy(e => e.LastName);
            foreach (var e in employees)
            {
                e.Salary *= 1.12m;
            }
            context.SaveChanges();
            foreach (var e in employees)
            {
                result.AppendLine($"{e.FirstName} {e.LastName} (${e.Salary:f2})");
            }
            return result.ToString().TrimEnd();
        }
        public static string GetEmployeesByFirstNameStartingWithSa(SoftUniContext context)
        {
            var result = new StringBuilder();

            var employees = context.Employees
                .Where(e =>
                    e.FirstName.ToLower().StartsWith("sa") )
                .OrderBy(e => e.FirstName)
                .ThenBy(e => e.LastName)
                .Select(e => new
                {
                    e.FirstName,
                    e.LastName,
                    e.JobTitle,
                    e.Salary
                });
            foreach (var e in employees)
            {
                result.AppendLine($"{e.FirstName} {e.LastName} - {e.JobTitle} - (${e.Salary:f2})");
            }
            return result.ToString().TrimEnd();
        }
        public static string DeleteProjectById(SoftUniContext context)
        {
            var result = new StringBuilder();
            var project = context.Projects.Find(2);
            var projectEmployees = context.EmployeesProjects.Where(p => p.ProjectId == 2);
            foreach (var pe in projectEmployees)
            {
                context.EmployeesProjects.Remove(pe);
            }
            context.Projects.Remove(project);
            context.SaveChanges();
            var projectsToPrint = context.Projects.Take(10).Select(p => p.Name);
            foreach (var p in projectsToPrint)
            {
                result.AppendLine(p);
            }
            return result.ToString().TrimEnd();
        }
        public static string RemoveTown(SoftUniContext context)
        {
            var result = new StringBuilder();
            var currentTown = context.Towns.FirstOrDefault(t => t.Name == "Seattle");

            var addressesToDelete = context.Addresses.Where(a => a.Town == currentTown);
            result.AppendLine($"{addressesToDelete.Count()} addresses in Seattle were deleted");
           
            foreach (var e in context.Employees.Where(e => addressesToDelete.Contains(e.Address)))
            {
                e.AddressId = null;
            }
            context.SaveChanges();
            foreach (var a in addressesToDelete)
            {
                context.Addresses.Remove(a);
            }
            context.Towns.Remove(currentTown);
            context.SaveChanges();
            return result.ToString().TrimEnd();
        }
    }

}

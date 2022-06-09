USE SoftUni

--1. Employee Address
SELECT TOP(5)
	e.EmployeeID
	,e.JobTitle
	,a.AddressID
	,a.AddressText
FROM Employees AS e
JOIN Addresses AS a ON e.AddressID = a.AddressID
ORDER BY a.AddressID ASC
--2. Addresses with Towns
SELECT TOP(50)
	e.FirstName
	,e.LastName
	,t.Name
	,a.AddressText
FROM Employees AS e
JOIN Addresses AS a ON e.AddressID = a.AddressID
JOIN Towns AS t ON a.TownID = t.TownID
ORDER BY e.FirstName, e.LastName ASC
--3. Sales Employee
SELECT 
	e.EmployeeID
	,e.FirstName
	,e.LastName
	,d.Name
FROM Employees AS e
JOIN Departments AS d ON e.DepartmentID = d.DepartmentID 
WHERE d.Name = 'Sales'
ORDER BY e.EmployeeID ASC
--4. Employee Departments
SELECT TOP(5)
	e.EmployeeID
	,e.FirstName
	,e.Salary
	,d.Name
FROM Employees AS e
JOIN Departments AS d ON e.DepartmentID = d.DepartmentID 
WHERE e.Salary > 15000
ORDER BY d.DepartmentID ASC
--5. Employees Without Project
SELECT TOP(3)
	e.EmployeeID
	,e.FirstName
FROM Employees AS e
LEFT JOIN EmployeesProjects AS ep ON e.EmployeeID = ep.EmployeeID
WHERE ep.ProjectID IS NULL
--6. Employees Hired After
SELECT
	e.FirstName
	,e.LastName
	,E.HireDate
	,d.Name
FROM Employees AS e
JOIN Departments AS d ON e.DepartmentID = d.DepartmentID 
WHERE 
	e.HireDate >= '1999-1-1'
	AND (d.Name = 'Sales' OR d.Name = 'Finance')
ORDER BY e.HireDate ASC
--7. Employees with Project
SELECT TOP(5)
	e.EmployeeID
	,e.FirstName
	,p.Name AS [ProjectName]
FROM Employees AS e
JOIN EmployeesProjects AS ep ON e.EmployeeID = ep.EmployeeID
JOIN Projects AS p ON ep.ProjectID = p.ProjectID
WHERE p.StartDate > '2002-08-13' AND p.EndDate IS NULL
ORDER BY e.EmployeeID ASC
--8. Employee 24
SELECT 
	e.EmployeeID
	,e.FirstName
	,(CASE
	WHEN p.StartDate >= '2005-1-1' THEN NULL
	ELSE p.Name
	END) AS [ProjectName]
FROM Employees AS e
JOIN EmployeesProjects AS ep ON e.EmployeeID = ep.EmployeeID
JOIN Projects AS p ON ep.ProjectID = p.ProjectID
WHERE e.EmployeeID = 24
ORDER BY e.EmployeeID ASC
--9. Employee Manager
SELECT 
	e.EmployeeID
	,e.FirstName
	,m.EmployeeID  AS [ManagerID]
	,m.FirstName AS [ManagerName]
FROM Employees AS e
JOIN Employees AS m ON e.ManagerID = m.EmployeeID
WHERE m.EmployeeID IN (3, 7)
ORDER BY e.EmployeeID ASC
--10. Employee Summary
SELECT TOP(50)
	e.EmployeeID
	,CONCAT(e.FirstName, ' ', e.LastName) AS [EmployeeName]
	,CONCAT(m.FirstName, ' ', m.LastName) AS [ManagerName]
	,d.Name AS [DepartmentName]
FROM Employees AS e
JOIN Employees AS m ON e.ManagerID = m.EmployeeID
JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
ORDER BY e.EmployeeID 
--11. Min Average Salary
SELECT TOP(1) AVG(Salary) AS MinAverageSalary
FROM Employees
GROUP BY DepartmentID
ORDER BY MinAverageSalary
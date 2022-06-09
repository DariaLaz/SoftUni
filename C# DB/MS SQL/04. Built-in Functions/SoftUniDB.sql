USE [SoftUni]

--Problem 1. Find Names of All Employees by First Name
SELECT 
	FirstName
	,LastName
FROM Employees
WHERE FirstName LIKE 'Sa%'
--Problem 2. Find Names of All employees by Last Name 
SELECT 
	FirstName
	,LastName
FROM Employees
WHERE LastName LIKE '%ei%'
--Problem 3. Find First Names of All Employees
SELECT 
	FirstName
FROM Employees
WHERE 
	DepartmentID IN (3, 10)
	AND HireDate >= '1995-1-1'
	AND HireDate < '2006-1-1'
--Problem 4. Find All Employees Except Engineers
SELECT 
	FirstName
	,LastName
FROM Employees
WHERE JobTitle NOT LIKE '%engineer%'
--Problem 5. Find Towns with Name Length
SELECT 
	Name
FROM Towns
WHERE 
	LEN(Name) = 5 
	OR LEN(Name) = 6
ORDER BY Name
--Problem 6. Find Towns Starting With
SELECT 
	TownID,
	Name
FROM Towns
WHERE 
	Name LIKE 'M%'
	OR Name LIKE 'K%'
	OR Name LIKE 'B%'
	OR Name LIKE 'E%'
ORDER BY Name
--Problem 7. Find Towns Not Starting With
SELECT 
	TownID,
	Name
FROM Towns
WHERE 
	Name NOT LIKE 'R%'
	AND Name NOT LIKE 'D%'
	AND Name NOT LIKE 'B%'
ORDER BY Name
--Problem 8. Create View Employees Hired After 2000 Year
CREATE VIEW V_EmployeesHiredAfter2000 AS
SELECT
	FirstName
	, LastName
FROM Employees
WHERE HireDate >= '2001-1-1'
--Problem 9. Length of Last Name
SELECT 
	FirstName
	,LastName
FROM Employees
WHERE 
	LEN(LastName) = 5 
--Problem 10. Rank Employees by Salary
SELECT
	EmployeeID
	,FirstName
	,LastName
	,Salary
	,DENSE_RANK() OVER (PARTITION BY Salary ORDER BY EmployeeID) AS [Rank]
FROM Employees
WHERE Salary BETWEEN 10000 AND 50000
ORDER BY Salary DESC
--Problem 11. Find All Employees with Rank 2 *
SELECT * FROM 
	(SELECT 
		[EmployeeID]
		, [FirstName]
		, [LastName]
		, [Salary],
		DENSE_RANK() OVER (PARTITION BY [Salary] 
			ORDER BY [EmployeeID]) AS [Rank]
		FROM [Employees]
		WHERE [Salary] BETWEEN 10000 AND 50000 ) AS [Sel]
WHERE [Sel].[Rank] = 2
ORDER BY [Salary] DESC
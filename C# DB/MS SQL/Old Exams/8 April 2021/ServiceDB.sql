CREATE DATABASE Service
USE Service
--01. DDL
CREATE TABLE Users 
(
	Id INT PRIMARY KEY IDENTITY,
	Username VARCHAR(30) NOT NULL UNIQUE,
	Password VARCHAR(50) NOT NULL,
	Name VARCHAR(50),
	Birthdate DATETIME,
	Age INT CHECK(Age BETWEEN 14 AND 110),
	Email VARCHAR(50) NOT NULL
)
CREATE TABLE Departments
(
	Id INT PRIMARY KEY IDENTITY,
	Name VARCHAR(50) NOT NULL
)
CREATE TABLE Employees
(
	Id INT PRIMARY KEY IDENTITY,
	FirstName VARCHAR(25),
	LastName VARCHAR(25),
	Birthdate DATETIME,
	Age INT CHECK(Age BETWEEN 18 AND 110),
	DepartmentId INT REFERENCES Departments(Id)
)
CREATE TABLE Categories
(
	Id INT PRIMARY KEY IDENTITY,
	Name VARCHAR(50) NOT NULL,
	DepartmentId INT NOT NULL REFERENCES Departments(Id)
)
CREATE TABLE Status
(
	Id INT PRIMARY KEY IDENTITY,
	Label VARCHAR(30) NOT NULL
)
CREATE TABLE Reports
(
	Id INT PRIMARY KEY IDENTITY,
	CategoryId INT NOT NULL REFERENCES Categories(Id),
	StatusId INT NOT NULL REFERENCES Status(Id),
	OpenDate DATETIME NOT NULL,
	CloseDate DATETIME,
	Description VARCHAR(200) NOT NULL,
	UserId INT NOT NULL REFERENCES Users(Id),
	EmployeeId INT REFERENCES Employees(Id)
)
--02. Insert
INSERT INTO Employees(FirstName,LastName,Birthdate, DepartmentId) VALUES 
('Marlo', 'O''Malley', '1958-9-21', 1), 
('Niki', 'Stanaghan', '1969-11-26', 4), 
('Ayrton', 'Senna', '1960-03-21', 9), 
('Ronnie', 'Peterson', '1944-02-14', 9), 
('Giovanna', 'Amati', '1959-07-20', 5)

INSERT INTO Reports(CategoryId,StatusId, OpenDate, CloseDate,Description,UserId, EmployeeId) VALUES
(1, 1, '2017-04-13', NULL, 'Stuck Road on Str.133', 6, 2),
(6, 3, '2015-09-05', '2015-12-06', 'Charity trail running', 3, 5),
(14, 2, '2015-09-07', NULL, 'Falling bricks on Str.58', 5, 2),
(4, 3, '2017-07-03', '2017-07-06', 'Cut off streetlight on Str.11', 1, 1)
--03. Update
UPDATE Reports
SET CloseDate = GETDATE()
WHERE CloseDate IS NULL
--04. Delete
DELETE Reports
WHERE StatusId = 4
--05. Unassigned Reports
SELECT 
	Description
	,FORMAT(OpenDate, 'dd-MM-yyyy')
FROM Reports
WHERE EmployeeId IS NULL
ORDER BY OpenDate, Description
--06. Reports & Categories
SELECT 
	r.Description
	,c.Name as [CategoryName]
FROM Reports AS r
JOIN Categories AS c ON r.CategoryId = c.Id
ORDER BY r.Description, c.Name
--07. Most Reported Category
SELECT top 5
	c.Name as [CategoryName]
	,COUNT(*) as [ReportsNumber]
FROM Categories AS c
JOIN Reports AS r ON r.CategoryId = c.Id
GROUP BY c.Name
ORDER BY [ReportsNumber] DESC, c.Name
--08. Birthday Report
SELECT 
	u.Username
	,c.Name as [CategoryName]
FROM Reports as r
JOIN Users AS u ON r.UserId = u.Id
JOIN Categories AS c ON c.Id = r.CategoryId
WHERE FORMAT(r.OpenDate, 'dd-MM') = FORMAT(u.Birthdate, 'dd-MM')
ORDER BY u.Username, CategoryName
--09. User per Employee
SELECT 
	CONCAT(e.FirstName, ' ', e.LastName) as FullName, 
	COUNT(r.UserId) AS UsersCount
FROM Employees AS e
LEFT JOIN Reports AS r ON e.Id = r.EmployeeId
GROUP BY CONCAT(e.FirstName, ' ', e.LastName)
ORDER BY UsersCount desc, FullName
--10. Full Info
SELECT 
	ISNULL(e.FirstName + ' ' + e.LastName,'None') AS Employee,
	ISNULL(d.Name,'None') AS Department,
	c.Name as Category, 
    r.Description, 
	FORMAT(r.OpenDate, 'dd.MM.yyyy'),
	s.Label AS [Status],
	u.Name as [User]
FROM Reports AS r
LEFT JOIN Employees AS e ON r.EmployeeId = e.Id
LEFT JOIN Departments AS d ON D.Id = E.DepartmentId
LEFT JOIN Categories AS c ON c.Id = r.CategoryId
LEFT JOIN Users AS u ON u.Id = r.UserId
LEFT JOIN Status AS s ON s.Id = r.StatusId
ORDER BY 
	e.FirstName desc, 
	e.LastName desc, 
	Department, 
	Category, 
	Description, 
	r.OpenDate, 
	Status, 
	User
--11. Hours to Complete
CREATE OR ALTER FUNCTION udf_HoursToComplete(@StartDate DATETIME, @EndDate DATETIME)
RETURNS INT
AS 
BEGIN
	DECLARE @Result INT = (
		SELECT 
			(CASE 
			WHEN @StartDate IS NULL OR @EndDate IS NULL THEN 0
			ELSE DATEDIFF(HOUR, @StartDate, @EndDate)
			END))
	RETURN @Result
END
--12. Assign Employee
CREATE PROC usp_AssignEmployeeToReport(@EmployeeId INT, @ReportId INT)
AS
BEGIN
	DECLARE @ReportsDept INT = (
		SELECT DepartmentId
		FROM Reports AS r
		JOIN Categories AS c ON c.Id = r.CategoryId
		JOIN Departments AS d ON d.Id = c.DepartmentId
		WHERE r.Id = @ReportId)
	DECLARE @EmployeeDept INT = (
		SELECT DepartmentId
		FROM Employees 
		WHERE Id = @EmployeeId)

	IF(@EmployeeDept != @ReportsDept)
	BEGIN
		SELECT 'Employee doesn''t belong to the appropriate department!'
	END
	IF(@EmployeeDept = @ReportsDept)
	BEGIN
		UPDATE Reports
		SET EmployeeId = @EmployeeId
	END
END
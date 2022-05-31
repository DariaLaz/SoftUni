--Problem 16.	Create SoftUni Database
CREATE DATABASE SoftUni
USE SoftUni
CREATE TABLE Towns
(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name NVARCHAR(MAX)
)
CREATE TABLE Addresses
(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	AddressText NVARCHAR(MAX) NOT NULL,
	TownId INT FOREIGN KEY REFERENCES Towns(Id)
)
CREATE TABLE Departments
(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	Name NVARCHAR(MAX)
)
CREATE TABLE Employees
(
	Id INT IDENTITY(1,1) PRIMARY KEY,
	FirstName NVARCHAR(MAX) NOT NULL,
	LastName NVARCHAR(MAX) NOT NULL,
	JobTitle NVARCHAR(MAX) NOT NULL,
	DepartmentId INT FOREIGN KEY REFERENCES Departments(Id),
	HireDate DATE,
	Salary DECIMAL(10,2) NOT NULL,
	AddressId INT FOREIGN KEY REFERENCES Addresses(Id)
)
--Problem 17.	Backup Database
BACKUP DATABASE SoftUni
TO DISK = 'E:\SoftUniDB.bak'
DROP DATABASE SoftUni
RESTORE DATABASE SoftUni 
FROM DISK = 'E:\SoftUniDB.bak'
--Problem 18.	Basic Insert
use SoftUni
INSERT INTO Towns (Name) VALUES
	('Sofia'),
	('Plovdiv'),
	('Varna'),
	('Burgas')
INSERT INTO Departments (Name) VALUES
	('Engineering'),
	('Sales'),
	('Marketing'),
	('Software Development'),
	('Quality Assurance')
INSERT INTO Employees (FirstName, LastName, JobTitle, DepartmentId, HireDate, Salary) VALUES
	('Ivan', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00),
	('Petar', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00),
	('Maria', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25),
	('Georgi', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00),
	('Peter', 'Pan', 'Intern', 3, '2016-08-28', 599.88)

--Problem 19.	Basic Select All Fields
SELECT * FROM Towns
SELECT * FROM Departments
SELECT * FROM Employees
--Problem 20.	Basic Select All Fields and Order Them
SELECT * FROM Towns
ORDER BY Name
SELECT * FROM Departments
ORDER BY Name
SELECT * FROM Employees
ORDER BY Salary DESC
--Problem 21.	Basic Select Some Fields
SELECT Name FROM Towns
ORDER BY Name
SELECT Name FROM Departments
ORDER BY Name
SELECT FirstName, LastName, JobTitle, Salary FROM Employees
ORDER BY Salary DESC
--Problem 22.	Increase Employees Salary
UPDATE Employees
SET Salary = Salary * 1.1
SELECT Salary FROM Employees



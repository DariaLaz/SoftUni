USE SoftUni
--1. Employees with Salary Above 35000
CREATE PROC usp_GetEmployeesSalaryAbove35000 
AS
BEGIN
	SELECT 
		FirstName as [First Name]
		,LastName as [Last Name]
	FROM Employees
	WHERE Salary > 35000
END
--2. Employees with Salary Above Number
CREATE PROC usp_GetEmployeesSalaryAboveNumber(@MinNumber DECIMAL(18,4))
AS
BEGIN
	SELECT 
		FirstName as [First Name]
		,LastName as [Last Name]
	FROM Employees
	WHERE Salary >= @MinNumber
END
--3. Town Names Starting With
CREATE PROC usp_GetTownsStartingWith (@StartLetter varchar(10))
AS
BEGIN
	SELECT 
		Name
	FROM Towns
	WHERE LEFT(Name, LEN(@StartLetter)) = @StartLetter
END
--4. Employees from Town
CREATE PROC usp_GetEmployeesFromTown (@TownName varchar(20))
AS
BEGIN
	SELECT 
		e.FirstName
		,e.LastName
	FROM Employees AS e
	JOIN Addresses AS a ON e.AddressID = a.AddressID
	JOIN Towns AS t ON t.TownID = a.TownID
	WHERE t.Name = @TownName
END
--5. Salary Level Function
CREATE FUNCTION ufn_GetSalaryLevel(@salary DECIMAL(18,4))
RETURNS NVARCHAR(10)
AS
BEGIN
	DECLARE @Result NVARCHAR(10)
	SET @Result = 'High'
	IF @salary < 30000 
		SET @Result = 'Low'
	ELSE IF @salary <= 50000 
		SET @Result = 'Average'
	RETURN @Result
END
--6. Employees by Salary Level
CREATE PROC usp_EmployeesBySalaryLevel  (@SalaryLevel varchar(20))
AS
BEGIN
	SELECT 
		FirstName
		,LastName
	FROM Employees 
	WHERE dbo.ufn_GetSalaryLevel(Salary) = @SalaryLevel
END
--7. Define Function
CREATE FUNCTION ufn_IsWordComprised(@Letters nvarchar(40), @Word nvarchar(20))
RETURNS BIT
AS
BEGIN
	DECLARE @i INT = 1;
	WHILE(@i <= LEN(@Word))
	BEGIN
		IF(CHARINDEX(SUBSTRING(@Word, @i, 1), @Letters) = 0)
			RETURN 0
		ELSE 
			SET @i += 1
	END
	RETURN 1
END

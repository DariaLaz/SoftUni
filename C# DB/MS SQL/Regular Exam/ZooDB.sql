CREATE DATABASE Zoo
USE Zoo

--01. DDL
CREATE TABLE Owners (
	Id INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(50) NOT NULL,
	PhoneNumber VARCHAR(15) NOT NULL,
	[Address] VARCHAR(50)
)
CREATE TABLE AnimalTypes (
	Id INT PRIMARY KEY IDENTITY,
	AnimalType VARCHAR(30) NOT NULL
)
CREATE TABLE Cages (
	Id INT PRIMARY KEY IDENTITY,
	AnimalTypeId INT NOT NULL REFERENCES AnimalTypes(Id)
)
CREATE TABLE Animals (
	Id INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(30) NOT NULL,
	BirthDate DATE NOT NULL,
	OwnerId INT REFERENCES Owners(Id),
	AnimalTypeId INT NOT NULL REFERENCES AnimalTypes(Id)
)
CREATE TABLE AnimalsCages (
	CageId INT NOT NULL REFERENCES Cages(Id),
	AnimalId INT NOT NULL REFERENCES Animals(Id)
	PRIMARY KEY(CageId, AnimalId)
)
CREATE TABLE VolunteersDepartments (
	Id INT PRIMARY KEY IDENTITY,
	DepartmentName VARCHAR(30) NOT NULL
)
CREATE TABLE Volunteers (
	Id INT PRIMARY KEY IDENTITY,
	Name VARCHAR(50) NOT NULL,
	PhoneNumber VARCHAR(15) NOT NULL,
	Address VARCHAR(50),
	AnimalId INT REFERENCES Animals(Id),
	DepartmentId INT NOT NULL REFERENCES VolunteersDepartments(Id)
)
--02. Insert
INSERT INTO Volunteers(Name, PhoneNumber, Address, AnimalId, DepartmentId) VALUES
('Anita Kostova', '0896365412', 'Sofia, 5 Rosa str.', 15, 1),
('Dimitur Stoev', '0877564223', NULL, 42, 4),
('Kalina Evtimova', '0896321112', 'Silistra, 21 Breza str.', 9, 7),
('Stoyan Tomov', '0898564100', 'Montana, 1 Bor str.', 18, 8),
('Boryana Mileva', '0888112233', NULL, 31, 5)

INSERT INTO Animals(Name, BirthDate, OwnerId, AnimalTypeId) VALUES
('Giraffe', '2018-09-21', 21, 1),
('Harpy Eagle', '2015-04-17', 15, 3),
('Hamadryas Baboon', '2017-11-02', NULL, 1),
('Tuatara', '2021-06-30', 2, 4)
--03. Update
UPDATE Animals
SET OwnerId = 4
WHERE OwnerId IS NULL
--04. Delete
DELETE Volunteers
WHERE DepartmentId = 2
DELETE VolunteersDepartments
WHERE Id = 2
--05. Volunteers
SELECT 
	[Name]
	,PhoneNumber
	,[Address]
	,AnimalId
	,DepartmentId
FROM Volunteers
ORDER BY [Name], AnimalId, DepartmentId
--06. Animals data
SELECT 
	A.Name
	,[AT].AnimalType
	,FORMAT(A.BirthDate, 'dd.MM.yyyy')
FROM Animals AS A
JOIN AnimalTypes AS [AT] ON A.AnimalTypeId = [AT].Id
ORDER BY A.Name 
--07. Owners and Their Animals
SELECT TOP(5) O.Name, COUNT(A.Id) AS CountOfAnimals
FROM Animals AS A
JOIN Owners AS O ON A.OwnerId = O.Id
GROUP BY O.Name
ORDER BY CountOfAnimals DESC
--08. Owners, Animals and Cages
SELECT 
	CONCAT(O.Name, '-', A.Name) AS OwnersAnimals
	,O.PhoneNumber
	,AC.CageId AS CageId
FROM Owners AS O 
JOIN Animals AS A ON A.OwnerId = O.Id
JOIN AnimalTypes AS [AT] ON A.AnimalTypeId = [AT].Id
JOIN AnimalsCages AS AC ON AC.AnimalId = A.Id
WHERE [AT].AnimalType = 'Mammals'
ORDER BY O.Name, A.Name DESC
--09. Volunteers in Sofia
SELECT 
	[Name]
	,PhoneNumber
	,CASE
		WHEN Address LIKE ' Sofia%' THEN RIGHT(Address, LEN(Address) - 9)
		ELSE RIGHT(Address, LEN(Address) - 7)
	END AS [Address]
FROM Volunteers
WHERE DepartmentId = 2 AND Address LIKE '%Sofia%'
ORDER BY [Name]
--10. Animals for Adoption
SELECT 
	A.Name
	,YEAR(A.BirthDate) AS BirthYear
	,[AT].AnimalType
FROM Animals AS A 
JOIN AnimalTypes AS [AT] ON A.AnimalTypeId = [AT].Id
WHERE 
	(2022 - YEAR(A.BirthDate)) < 5 
	AND AnimalType <> 'Birds' 
	AND A.OwnerId IS NULL
ORDER BY A.Name
--11. All Volunteers in a Department
CREATE FUNCTION udf_GetVolunteersCountFromADepartment(@VolunteersDepartment NVARCHAR(MAX))
RETURNS INT
AS 
BEGIN
	DECLARE @Result INT = (
		SELECT COUNT(*)
		FROM Volunteers as V
		JOIN VolunteersDepartments as VD on VD.Id = V.DepartmentId
		WHERE VD.DepartmentName = @VolunteersDepartment)
	RETURN @Result
END
--12. Animals with Owner or Not
CREATE PROC usp_AnimalsWithOwnersOrNot(@AnimalName VARCHAR(MAX))
AS
BEGIN
	DECLARE @OwnerName VARCHAR(MAX) = (
		SELECT O.Name
		FROM Animals AS A
		JOIN Owners AS O ON A.OwnerId = O.Id
		WHERE A.Name = @AnimalName)
	IF @OwnerName IS NULL
		SELECT @AnimalName AS [Name], 'For adoption' AS OwnersName
	ELSE 
		SELECT @AnimalName AS [Name], @OwnerName AS OwnersName
END

EXEC usp_AnimalsWithOwnersOrNot 'Brown bear'
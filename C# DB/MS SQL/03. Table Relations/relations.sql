Create Database Example
use Example

--Problem 1. One-To-One Relationship
CREATE TABLE Passports(
	PassportID INT PRIMARY KEY,
	PassportNumber NVARCHAR(50)
)
CREATE TABLE Persons(
	PersonID INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(50),
	Salary DECIMAL,
	PassportID INT,
	CONSTRAINT FK_Persons_Passports
	FOREIGN KEY (PassportID)
	REFERENCES Passports(PassportID)
)
INSERT INTO Passports (PassportID, PassportNumber) VALUES 
	(101, 'N34FG21B'),
	(102, 'K65LO4R7'),
	(103, 'ZE657QP2')

INSERT INTO Persons (FirstName, Salary, PassportID) VALUES 
	('Roberto', 43300, 102),
	('Tom', 56100, 103),
	('Yana', 60200, 101)

--Problem 2. One-To-Many Relationship
CREATE TABLE Manufacturers(
	ManufacturerID INT PRIMARY KEY IDENTITY,
	Name NVARCHAR(50),
	EstablishedOn DATE
)
CREATE TABLE Models(
	ModelID INT PRIMARY KEY,
	Name NVARCHAR(50),
	ManufacturerID INT,
	CONSTRAINT FK_Models_Manufacturers
	FOREIGN KEY (ManufacturerID)
	REFERENCES Manufacturers(ManufacturerID)
)
INSERT INTO Manufacturers(Name, EstablishedOn) VALUES 
	('BMW', '07/03/1916'),
	('Tesla', '01/01/2003'),
	('Lada', '01/05/1966')
INSERT INTO Models(ModelID, Name, ManufacturerID) VALUES 
	(101, 'X1', '1'),
	(102, 'i6', '1'),
	(103, 'Model S', '2'),
	(104, 'Model X', '2'),
	(105, 'Model 3', '2'),
	(106, 'Nova', '3')
--Problem 3. Many-To-Many Relationship
CREATE TABLE Students(
	StudentID INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(50)
)
CREATE TABLE Exams(
	ExamID INT PRIMARY KEY,
	[Name] NVARCHAR(50)
)
CREATE TABLE StudentsExams(
	StudentID INT,
	ExamID INT,
	CONSTRAINT PK_StudentsExams
	PRIMARY KEY(StudentID, ExamID),
	CONSTRAINT FK_StudentsExams_Students
	FOREIGN KEY(StudentID)
	REFERENCES Students(StudentID),
	CONSTRAINT FK_StudentsExams_Exams
	FOREIGN KEY(ExamID)
	REFERENCES Exams(ExamID)
)

INSERT INTO Students ([Name]) VALUES 
	('Mila'),
	('Toni'),
	('Ron')
INSERT INTO Exams (ExamID, [Name]) VALUES 
	(101, 'SpringMVC'),
	(102, 'Neo4j'),
	(103, 'Oracle 11g')
INSERT INTO StudentsExams (StudentID, ExamID) VALUES 
	(1, 101),
	(1, 102),
	(2, 101),
	(3, 103),
	(2, 102),
	(2, 103)
--Problem 4. Self-Referencing 
CREATE TABLE Teachers(
	TeacherID INT PRIMARY KEY,
	Name NVARCHAR(50),
	ManagerID INT,
	CONSTRAINT FK_Teachers_Teachers
	FOREIGN KEY (ManagerID)
	REFERENCES Teachers(TeacherID)
)
INSERT INTO Teachers (TeacherID, [Name], ManagerID) VALUES 
	(101, 'John', NULL),
	(102, 'Maya', 106),
	(103, 'Silvia', 106),
	(104, 'Ted', 105),
	(105, 'Mark', 101),
	(106, 'Greta', 101)

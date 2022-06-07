CREATE DATABASE University
USE University

CREATE TABLE Majors(
	MajorID INT PRIMARY KEY,
	[Name] VARCHAR(50)
)
CREATE TABLE Students(
	StudentID INT PRIMARY KEY,
	StudentNumber NVARCHAR(50),
	StudentName INT,
	MajorID INT,
	CONSTRAINT FK_Majors_Students
	FOREIGN KEY (MajorID)
	REFERENCES Majors(MajorID)
)
CREATE TABLE Payments(
	PaymentID INT PRIMARY KEY,
	PaymentDate DATE,
	PaymentAmount INT,
	StudentID INT,
	CONSTRAINT FK_Payments_Students
	FOREIGN KEY (StudentID)
	REFERENCES Students(StudentID)
)

CREATE TABLE Subjects(
	SubjectID INT PRIMARY KEY,
	SubjectName VARCHAR(50)
)
CREATE TABLE Agenda(
	StudentID INT,
	SubjectID INT,
	CONSTRAINT PK_Agenda
	PRIMARY KEY(StudentID, SubjectID),
	CONSTRAINT FK_Agenda_Students
	FOREIGN KEY(StudentID)
	REFERENCES Students(StudentID),
	CONSTRAINT FK_Agenda_Subjects
	FOREIGN KEY(SubjectID)
	REFERENCES Subjects(SubjectID)
)

--Problem 15.	Hotel Database
CREATE DATABASE Hotel
USE Hotel

CREATE TABLE Employees 
(
	Id INT PRIMARY KEY,
	FirstName NVARCHAR(MAX),
	LastName NVARCHAR(MAX),
	Title NVARCHAR(MAX),
	Notes NVARCHAR(MAX)
)
CREATE TABLE Customers  
(
	AccountNumber INT PRIMARY KEY,
	FirstName NVARCHAR(MAX),
	LastName NVARCHAR(MAX),
	PhoneNumber NVARCHAR(10),
	EmergencyName NVARCHAR(MAX),
	EmergencyNumber NVARCHAR(10),
	Notes NVARCHAR(MAX)
)
CREATE TABLE RoomStatus
(
	RoomStatus NVARCHAR(200) PRIMARY KEY,
	Notes NVARCHAR(MAX)
)
CREATE TABLE RoomTypes 
(
	RoomType NVARCHAR(200) PRIMARY KEY,
	Notes NVARCHAR(MAX)
)
CREATE TABLE BedTypes 
(
	BedType NVARCHAR(200) PRIMARY KEY,
	Notes NVARCHAR(MAX)
)
CREATE TABLE Rooms 
(
	RoomNumber INT PRIMARY KEY, 
	RoomType NVARCHAR(200) FOREIGN KEY REFERENCES RoomTypes(RoomType), 
	BedType NVARCHAR(200) FOREIGN KEY REFERENCES BedTypes(BedType), 
	Rate DECIMAL(4,2), 
	RoomStatus NVARCHAR(200) FOREIGN KEY REFERENCES RoomStatus(RoomStatus),
	Notes NVARCHAR(MAX)
)
CREATE TABLE Payments 
(
	Id INT PRIMARY KEY,
	EmployeeId INT FOREIGN KEY REFERENCES Employees(Id),
	PaymentDate DATE, 
	AccountNumber INT, 
	FirstDateOccupied DATE, 
	LastDateOccupied DATE, 
	TotalDays INT, 
	AmountCharged DECIMAL(4,2), 
	TaxRate DECIMAL(4,2), 
	TaxAmount DECIMAL(4,2), 
	PaymentTotal DECIMAL(4,2), 
	Notes NVARCHAR(MAX)
)

CREATE TABLE Occupancies
(
	Id INT PRIMARY KEY,
	EmployeeId INT FOREIGN KEY REFERENCES Employees(Id),
	DateOccupied DATE,
	AccountNumber INT FOREIGN KEY REFERENCES Customers(AccountNumber),
	RoomNumber INT FOREIGN KEY REFERENCES Rooms(RoomNumber),
	RateApplied DECIMAL(4,2),
	PhoneCharge DECIMAL(4,2),
	Notes NVARCHAR(MAX)
)

INSERT INTO Employees VALUES
(1, 'FName1', 'LName1', 'Title1', 'Note1'),
(2, 'FName2', 'LName2', 'Title2', 'Note2'),
(3, 'FName3', 'LName3', 'Title3', 'Note3')

INSERT INTO Customers VALUES
(123, 'FName1', 'LName1', '0876545678', 'Name1', '0876111168', 'Note1'),
(223, 'FName2', 'LName2', '0876555678', 'Name2', '0876434368', 'Note2'),
(323, 'FName3', 'LName3', '0876234568', 'Name3', '0876234328', 'Note3')

INSERT INTO RoomStatus VALUES
('Free', 'Note1'),
('DoNotDisturb', 'Note2'),
('Taken', 'Note3')

INSERT INTO RoomTypes VALUES
('Double', 'Note1'),
('Single', 'Note2'),
('Family', 'Note3')

INSERT INTO BedTypes VALUES
('Double', 'Note1'),
('Single', 'Note2'),
('Big', 'Note3')

INSERT INTO Rooms VALUES
(1, 'Single', 'Single', NULL, 'Taken', 'Note1'),
(2, 'Double', 'Double', NULL, 'DoNotDisturb', 'Note2'),
(3, 'Single', 'Single', NULL, 'Free', 'Note3')

INSERT INTO Payments VALUES
(1, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)

INSERT INTO Occupancies VALUES
(1, 2, NULL, 123, 1, NULL, NULL, NULL),
(2, 2, NULL, 123, 3, NULL, NULL, NULL),
(3, 2, NULL, 123, 2, NULL, NULL, NULL)

--Problem 23.	Decrease Tax Rate
UPDATE Payments
SET TaxRate = TaxRate * 0.97
SELECT TaxRate FROM Payments
--Problem 24.	Delete All Records
TRUNCATE TABLE Occupancies
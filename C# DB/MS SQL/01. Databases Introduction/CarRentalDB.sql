--Problem 14.	Car Rental Database
CREATE DATABASE CarRental 
USE CarRental 

CREATE TABLE Categories 
(
	Id INT PRIMARY KEY,
	CategoryName NVARCHAR(MAX) NOT NULL,
	DailyRate DECIMAL(4,2),
	WeeklyRate DECIMAL(4,2),
	MonthlyRate DECIMAL(4,2),
	WeekendRate DECIMAL(4,2)
)
CREATE TABLE Cars  
(
	Id INT PRIMARY KEY,
	PlateNumber INT,
	Manufacturer NVARCHAR(MAX),
	Model NVARCHAR(MAX),
	CarYear INT,
	CategoryId INT FOREIGN KEY REFERENCES Categories(Id),
	Doors INT,
	Picture VARBINARY(MAX),
	Available BIT
)
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
	Id INT PRIMARY KEY,
	DriverLicenceNumber INT,
	FullName NVARCHAR(MAX),
	Address NVARCHAR(MAX),
	City NVARCHAR(MAX),
	ZIPCode INT,
	Notes NVARCHAR(MAX)
)
CREATE TABLE RentalOrders     
(
	Id INT PRIMARY KEY,
	EmployeeId INT FOREIGN KEY REFERENCES Employees(Id),
	CustomerId INT FOREIGN KEY REFERENCES Customers(Id),
	CarId INT FOREIGN KEY REFERENCES Cars(Id),
	TankLevel INT,
	KilometrageStart INT,
	KilometrageEnd INT,
	TotalKilometrage INT,
	StartDate DATE,
	EndDate DATE,
	TotalDays INT,
	RateApplied DECIMAL(4,2),
	TaxRate DECIMAL(4,2),
	OrderStatus NVARCHAR(MAX),
	Notes NVARCHAR(MAX)
)

INSERT INTO Categories VALUES
(1, 'Cat1', NULL, NULL, NULL, NULL),
(2, 'Cat2', NULL, NULL, NULL, NULL),
(3, 'Cat3', NULL, NULL, NULL, NULL)

INSERT INTO Cars VALUES
(1, 1235, 'BMW', 'MOD', 2010, 1, 4, NULL, NULL),
(2, 1234, 'BMW', 'MOD', 2010, 2, 4, NULL, NULL),
(3, 1238, 'BMW', 'MOD', 2010, 3, 2, NULL, NULL)

INSERT INTO Employees VALUES
(1, 'FName1', 'LName1', 'Title1', 'Notes1'),
(2, 'FName2', 'LName2', 'Title2', 'Notes2'),
(3, 'FName3', 'LName3', 'Title3', 'Notes3')

INSERT INTO Customers VALUES
(1, '658964', 'FName1', 'Address1', 'City1', '8800', 'Note1'),
(2, '658234', 'FName2', 'Address2', 'City2', '8801', 'Note2'),
(3, '568964', 'FName3', 'Address3', 'City3', '8802', 'Note3')

INSERT INTO RentalOrders VALUES
(1, 2, 3, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), 
(2, 2, 3, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL), 
(3, 2, 3, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)



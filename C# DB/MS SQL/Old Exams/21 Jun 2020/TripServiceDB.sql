CREATE DATABASE TripService
USE TripService

--01. DDL
CREATE TABLE Cities 
(
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(20) NOT NULL,
	CountryCode NVARCHAR(2) NOT NULL
)
CREATE TABLE Hotels  
(
	Id INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(30) NOT NULL,
	CityId INT NOT NULL REFERENCES Cities(Id),
	EmployeeCount INT NOT NULL,
	BaseRate DECIMAL(18, 2) 
)
CREATE TABLE Rooms  
(
	Id INT PRIMARY KEY IDENTITY,
	Price DECIMAL(18, 2) NOT NULL,
	[Type] NVARCHAR(20) NOT NULL,
	Beds INT NOT NULL,
	HotelId INT NOT NULL REFERENCES Hotels(Id)
)
CREATE TABLE Trips  
(
	Id INT PRIMARY KEY IDENTITY,
	RoomId INT NOT NULL REFERENCES Rooms(Id),
	BookDate DATETIME NOT NULL,
	ArrivalDate DATETIME NOT NULL,
	ReturnDate DATETIME NOT NULL,
	CancelDate DATETIME,
	CONSTRAINT Book_ArrivalDate CHECK (BookDate < ArrivalDate),
	CONSTRAINT Arrival_ReturnDate CHECK (ArrivalDate < ReturnDate)
)
CREATE TABLE Accounts  
(
	Id INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(50) NOT NULL,
	MiddleName NVARCHAR(20),
	LastName NVARCHAR(50) NOT NULL,
	CityId INT NOT NULL REFERENCES Cities(Id),
	BirthDate DATETIME NOT NULL,
	Email VARCHAR(100) NOT NULL UNIQUE
)
CREATE TABLE AccountsTrips  
(
	AccountId INT NOT NULL REFERENCES Accounts(Id),
	TripId INT NOT NULL REFERENCES Trips(Id),
	Luggage INT NOT NULL CHECK(LEN(Luggage) >= 0)
	PRIMARY KEY(AccountId, TripId)
)
--02. Insert
INSERT INTO Accounts (FirstName, MiddleName, LastName, CityId, BirthDate, Email) VALUES 
	('John', 'Smith', 'Smith', 34 , '1975-07-21', 'j_smith@gmail.com'),
	('Gosho', NULL, 'Petrov', 11 , '1978-05-16', 'g_petrov@gmail.com'),
	('Ivan', 'Petrovich', 'Pavlov', 59 , '1849-09-26', 'i_pavlov@softuni.bg'),
	('Friedrich', 'Wilhelm', 'Nietzsche', 2 , '1844-10-15', 'f_nietzsche@softuni.bg')

INSERT INTO Trips (RoomId, BookDate, ArrivalDate, ReturnDate, CancelDate) VALUES
	( 101, '2015-04-12', '2015-04-14', '2015-04-20', '2015-02-02'),
	( 102, '2015-07-07', '2015-07-15', '2015-07-22', '2015-04-29'),
	( 103, '2013-07-17', '2013-07-23', '2013-07-24', NULL),
	( 104, '2012-03-17', '2012-03-31', '2012-04-01', '2012-01-10'),
	( 109, '2017-08-07', '2017-08-28', '2017-08-29', NULL)
--03. Update
UPDATE Rooms 
SET Price *= 1.14
WHERE HotelId IN (5, 7, 9)
--04. Delete
DELETE AccountsTrips
WHERE AccountId = 47
--05. EEE-Mails
SELECT 
	FirstName
	,LastName
	,FORMAT(BirthDate, 'MM-dd-yyyy')
	,c.Name as [Hometown]
	,Email
FROM Accounts AS a
JOIN Cities AS c ON a.CityId = c.Id
WHERE Email LIKE 'e%'
ORDER BY c.Name asc
--06. City Statistics
SELECT 
	C.Name
	,COUNT(H.Id) AS [Hotels]
FROM Hotels AS H
JOIN Cities AS C ON C.Id = H.CityId
GROUP BY C.Name
HAVING COUNT(H.Id) > 0
ORDER BY [Hotels] DESC, c.Name
--07. Longest and Shortest Trips
SELECT 
	a.Id
	,CONCAT(a.FirstName, ' ',a.LastName) AS [FullName]
	,MAX(q.TripLenght) as LongestTrip
	,MIN(q.TripLenght) as ShortestTrip
FROM Accounts AS a
JOIN (
	SELECT 
		A.Id
		,DATEDIFF(DAY, T.ArrivalDate, T.ReturnDate) AS [TripLenght]
	FROM Accounts AS A
	RIGHT JOIN AccountsTrips AS [AT] ON A.Id = [AT].AccountId
	RIGHT JOIN Trips AS T ON T.Id = [AT].TripId) AS q ON Q.Id = A.Id
WHERE MiddleName IS NULL
GROUP BY a.Id, CONCAT(a.FirstName, ' ',a.LastName)
ORDER BY LongestTrip DESC, ShortestTrip ASC
--08. Metropolis
SELECT TOP 10
	C.Id
	,C.Name
	,C.CountryCode
	,COUNT(*) AS [Accounts]
FROM Accounts AS A
JOIN Cities AS C ON A.CityId = C.Id
GROUP BY C.Id, C.Name, C.CountryCode
ORDER BY [Accounts] DESC
--09. Romantic Getaways
SELECT 
	A.Id
	,A.Email
	,C.Name
	,COUNT(T.Id) AS Trips
FROM Accounts AS A 
RIGHT JOIN AccountsTrips AS [AT] ON A.Id = [AT].AccountId
RIGHT JOIN Trips AS T ON T.Id = [AT].TripId
JOIN Cities AS C ON A.CityId = C.Id
JOIN Rooms AS R ON R.Id = T.RoomId
JOIN Hotels AS H ON H.Id = R.HotelId
WHERE H.CityId = A.CityId
GROUP BY A.Id, A.Email, C.Name
ORDER BY Trips DESC, A.Id
--10. GDPR Violation
SELECT 
	T.Id
	,CASE
		WHEN a.MiddleName IS NULL THEN CONCAT(FirstName, ' ', LastName)
		ELSE CONCAT(FirstName, ' ', MiddleName, ' ', LastName)
	END AS [Full Name]
	,C.Name AS [From]
	,CH.Name AS [To]
	,CASE 
		WHEN CancelDate IS NULL THEN CONCAT(Q.TripLenght, ' days')
		ELSE 'Canceled'
	END AS [Duration]
FROM Trips as t
JOIN AccountsTrips AS [AT] on T.Id = [AT].TripId
JOIN Accounts AS A ON A.Id = [AT].AccountId
JOIN Cities AS C ON C.Id = A.CityId
JOIN Rooms AS R ON R.Id = T.RoomId
JOIN Hotels AS H ON H.Id = R.HotelId
JOIN Cities AS Ch ON CH.Id = H.CityId
JOIN (
	SELECT 
		Id
		,DATEDIFF(DAY, ArrivalDate, ReturnDate) AS [TripLenght]
	FROM Trips) AS q ON Q.Id = T.Id
ORDER BY [Full Name], T.Id
--11. Available Room
CREATE OR ALTER FUNCTION udf_GetAvailableRoom(@HotelId INT, @Date DATETIME, @People INT)
RETURNS NVARCHAR(MAX)
AS 
BEGIN
	DECLARE @RoomId INT = (
		SELECT TOP(1) R.Id
		FROM Rooms AS R
		JOIN Hotels AS H ON R.HotelId = H.Id
		JOIN Trips AS T ON T.RoomId = R.Id
		WHERE 
			H.Id = @HotelId 
			AND @Date NOT BETWEEN T.ArrivalDate AND T.ReturnDate
			AND T.CancelDate IS NULL
			AND R.Beds >= @People
			AND YEAR(@Date) = YEAR(t.ArrivalDate)
		ORDER BY R.Price DESC) 

	IF @RoomId IS NULL
		RETURN 'No rooms available'
	

	DECLARE @TotalPrice DECIMAL(18, 2) = (
		SELECT (H.BaseRate + R.Price) * @People
		FROM Rooms AS R
		JOIN Hotels AS H ON R.HotelId = H.Id
		WHERE R.Id = @RoomId)

	DECLARE @Result NVARCHAR(MAX) = (
		SELECT CONCAT('Room ', @RoomId, ': ', r.Type, ' (', r.Beds, ' beds) - $', @TotalPrice)
		FROM Rooms as r
		WHERE R.Id = @RoomId)

	RETURN @Result
END

SELECT dbo.udf_GetAvailableRoom(94, '2015-07-26', 3)
--12. Switch Room
CREATE OR ALTER PROC usp_SwitchRoom(@TripId INT, @TargetRoomId INT)
AS
BEGIN
	DECLARE @TripHotelId INT = (
		SELECT r.HotelId
		FROM Trips AS T
		JOIN Rooms AS R ON T.RoomId = R.Id
		WHERE T.Id = @TripId)

	DECLARE @TargetRoomHotelId INT = (
		SELECT HotelId
		FROM Rooms 
		WHERE Id = @TargetRoomId)

	DECLARE @NeededBeds INT = (
		SELECT COUNT(*)
		FROM Trips AS T
		JOIN AccountsTrips AS [AT] ON [AT].TripId = T.Id
		WHERE T.Id = @TripId)

	DECLARE @TargetRoomBeds INT = (
		SELECT Beds
		FROM Rooms 
		WHERE Id = @TargetRoomId)
		IF @TripHotelId <> @TargetRoomHotelId
			SELECT 'Target room is in another hotel!'

		ELSE IF @NeededBeds > @TargetRoomBeds
			SELECT 'Not enough beds in target room!'

		ELSE 
			UPDATE Trips
			SET RoomId = @TargetRoomId
			WHERE Id = @TripId	
END

EXEC usp_SwitchRoom 10, 11
SELECT RoomId FROM Trips WHERE Id = 10

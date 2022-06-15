CREATE DATABASE Airport
USE Airport
--01. DDL
CREATE TABLE Passengers  
(
	Id INT PRIMARY KEY IDENTITY,
	FullName VARCHAR(100) UNIQUE NOT NULL,
	Email VARCHAR(50) UNIQUE NOT NULL
)
CREATE TABLE Pilots  
(
	Id INT PRIMARY KEY IDENTITY,
	FirstName VARCHAR(30) UNIQUE NOT NULL,
	LastName VARCHAR(30) UNIQUE NOT NULL,
	Age TINYINT NOT NULL CHECK(Age BETWEEN 21 AND 62),
	Rating FLOAT CHECK(Rating BETWEEN 0.0 AND 10.0)
)
CREATE TABLE AircraftTypes   
(
	Id INT PRIMARY KEY IDENTITY,
	TypeName VARCHAR(30) UNIQUE NOT NULL
)
CREATE TABLE Aircraft   
(
	Id INT PRIMARY KEY IDENTITY,
	Manufacturer VARCHAR(25) NOT NULL,
	Model VARCHAR(30) NOT NULL,
	[Year] INT NOT NULL,
	FlightHours INT,
	Condition CHAR(1) NOT NULL,
	TypeId INT NOT NULL REFERENCES AircraftTypes(Id)
)
CREATE TABLE PilotsAircraft   
(
	AircraftId INT NOT NULL REFERENCES Aircraft(Id),
	PilotId INT NOT NULL REFERENCES Pilots(Id),
	PRIMARY KEY(AircraftId, PilotId)
)
CREATE TABLE Airports   
(
	Id INT PRIMARY KEY IDENTITY,
	AirportName VARCHAR(70) UNIQUE NOT NULL,
	Country VARCHAR(100) UNIQUE NOT NULL
)
CREATE TABLE FlightDestinations    
(
	Id INT PRIMARY KEY IDENTITY,
	AirportId INT NOT NULL REFERENCES Airports(Id),
	[Start] DateTime NOT NULL,
	AircraftId INT NOT NULL REFERENCES Aircraft(Id),
	PassengerId INT NOT NULL REFERENCES Passengers(Id),
	TicketPrice DECIMAL(18, 2) NOT NULL DEFAULT 15
)
--02. Insert
DECLARE @PilotsId INT= 5
WHILE(@PilotsId <= 15)
BEGIN
	DECLARE @PilotsFirstName VARCHAR(MAX)= (SELECT FirstName FROM Pilots WHERE ID = @PilotsId)
	DECLARE @PilotsLastName VARCHAR(MAX)= (SELECT LastName FROM Pilots WHERE ID = @PilotsId)

	INSERT INTO Passengers(FullName, Email) VALUES
	(CONCAT(@PilotsFirstName, ' ', @PilotsLastName), CONCAT(@PilotsFirstName, @PilotsLastName, '@gmail.com'))
	set @PilotsId += 1
END
--03. Update
UPDATE Aircraft
SET Condition = 'A'
WHERE 
	(Condition LIKE 'C%' OR Condition LIKE 'B%')
	AND (FlightHours <= 100 OR FlightHours IS NULL)
	AND YEAR >= 2013
--04. Delete
DELETE Passengers
WHERE LEN(FullName) <= 10
--05. Aircraft
SELECT
	Manufacturer
	,Model
	,FlightHours
	,Condition
FROM Aircraft
ORDER BY FlightHours DESC
--06. Pilots and Aircraft
SELECT p.FirstName, P.LastName, A.Manufacturer, A.Model, A.FlightHours
FROM Pilots AS p
JOIN PilotsAircraft AS pa ON p.Id = pa.PilotId
JOIN Aircraft AS a ON a.Id = pa.AircraftId
WHERE FlightHours IS NOT NULL AND FlightHours < 304
ORDER BY FlightHours DESC, FirstName
--07. Top 20 Flight Destinations
SELECT 
	fd.Id as [DestinationId]
	,fd.[Start]
	,p.FullName
	,A.AirportName
	,fd.TicketPrice
FROM FlightDestinations AS fd
JOIN Passengers AS p ON fd.PassengerId = p.Id
JOIN Airports AS a ON a.Id = fd.AirportId
WHERE DAY(Start) % 2 = 0
ORDER BY TicketPrice DESC, AirportName
--08. Number of Flights for Each Aircraft
SELECT 
	a.Id
	,a.Manufacturer
	,a.FlightHours
	,q.FlightDestinationsCount
	,q.AvgPrice
FROM Aircraft AS a
JOIN (
	SELECT 
		a.Id
		,COUNT(fd.Id) AS [FlightDestinationsCount]
		,ROUND(AVG(fd.TicketPrice), 2) AS [AvgPrice]
	FROM Aircraft AS a
	JOIN FlightDestinations AS fd ON a.Id = fd.AircraftId
	GROUP BY a.Id) AS q ON q.Id = a.Id
WHERE q.FlightDestinationsCount >= 2
ORDER BY q.FlightDestinationsCount desc, a.Id
--09. Regular Passengers
SELECT 
	p.FullName
	,COUNT(a.Id) as [CountOfAircraft]
	,SUM(FD.TicketPrice) AS [TotalPayed]
FROM FlightDestinations AS fd
JOIN Aircraft AS a ON a.Id = fd.AircraftId
JOIN Passengers AS p ON p.Id = fd.PassengerId
WHERE p.FullName LIKE '_a%' 
GROUP BY p.FullName
HAVING COUNT(a.Id) > 1
ORDER BY p.FullName
--10. Full Info for Flight Destinations
SELECT 
	a.AirportName
	,fd.Start as [DayTime]
	,fd.TicketPrice
	,p.FullName
	,ac.Manufacturer
	,ac.Model
FROM FlightDestinations AS fd
JOIN Airports AS a ON a.Id = fd.AirportId
JOIN Aircraft AS ac ON ac.Id = fd.AircraftId
JOIN Passengers as p ON p.Id = fd.PassengerId
WHERE 
	DATEPART(HOUR, [Start]) BETWEEN 6 AND 20
	AND TicketPrice > 2500
ORDER BY ac.Model
--11. Find all Destinations by Email Address
CREATE FUNCTION udf_FlightDestinationsByEmail(@email VARCHAR(50)) 
RETURNS INT
AS 
BEGIN
	DECLARE @Result INT = (
		SELECT COUNT(*)
		FROM Passengers as P
		JOIN FlightDestinations as fd on fd.PassengerId = p.Id
		WHERE p.Email = @email)
	RETURN @Result
END
--12. Full Info for Airports
CREATE PROC usp_SearchByAirportName(@airportName VARCHAR(70))
AS
BEGIN
	SELECT 
		a.AirportName
		,p.FullName
		,(CASE 
			WHEN TicketPrice <= 400 THEN 'Low'
			WHEN TicketPrice <= 1500 THEN 'Medium'
			ELSE 'High'
		END) AS [LevelOfTickerPrice]
		,ac.Manufacturer
		,AC.Condition
		,act.TypeName
	FROM Airports AS a
	JOIN FlightDestinations AS fd ON a.Id = fd.AirportId
	JOIN Passengers AS p ON p.Id = fd.PassengerId
	JOIN Aircraft AS ac ON ac.Id = fd.AircraftId
	JOIN AircraftTypes AS act ON act.Id = ac.TypeId
	WHERE a.AirportName = @airportName
	ORDER BY ac.Manufacturer, p.FullName
END
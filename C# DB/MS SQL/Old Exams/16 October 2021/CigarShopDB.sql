CREATE DATABASE CigarShop
USE CigarShop
--01. DDL
CREATE TABLE Sizes(
	Id INT IDENTITY PRIMARY KEY,
	[Length] INT NOT NULL CHECK([Length] BETWEEN 10 AND 25),
	RingRange DECIMAL(18,2) NOT NULL CHECK(RingRange BETWEEN 1.5 AND 7.5)
)
CREATE TABLE Tastes(
	Id INT IDENTITY PRIMARY KEY,
	TasteType VARCHAR(20) NOT NULL,
	TasteStrength VARCHAR(15) NOT NULL,
	ImageURL NVARCHAR(100) NOT NULL,
)
CREATE TABLE Brands(
	Id INT IDENTITY PRIMARY KEY,
	BrandName VARCHAR(30) UNIQUE NOT NULL,
	BrandDescription VARCHAR(MAX)
)
CREATE TABLE Cigars(
	Id INT IDENTITY PRIMARY KEY,
	CigarName VARCHAR(80) NOT NULL,
	BrandId INT REFERENCES Brands(Id) NOT NULL,
	TastId INT REFERENCES Tastes(Id) NOT NULL,
	SizeId INT REFERENCES Sizes(Id) NOT NULL,
	PriceForSingleCigar MONEY NOT NULL,
	ImageURL NVARCHAR(100) NOT NULL
)
CREATE TABLE Addresses(
	Id INT IDENTITY PRIMARY KEY,
	Town VARCHAR(30) NOT NULL,
	Country NVARCHAR(30) NOT NULL,
	Streat NVARCHAR(100) NOT NULL,
	ZIP VARCHAR(20) NOT NULL
)
CREATE TABLE Clients(
	Id INT IDENTITY PRIMARY KEY,
	FirstName NVARCHAR(30) NOT NULL,
	LastName NVARCHAR(30) NOT NULL,
	Email NVARCHAR(50) NOT NULL,
	AddressId INT REFERENCES Addresses(Id) NOT NULL
)
CREATE TABLE ClientsCigars(
	ClientId INT REFERENCES Clients(Id) NOT NULL,
	CigarId INT REFERENCES Cigars(Id) NOT NULL,
	PRIMARY KEY(ClientId, CigarId)
)
--02. Insert
INSERT INTO Cigars (CigarName, BrandId, TastId, SizeId, PriceForSingleCigar, ImageURL) VALUES
('COHIBA ROBUSTO', 9, 1, 5, 15.50,'cohiba-robusto-stick_18.jpg'),
('COHIBA SIGLO I', 9, 1, 10, 410.00,'cohiba-siglo-i-stick_12.jpg'),
('HOYO DE MONTERREY LE HOYO DU MAIRE', 14, 5, 11, 7.50,'hoyo-du-maire-stick_17.jpg'),
('HOYO DE MONTERREY LE HOYO DE SAN JUAN', 14, 4, 15, 32.00,'hoyo-de-san-juan-stick_20.jpg'),
('TRINIDAD COLONIALES', 2, 3, 8, 85.21,'trinidad-coloniales-stick_30.jpg')

INSERT INTO Addresses (Town, Country, Streat, ZIP) VALUES
('Sofia','Bulgaria','18 Bul. Vasil levski','1000'),
('Athens','Greece','4342 McDonald Avenue','10435'),
('Zagreb','Croatia','4333 Lauren Drive','10000')
--03. Update
UPDATE Cigars
SET PriceForSingleCigar *= 1.2
FROM Cigars as c
JOIN Tastes as t ON t.Id = c.TastId
WHERE t.TasteType LIKE '%Spicy%'
UPDATE Brands
SET BrandDescription = 'New description'
WHERE BrandDescription IS NULL
--04. Delete
DELETE FROM Clients
WHERE AddressId IN 
	(SELECT Id 
	FROM Addresses 
	WHERE LEFT(Country, 1) = 'C')

DELETE FROM Addresses
WHERE LEFT(Country, 1) = 'C'
--05. Cigars by Price
SELECT 
	CigarName
	,PriceForSingleCigar
	,ImageURL
FROM Cigars
ORDER BY PriceForSingleCigar, CigarName DESC
--06. Cigars by Taste
SELECT 
	c.Id
	,CigarName
	,PriceForSingleCigar
	,t.TasteType
	,t.TasteStrength
FROM Cigars AS c
JOIN Tastes AS t ON c.TastId = t.Id
WHERE t.TasteType IN ('Earthy', 'Woody')
ORDER BY PriceForSingleCigar DESC
--07. Clients without Cigars
SELECT 
	Id
	,CONCAT(FirstName, ' ', LastName) as [ClientName]
	,Email
FROM Clients 
WHERE Id NOT IN (SELECT ClientId FROM ClientsCigars)
ORDER BY ClientName
--08. First 5 Cigars
SELECT top 5
	CigarName
	, PriceForSingleCigar
	, ImageURL
FROM Cigars as c
JOIN Sizes as s on c.SizeId = s.Id
WHERE s.Length >= 12 
	AND (c.CigarName LIKE '%ci%'
	OR c.PriceForSingleCigar > 50)
	AND s.RingRange > 2.55
ORDER BY c.CigarName, c.PriceForSingleCigar desc
--09. Clients with ZIP Codes
SELECT 
	CONCAT(cl.FirstName, ' ', cl.LastName) AS FullName,
	a.Country,
	a.ZIP,
	CONCAT('$', MAX(c.PriceForSingleCigar)) AS CigarPrice
FROM Clients AS cl
JOIN ClientsCigars AS cc ON cl.Id = cc.ClientId
JOIN Cigars AS c ON cc.CigarId = c.Id
JOIN Addresses AS a ON cl.AddressId = a.Id
WHERE a.ZIP NOT LIKE '%[^0-9.]%'
GROUP BY FirstName, LastName, a.Id, a.Country, a.ZIP
ORDER BY FullName
--10. Cigars by Size
SELECT
	cl.LastName
	,AVG(s.[Length]) as [CiagrLength]
	,CEILING(AVG(s.RingRange)) as [CiagrRingRange]
FROM Cigars as c
JOIN Sizes as s on c.SizeId = s.Id
JOIN ClientsCigars AS cc ON C.Id = cc.CigarId
JOIN Clients AS cl ON cl.Id = cc.ClientId
WHERE cl.Id in (SELECT ClientId FROM ClientsCigars)
GROUP BY cl.LastName
ORDER BY [CiagrLength] DESC
--11. Client with Cigars
CREATE FUNCTION udf_ClientWithCigars(@name NVARCHAR(MAX))
RETURNS INT
AS 
BEGIN
	DECLARE @Result INT = (
		SELECT COUNT(*)
		FROM ClientsCigars as cc
		JOIN Clients as c on cc.ClientId = c.Id
		WHERE FirstName = @name)
	RETURN @Result
END
--12. Search for Cigar with Specific Taste
CREATE PROC usp_SearchByTaste(@taste VARCHAR(MAX))
AS
BEGIN
	SELECT 
		c.CigarName
		,CONCAT('$', c.PriceForSingleCigar) AS [Price]
		,t.TasteType
		,b.BrandName
		,CONCAT(s.[Length], ' cm') as CigarLength
		,CONCAT(s.RingRange, ' cm') AS CigarRingRange
	FROM Cigars AS c
	JOIN Tastes AS t ON c.TastId = t.Id
	JOIN Sizes AS s ON s.Id = c.SizeId
	JOIN Brands AS b ON c.BrandId = b.Id
	WHERE t.TasteType = @taste
	ORDER BY s.Length, s.RingRange desc
END
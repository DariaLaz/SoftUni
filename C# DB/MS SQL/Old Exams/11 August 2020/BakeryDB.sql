CREATE DATABASE Bakery
USE Bakery

--01. DDL
CREATE TABLE Countries  
(
	Id INT PRIMARY KEY IDENTITY,
	Name NVARCHAR(50) UNIQUE
)
CREATE TABLE Customers  
(
	Id INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(25),
	LastName NVARCHAR(25),
	Gender CHAR(1) CHECK(Gender = 'M' OR Gender = 'F'),
	Age INT,
	PhoneNumber VARCHAR(10) CHECK(LEN(PhoneNumber) = 10),
	CountryId INT REFERENCES Countries(Id)
)
CREATE TABLE Products  
(
	Id INT PRIMARY KEY IDENTITY,
	Name NVARCHAR(25),
	Description NVARCHAR(250),
	Recipe NVARCHAR(MAX),
	Price MONEY CHECK(Price >= 0)
)
CREATE TABLE Feedbacks  
(
	Id INT PRIMARY KEY IDENTITY,
	Description nVARCHAR(255),
	Rate DECIMAL(18, 2) CHECK(Rate BETWEEN 0 AND 10),
	ProductId INT REFERENCES Products(Id),
	CustomerId INT REFERENCES Customers(Id)
)
CREATE TABLE Distributors  
(
	Id INT PRIMARY KEY IDENTITY,
	Name NVARCHAR(25) UNIQUE,
	AddressText NVARCHAR(30),
	Summary NVARCHAR(200),
	CountryId INT REFERENCES Countries(Id)
)
CREATE TABLE Ingredients  
(
	Id INT PRIMARY KEY IDENTITY,
	Name NVARCHAR(30),
	Description NVARCHAR(200),
	OriginCountryId INT REFERENCES Countries(Id),
	DistributorId INT REFERENCES Distributors(Id)
)
CREATE TABLE ProductsIngredients  
(
	ProductId INT NOT NULL REFERENCES Products(Id),
	IngredientId INT NOT NULL REFERENCES Ingredients(Id),
	PRIMARY KEY(ProductId, IngredientId)
)
--02. Insert
INSERT INTO Distributors (Name, CountryId, AddressText, Summary) VALUES
('Deloitte & Touche', 2,'6 Arch St #9757', 'Customizable neutral traveling'),
('Congress Title', 13,'58 Hancock St', 'Customer loyalty'),
('Kitchen People', 1,'3 E 31st St #77', 'Triple-buffered stable delivery'),
('General Color Co Inc', 21,'6185 Bohn St #72', 'Focus group'),
('Beck Corporation', 23,'21 E 64th Ave', 'Quality-focused 4th generation hardware')

INSERT INTO Customers (FirstName, LastName, Age, Gender, PhoneNumber, CountryId) VALUES
('Francoise', 'Rautenstrauch', 15, 'M', '0195698399', 5),
('Kendra', 'Loud', 22, 'F', '0063631526', 11),
('Lourdes', 'Bauswell', 50, 'M', '0139037043', 8),
('Hannah', 'Edmison', 18, 'F', '0043343686', 1),
('Tom', 'Loeza', 31, 'M', '0144876096', 23),
('Queenie', 'Kramarczyk', 30, 'F', '0064215793', 29),
('Hiu', 'Portaro', 25, 'M', '0068277755', 16),
('Josefa', 'Opitz', 43, 'F', '0197887645', 17)
--03. Update
UPDATE Ingredients
SET DistributorId = 35
WHERE Name in ('Bay Leaf', 'Paprika', 'Poppy')

UPDATE Ingredients
SET OriginCountryId = 14
WHERE OriginCountryId = 8
--04. Delete
DELETE Feedbacks
WHERE CustomerId = 14 OR ProductId = 5
--05. Products By Price
SELECT 
	Name
	,Price
	,Description
FROM Products
ORDER BY Price DESC, Name
--06. Negative Feedback
SELECT 
	F.ProductId
	,F.Rate
	,F.Description
	,F.CustomerId
	,C.Age
	,C.Gender
FROM Feedbacks AS f
JOIN Customers AS c ON f.CustomerId = c.Id
WHERE f.Rate < 5
ORDER BY ProductId DESC, Rate
--07. Customers without Feedback
SELECT 
	CONCAT(FirstName, ' ', LastName) AS [CustomerName]
	,PhoneNumber
	,Gender
FROM Customers 
WHERE Id NOT IN (SELECT CustomerId FROM Feedbacks)
--08. Customers by Criteria
SELECT 
	FirstName
	,Age
	,PhoneNumber
FROM Customers
WHERE 
	(Age >= 21 AND FirstName LIKE '%an%') 
	OR (PhoneNumber LIKE '%38' AND CountryId <> 31)
ORDER BY FirstName, Age DESC
--09. Middle Range Distributors
SELECT 
	d.Name as [DistributorName]
	,i.Name as [IngredientName]
	,p.Name as [ProductName]
	,q.AverageRate
FROM Products as p
JOIN ProductsIngredients AS [pi] ON p.Id = [pi].ProductId
JOIN Ingredients AS i ON I.Id = [PI].IngredientId
JOIN Distributors AS d ON d.Id = i.DistributorId
JOIN (SELECT 
		p.Id as [Id]
		,AVG(f.Rate) as [AverageRate]
	FROM Feedbacks AS f
	JOIN Products AS p ON p.Id = f.ProductId
	GROUP BY P.Id) AS q ON q.Id = p.Id
WHERE Q.AverageRate BETWEEN 5 AND 8
order by D.Name, I.Name, P.Name
--10. Country Representative
SELECT q.CountryName, q.DisributorName
FROM(
	SELECT
	c.Name as CountryName,
	d.Name as DisributorName,
	DENSE_RANK() OVER
	(
		PARTITION BY c.Name
		ORDER BY COUNT(i.DistributorId) DESC
	) as [Rank]
FROM Countries AS c
JOIN Distributors AS d ON d.CountryId=c.Id
JOIN Ingredients AS i ON d.Id=i.DistributorId
GROUP BY c.Name,d.Name) as Q
WHERE q.Rank = 1
ORDER BY q.CountryName, q.DisributorName
--11. Customers With Countries
CREATE view v_UserWithCountries
AS 
	SELECT 
		CONCAT(FirstName, ' ', LastName) AS [CustomerName]
		,Age
		,Gender
		,c.Name
	FROM Countries AS C
	JOIN Customers AS CU ON C.Id = CU.CountryId
--12. Delete Products

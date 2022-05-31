--Problem 13.	Movies Database
CREATE DATABASE Movies
USE Movies
CREATE TABLE Directors
(
	Id INT PRIMARY KEY,
	DirectorName NVARCHAR(MAX) NOT NULL,
	Notes NVARCHAR(MAX)
)
CREATE TABLE Genres
(
	Id INT PRIMARY KEY,
	GenreName NVARCHAR(MAX) NOT NULL,
	Notes NVARCHAR(MAX)
)
CREATE TABLE Categories
(
	Id INT PRIMARY KEY,
	CategoryName NVARCHAR(MAX) NOT NULL,
	Notes NVARCHAR(MAX)
)
CREATE TABLE Movies
(
	Id INT PRIMARY KEY,
	Title NVARCHAR(MAX) NOT NULL,
	DirectorId INT FOREIGN KEY REFERENCES Directors(Id),
	CopyrightYear INT NOT NULL,
	Length INT,
	GenreId INT FOREIGN KEY REFERENCES Genres(Id),
	CategoryId INT FOREIGN KEY REFERENCES Categories(Id),
	Rating DECIMAL(4,2),
	Notes NVARCHAR(MAX)
)

INSERT INTO Directors VALUES
(1, 'Person1', NULL),
(2, 'Person2', NULL),
(3, 'Person3', NULL),
(4, 'Person4', NULL),
(5, 'Person5', NULL)
INSERT INTO Genres VALUES
(1, 'Person1', NULL),
(2, 'Person2', NULL),
(3, 'Person3', NULL),
(4, 'Person4', NULL),
(5, 'Person5', NULL)
INSERT INTO Categories VALUES
(1, 'Category1', NULL),
(2, 'Category2', NULL),
(3, 'Category3', NULL),
(4, 'Category4', NULL),
(5, 'Category5', NULL)
INSERT INTO Movies VALUES
(1, 'Title1', 1, '2003', NULL, 1, 5, '3.5', 'note1'),
(2, 'Title2', 2, '2003', NULL, 2, 4, '3.5', 'note2'),
(3, 'Title3', 3, '2003', NULL, 3, 3, '3.5', 'note3'),
(4, 'Title4', 4, '2003', NULL, 4, 2, '3.5', 'note4'),
(5, 'Title5', 5, '2003', NULL, 5, 1, '3.5', 'note5')

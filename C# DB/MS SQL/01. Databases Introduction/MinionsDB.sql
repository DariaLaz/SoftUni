--Problem 1.	Create Database
CREATE DATABASE Minions
USE Minions
--Problem 2.	Create Tables
CREATE TABLE Minions
(
  Id INT NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Age INT
)
CREATE TABLE Towns
(
  Id INT NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL
)
--Problem 3.	Alter Minions Table
ALTER TABLE Minions
ADD TownId INT FOREIGN KEY REFERENCES Towns(Id)
--Problem 4.	Insert Records in Both Tables
INSERT INTO Towns VALUES
(1,'Sofia'),
(2,'Plovdiv'),
(3,'Varna')
INSERT INTO Minions VALUES
(1,'Kevin',22,1),
(2,'Bob',15,3),
(3,'Steward',NULL,2)
--Problem 5.	Truncate Table Minions
TRUNCATE TABLE Minions
--Problem 6.	Drop All Tables
DROP TABLE Minions
DROP TABLE Towns
--Problem 7.	Create Table People
CREATE TABLE People
(
  Id INT NOT NULL PRIMARY KEY,
  Name VARCHAR(200) NOT NULL,
  Picture VARBINARY(MAX),
  Height DECIMAL(3,2),
  Weight DECIMAL(5,2),
  Gender NCHAR(1) NOT NULL,
  Birthdate DATE NOT NULL,
  Biography NVARCHAR(MAX)
)
INSERT INTO People VALUES
(1, 'Person1', NULL, 1.50, 50, 'f', '2000-01-01', NULL),
(2, 'Person2', NULL, 1.73, 80, 'm', '2000-01-01', NULL),
(3, 'Person3', NULL, 1.45, 47, 'f', '2000-01-01', NULL),
(4, 'Person4', NULL, 2.05, 125, 'm', '2000-01-01', NULL),
(5, 'Person5', NULL, 1.75, 97, 'm', '2000-01-01', NULL)
--Problem 8.	Create Table Users
CREATE TABLE Users 
(
  Id INT PRIMARY KEY,
  Username VARCHAR(30) NOT NULL,
  Password VARCHAR(26) NOT NULL,
  ProfilePicture VARBINARY(MAX),
  LastLoginTime TIME,
  IsDeleted BIT
)
INSERT INTO Users VALUES
(1, 'Person1', '123456', NULL, NULL, NULL),
(2, 'Person2', '123456', NULL, NULL, NULL),
(3, 'Person3', '123456', NULL, NULL, NULL),
(4, 'Person4', '123456', NULL, NULL, NULL),
(5, 'Person5', '123456', NULL, NULL, NULL)
--Problem 9.	Change Primary Key
ALTER TABLE Users
DROP CONSTRAINT PK__Users__3214EC07E4D99BF6
ALTER TABLE Users
ADD CONSTRAINT PK_IdUsername PRIMARY KEY(Id, Username)
--Problem 10.	Add Check Constraint
ALTER TABLE Users
ADD CHECK(LEN(Password) >= 5)
--Problem 11.	Set Default Value of a Field
ALTER TABLE Users
ADD CONSTRAINT df_LastLoginTime
DEFAULT GETDATE() FOR LastLoginTime
--Problem 12.	Set Unique Field
ALTER TABLE Users
DROP CONSTRAINT PK_IdUsername
ALTER TABLE Users
ADD PRIMARY KEY(Id)
ALTER TABLE Users
ADD CHECK(LEN(Username) >= 3)

CREATE DATABASE Bitbucket
USE Bitbucket
--01. DDL
CREATE TABLE Users 
(
	Id INT PRIMARY KEY IDENTITY,
	Username VARCHAR(30) NOT NULL,
	Password VARCHAR(30) NOT NULL,
	Email VARCHAR(50) NOT NULL
)
CREATE TABLE Repositories 
(
	Id INT PRIMARY KEY IDENTITY,
	Name VARCHAR(50) NOT NULL
)
CREATE TABLE RepositoriesContributors 
(
	RepositoryId INT NOT NULL REFERENCES Repositories(Id),
	ContributorId INT NOT NULL REFERENCES Users(Id),
	PRIMARY KEY(RepositoryId, ContributorId)
)
CREATE TABLE Issues 
(
	Id INT PRIMARY KEY IDENTITY,
	Title VARCHAR(255) NOT NULL,
	IssueStatus VARCHAR(6) NOT NULL,
	RepositoryId INT NOT NULL REFERENCES Repositories(Id),
	AssigneeId INT NOT NULL REFERENCES Users(Id)
)
CREATE TABLE Commits 
(
	Id INT PRIMARY KEY IDENTITY,
	Message VARCHAR(255) NOT NULL,
	IssueId INT REFERENCES Issues(Id),
	RepositoryId INT NOT NULL REFERENCES Repositories(Id),
	ContributorId INT NOT NULL REFERENCES Users(Id)
)
CREATE TABLE Files 
(
	Id INT PRIMARY KEY IDENTITY,
	Name VARCHAR(100) NOT NULL,
	Size DECIMAL(18, 2) NOT NULL,
	ParentId INT REFERENCES Files(Id),
	CommitId INT NOT NULL REFERENCES Commits(Id)
)
--02. Insert
INSERT INTO Files(Name, Size, ParentId, CommitId)
VALUES
('Trade.idk', 2598.0, 1, 1),
('menu.net', 9238.31, 2, 2),
('Administrate.soshy', 1246.93, 3, 3),
('Controller.php', 7353.15, 4, 4),
('Find.java', 9957.86, 5, 5),
('Controller.json', 14034.87, 3, 6),
('Operate.xix', 7662.92, 7, 7)

INSERT INTO Issues(Title, IssueStatus, RepositoryId, AssigneeId)
VALUES
('Critical Problem with HomeController.cs file', 'open', 1, 4),
('Typo fix in Judge.html', 'open', 4, 3),
('Implement documentation for UsersService.cs', 'closed', 8, 2),
('Unreachable code in Index.cs', 'open', 9, 8)
--03. Update
UPDATE Issues
SET IssueStatus = 'closed'
WHERE AssigneeId = 6
--04. Delete
DELETE RepositoriesContributors
WHERE RepositoryId = 3

DELETE Issues
WHERE RepositoryId = 3
--05. Commits
SELECT 
	Id
	,Message
	,RepositoryId
	,ContributorId
FROM Commits
ORDER BY Id, Message, RepositoryId, ContributorId
--06. Front-end
SELECT 
	Id
	,Name
	,Size
FROM Files
WHERE Size > 1000
	AND Name LIKE '%html%'
ORDER BY Size DESC, Id, Name
--07. Issue Assignment
SELECT 
	i.Id
	,CONCAT(u.Username, ' : ', i.Title)
FROM Issues AS i
JOIN Users AS u ON i.AssigneeId = u.Id
ORDER BY i.Id desc, i.AssigneeId
--08. Single Files
SELECT 
	Id
	,Name
	,CONCAT(Size, 'KB') as Size
FROM Files
WHERE Id NOT IN (SELECT ParentId FROM Files where ParentId is not null)
ORDER BY Id, Name, Size desc
--09. Commits in Repositories
SELECT TOP(5)  
	r.Id 
	,r.Name
	,COUNT (r.Name) AS Commits
FROM Repositories as r
JOIN Commits as c ON r.Id = c.RepositoryId
JOIN RepositoriesContributors AS RC ON RC.RepositoryId = R.Id
GROUP BY r.Id ,r.Name
ORDER BY Commits DESC , r.Id , r.Name
--10. Average Size
SELECT 
	u.Username,
	AVG(f.Size) AS [Size]
FROM Users AS u
JOIN Commits AS C on u.Id = c.ContributorId
JOIN Files AS f ON f.CommitId = c.Id
WHERE u.Id IN (SELECT ContributorId FROM Commits)
GROUP BY u.Username
ORDER BY [Size] DESC, u.Username
--11. All User Commits
CREATE FUNCTION udf_AllUserCommits(@name VARCHAR(MAX))
RETURNS INT
AS 
BEGIN
	DECLARE @Result INT = (
		SELECT COUNT(*)
		FROM Users as u 
		JOIN Commits as c on c.ContributorId = u.Id
		WHERE u.Username = @name)
	RETURN @Result
END
--12. Search for Files
CREATE PROC usp_SearchForFiles(@fileExtension VARCHAR(MAX))
AS
BEGIN
	DECLARE @pattern varchar(100) = CONCAT('%', @fileExtension)
	SELECT 
		Id
		,Name
		,CONCAT(Size, 'KB') AS Size
	FROM Files 
	WHERE Name LIKE @pattern
	ORDER BY Id, Name, Size desc
END
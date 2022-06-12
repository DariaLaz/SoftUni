USE Bank
--9. Find Full Name
CREATE PROC usp_GetHoldersFullName 
AS
BEGIN
	SELECT CONCAT(FirstName, ' ', LastName) AS [Full Name]
	FROM AccountHolders
END
--10. People with Balance Higher Than
CREATE PROC usp_GetHoldersWithBalanceHigherThan (@MinBalance MONEY)
AS
BEGIN
	SELECT 
		ah.FirstName as [First Name]
		,ah.LastName as [Last Name]
	FROM Accounts AS a
	JOIN AccountHolders AS ah ON a.AccountHolderId = ah.Id
	GROUP BY a.AccountHolderId, ah.FirstName, ah.LastName
	HAVING SUM(A.Balance) > @MinBalance
	ORDER BY [First Name], [Last Name]
END
--11. Future Value Function
CREATE OR ALTER FUNCTION ufn_CalculateFutureValue(@Sum DECIMAL(18,4), @YearlyInterestRate FLOAT, @NumberOfYears INT)
RETURNS DECIMAL(18,4)
AS
BEGIN
	RETURN FORMAT(@Sum * (POWER((1 + @YearlyInterestRate), @NumberOfYears)), '0.0000')
END
--12. Calculating Interest
CREATE PROC usp_CalculateFutureValueForAccount(@AccountId INT, @InterestRate FLOAT)
AS
BEGIN
	SELECT 
		a.Id
		,ah.FirstName
		,ah.LastName
		,a.Balance
		,dbo.ufn_CalculateFutureValue(a.Balance, @InterestRate, 5) as [Balance in 5 years]
	FROM Accounts AS a
	JOIN AccountHolders AS ah ON a.AccountHolderId = ah.Id
	WHERE a.Id = @accountId
END
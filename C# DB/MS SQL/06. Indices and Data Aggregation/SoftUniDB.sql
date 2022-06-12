USE SoftUni
--13. Departments Total Salaries
SELECT 
	DepartmentID
	,SUM(Salary)
FROM Employees
GROUP BY DepartmentID
--14. Employees Minimum Salaries
SELECT 
	DepartmentID
	,MIN(Salary)
FROM Employees
WHERE DepartmentID IN (2, 5, 7) AND HireDate > '2000-1-1'
GROUP BY DepartmentID
--15. Employees Average Salaries
SELECT * 
INTO [New]
FROM Employees
WHERE Salary > 30000 

DELETE FROM New
WHERE ManagerID = 42

UPDATE New
SET Salary += + 5000
WHERE DepartmentID = 1

SELECT DepartmentID, AVG(Salary)
FROM New
GROUP BY DepartmentID
--16. Employees Maximum Salaries
SELECT 
	DepartmentID
	,MAX(Salary)
FROM Employees
GROUP BY DepartmentID
HAVING MAX(Salary) NOT BETWEEN 30000 AND 70000
--17. Employees Count Salaries
SELECT 
	COUNT(*) AS [Count]
FROM Employees
WHERE ManagerID IS NULL
--18. *3rd Highest Salary
SELECT DISTINCT 
	DepartmentID
	,Salary
FROM (SELECT 
		DepartmentID
		,Salary
		,DENSE_RANK() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS [Rank]
	FROM Employees) AS query
WHERE query.Rank = 3
--19. **Salary Challenge
SELECT TOP(10) e.FirstName, e.LastName, e.DepartmentID
	FROM (SELECT 
			DepartmentID
			,AVG(Salary) as avgSalary
		FROM Employees
		GROUP BY DepartmentID) AS q
	JOIN Employees AS e ON q.DepartmentID = e.DepartmentID
	WHERE e.Salary > q.avgSalary
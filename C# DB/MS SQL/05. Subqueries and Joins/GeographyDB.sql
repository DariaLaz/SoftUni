USE Geography

--12. Highest Peaks in Bulgaria
SELECT 
	mc.CountryCode
	,m.MountainRange
	,p.PeakName
	,p.Elevation
FROM Peaks as p
JOIN Mountains AS m ON p.MountainId = m.Id
JOIN MountainsCountries AS mc ON mc.MountainId = m.Id
WHERE p.Elevation > 2835 AND mc.CountryCode = 'BG'
ORDER BY p.Elevation DESC
--13. Count Mountain Ranges
SELECT 
	mc.CountryCode
	,COUNT(m.MountainRange)
FROM Mountains AS m 
JOIN MountainsCountries AS mc ON mc.MountainId = m.Id
WHERE mc.CountryCode IN ('BG', 'RU', 'US')
GROUP BY mc.CountryCode
--14. Countries with Rivers
SELECT TOP(5)
	C.CountryName
	,R.RiverName
FROM Countries AS c
LEFT JOIN CountriesRivers AS cr ON c.CountryCode = cr.CountryCode
LEFT JOIN Rivers AS r ON r.Id = cr.RiverId
WHERE c.ContinentCode = 'AF'
ORDER BY c.CountryName ASC
--15. *Continents and Currencies

--16. Countries Without Any Mountains
SELECT COUNT(c.CountryCode) AS [Count]
FROM Countries AS c
LEFT JOIN MountainsCountries mc ON c.CountryCode = mc.CountryCode
WHERE mc.MountainId IS NULL 
--17. Highest Peak and Longest River by Country
SELECT TOP(5)
	c.CountryName
	,MAX(p.Elevation) AS HighestPeakElevation
	,MAX(r.Length) AS LongestRiverLength
FROM Countries AS c
JOIN MountainsCountries AS mc ON mc.CountryCode = c.CountryCode
JOIN Mountains AS m ON m.Id = mc.MountainId
JOIN Peaks AS p ON p.MountainId = m.Id
JOIN CountriesRivers AS cr ON cr.CountryCode = c.CountryCode
JOIN Rivers AS r ON cr.RiverId = r.Id
GROUP BY c.CountryName
ORDER BY HighestPeakElevation DESC, LongestRiverLength DESC, c.CountryName



CREATE DATABASE Company;
GO

USE Company;
GO




CREATE TABLE Countries (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL
);


CREATE TABLE Cities (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL,
    CountryId INT NOT NULL,
    FOREIGN KEY (CountryId) REFERENCES Countries(Id)
);


CREATE TABLE Employees (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL,
    Surname NVARCHAR(100) NOT NULL,
    Age INT,
    Salary DECIMAL(10,2),
    Position NVARCHAR(100),
    CityId INT NOT NULL,
    IsDeleted BIT DEFAULT 0,
    FOREIGN KEY (CityId) REFERENCES Cities(Id)
);



SELECT e.Name, e.Surname, c.Name AS City, co.Name AS Country
FROM Employees e
JOIN Cities c ON e.CityId = c.Id
JOIN Countries co ON c.CountryId = co.Id;

SELECT e.Name, e.Surname, co.Name AS Country
FROM Employees e
JOIN Cities c ON e.CityId = c.Id
JOIN Countries co ON c.CountryId = co.Id
WHERE e.Salary > 2000;

SELECT c.Name AS City, co.Name AS Country
FROM Cities c
JOIN Countries co ON c.CountryId = co.Id;

SELECT e.Name, e.Surname, e.Age, e.Salary, e.Position,
       c.Name AS City, co.Name AS Country
FROM Employees e
JOIN Cities c ON e.CityId = c.Id
JOIN Countries co ON c.CountryId = co.Id
WHERE e.Position = 'Reseption';

SELECT e.Name, e.Surname, c.Name AS City, co.Name AS Country
FROM Employees e
JOIN Cities c ON e.CityId = c.Id
JOIN Countries co ON c.CountryId = co.Id
WHERE e.IsDeleted = 1;

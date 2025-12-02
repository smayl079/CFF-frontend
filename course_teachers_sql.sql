
CREATE DATABASE Course;


USE Course;

CREATE TABLE Teachers (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50),
    Surname VARCHAR(50),
    Email VARCHAR(100),
    Age INT,
    Salary DECIMAL(10,2)
);

SELECT * FROM Teachers
WHERE Age > (SELECT AVG(Age) FROM Teachers);

SELECT * FROM Teachers
WHERE Salary BETWEEN 1000 AND 3000;

SELECT Name, Surname FROM Teachers
WHERE Email LIKE '%mail.ru';

SELECT * FROM Teachers
WHERE Name LIKE 'C%';

DROP DATABASE IF EXISTS trackerDB;

CREATE DATABASE trackerDB;

USE trackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
);


CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(9,2) NOT NULL, 
    department_id INT NOT NULL,
    PRIMARY KEY (id),

 );

 CREATE TABLE employee(
     id INT NOT NULL AUTO_INCREMENT, 
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT ,
     manager_id INT,
     PRIMARY KEY (id),
 );

/* In case I want to update information */

 UPDATE
 SET
 WHERE

/* joins! */

 SELECT * FROM department;
 SELECT * FROM role;
 SELECT * FROM employee;
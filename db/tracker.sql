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
    salary DECIMAL(0,0) NOT NULL, /*what is decimal supposed to be? 6 figures? does it matter?*/
    department_id INT NOT NULL,

 );

 CREATE TABLE employee(
     id IN NOT NULL AUTO_INCREMENT, /*or primary key here? */
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT ,
     manager_id INT,
 );

 UPDATE
 SET
 WHERE

 SELECT * FROM 
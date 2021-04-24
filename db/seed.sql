USE trackerDB;

INSERT INTO department (name)
VALUES ('Accounting'), ('Design'), ('Marketing'), ('Production');

INSERT INTO role (title, salary, department_id)
VALUES ('Receptionist', 50000, 1), ('Accountant', 130000, 1), ('Creative Designer', 75000, 2), ('Publicist', 100000, 3), ('Producer', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values ('Viv', 'Albertine', 1, null), ('Alison', 'Mosshart', 2, 1), ('Valerie', 'June', 3, null), ('Sade', 'Sanchez', 4, 3), ('Normal', 'Tanega', 5, null);
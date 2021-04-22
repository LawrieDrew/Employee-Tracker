USE trackerDB;

INSERT INTO department (name)
VALUES ('shmoop');

INSERT INTO role (id, title, salary, department_id)
VALUES ('Receptionist', 50000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values ('Jane', 'Doe', 2, null);
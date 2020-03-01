drop database if exists employees_db;
create database employees_db;

use employees_db;

create table department (
    id int primary key,
    name varchar(30)
);

create table role (
    id init primary key,
    title varchar(30),
    salary decimal,
    department_id int
);

create table employee (
    id int primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id
);
create database HSP_DATABASE
create table Customers
(
customer_id int Not Null,
customer_name char(40) Not Null,
address char(50),
city char(50),
state char(50),
zip_code char(10),
constraint customers_pk PRIMARY KEY (customer_id));

insert into Customers values(1,'Aadhya','KRPURAM','BLORE','KA',560001);

select * from Customers

Alter table Customers alter column customer_name varchar(100);
Alter table Customers alter column address varchar(100);
Alter table Customers alter column city varchar(100);
Alter table Customers alter column state varchar(100);
Alter table Customers alter column zip_code int;






